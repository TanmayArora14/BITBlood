import React, { useEffect, useState } from "react";
import Layout from "./../../components/shared/Layout/Layout";
import moment from "moment";
import { useSelector } from "react-redux";
import API from "../../services/API";

const OrganisationPage = () => {
  // get current user
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  // find org records
  const getOrg = async () => {
    try {
      if (user?.role === "donar") {
        const { data } = await API.get("/inventory/get-orgnaisation");
        if (data?.success) {
          setData(data?.organisations);
        }
      }
      if (user?.role === "hospital") {
        const { data } = await API.get(
          "/inventory/get-orgnaisation-for-hospital"
        );
        if (data?.success) {
          setData(data?.organisations);
        }
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getOrg();
  }, [user]);

  return (
    <Layout>
      <div className="organisation-page-container">
        <style jsx>{`
          .organisation-page-container {
            background-image: url('./assets/images/homepage_photo.jpg');
            background-size: cover; /* Cover the entire container */
            background-position: center; /* Center the background image */
            background-repeat: no-repeat; /* Prevent the image from repeating */
            min-height: 100vh; /* Ensure the container takes up at least the full height of the viewport */
            padding: 1rem; /* Optional: Add padding if needed */
            color: white; /* Ensure all text is white */
          }

          .content-container {
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background to ensure text is readable */
            padding: 2rem; /* Add padding around the content */
            border-radius: 10px; /* Optional: Add rounded corners */
            max-width: 100%; /* Ensure content does not exceed the container width */
            overflow-x: auto; /* Allow horizontal scrolling if content overflows */
          }

          .table th, .table td {
            color: white; /* Ensure table text is white */
          }
        `}</style>
        <div className="content-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Name</th>
                <th scope="col">Email</th>
                <th scope="col">Phone</th>
                <th scope="col">Address</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.organisationName}</td>
                  <td>{record.email}</td>
                  <td>{record.phone}</td>
                  <td>{record.address}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </Layout>
  );
};

export default OrganisationPage;
