import React, { useState, useEffect } from "react";
import Header from "../../components/shared/Layout/Header";
import API from "./../../services/API";
import moment from "moment";

const Analytics = () => {
  const [data, setData] = useState([]);
  const [inventoryData, setInventoryData] = useState([]);

  // GET BLOOD GROUP DATA
  const getBloodGroupData = async () => {
    try {
      const { data } = await API.get("/analytics/bloodGroups-data");
      if (data?.success) {
        setData(data?.bloodGroupData);
      }
    } catch (error) {
      console.log(error);
    }
  };

  // Lifecycle method
  useEffect(() => {
    getBloodGroupData();
  }, []);

  // Get recent inventory
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-recent-inventory");
      if (data?.success) {
        setInventoryData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <>
      <Header />
      <div className="analytics-page-container">
        <style jsx>{`
          .analytics-page-container {
            background-image: url('./assets/images/homepage_photo.jpg');
            background-size: cover;
            background-position: center;
            background-repeat: no-repeat;
            min-height: 100vh;
            padding: 1rem;
            color: white;
          }

          .content-container {
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for content */
            padding: 2rem;
            border-radius: 10px;
            max-width: 100%;
            overflow-x: auto;
          }

          .card {
            color: white;
            margin: 1rem;
            padding: 1rem;
            border-radius: 10px;
            flex: 1 1 calc(25% - 2rem); /* Each card takes up approximately 25% of the width, minus margin */
            box-sizing: border-box; /* Ensures padding and border are included in the width calculation */
            background-color: rgba(255, 255, 255, 0.2); /* Semi-transparent background for the cards */
          }

          .card-title {
            background-color: rgba(255, 255, 255, 0.8);
            color: black;
            border-radius: 5px;
          }

          .card-footer {
            background-color: rgba(0, 0, 0, 0.7);
          }

          @media (max-width: 1200px) {
            .card {
              flex: 1 1 calc(33.33% - 2rem); /* 3 cards per row for medium screens */
            }
          }

          @media (max-width: 900px) {
            .card {
              flex: 1 1 calc(50% - 2rem); /* 2 cards per row for smaller screens */
            }
          }

          @media (max-width: 600px) {
            .card {
              flex: 1 1 100%; /* 1 card per row for very small screens */
            }
          }

          .table th,
          .table td {
            color: white; /* Set text color to white for the table */
          }

          .table thead th {
            background-color: rgba(0, 0, 0, 0.7); /* Darker background for table headers */
          }

          .table tbody tr {
            background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for table rows */
          }
        `}</style>
        <div className="d-flex flex-row flex-wrap content-container">
          {data?.map((record, i) => (
            <div
              className="card"
              key={i}
            >
              <div className="card-body">
                <h1 className="card-title text-center mb-3">
                  {record.bloodGroup}
                </h1>
                <p className="card-text">
                  Total In : <b>{record.totalIn}</b> (ML)
                </p>
                <p className="card-text">
                  Total Out : <b>{record.totalOut}</b> (ML)
                </p>
              </div>
              <div className="card-footer text-center">
                Total Available : <b>{record.availabeBlood}</b> (ML)
              </div>
            </div>
          ))}
        </div>
        <div className="container my-3 content-container">
          <h1 className="my-3">Recent Blood Transactions</h1>
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Donor Email</th>
                <th scope="col">Time & Date</th>
              </tr>
            </thead>
            <tbody>
              {inventoryData?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.quantity} (ML)</td>
                  <td>{record.email}</td>
                  <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </>
  );
};

export default Analytics;
