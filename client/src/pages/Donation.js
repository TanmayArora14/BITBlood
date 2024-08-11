// import moment from "moment";
// import React, { useEffect, useState } from "react";
// import Layout from "../components/shared/Layout/Layout";
// import API from "../services/API";
// import { useSelector } from "react-redux";

// const Donation = () => {
//   const { user } = useSelector((state) => state.auth);
//   const [data, setData] = useState([]);
//   //find donar records
//   const getDonars = async () => {
//     try {
//       const { data } = await API.post("/inventory/get-inventory-hospital", {
//         filters: {
//           inventoryType: "in",
//           donar: user?._id,
//         },
//       });
//       if (data?.success) {
//         setData(data?.inventory);
//         console.log(data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getDonars();
//   }, []);

//   return (
//     <Layout>
//       <div className="container mt-4">
//         <table className="table">
//           <thead>
//             <tr>
//               <th scope="col">Blood Group</th>
//               <th scope="col">Inventory TYpe</th>
//               <th scope="col">Quantity</th>
//               <th scope="col">Email</th>
//               <th scope="col">Date</th>
//             </tr>
//           </thead>
//           <tbody>
//             {data?.map((record) => (
//               <tr key={record._id}>
//                 <td>{record.bloodGroup}</td>
//                 <td>{record.inventoryType}</td>
//                 <td>{record.quantity}</td>
//                 <td>{record.email}</td>
//                 <td>{moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}</td>
//               </tr>
//             ))}
//           </tbody>
//         </table>
//       </div>
//     </Layout>
//   );
// };

// export default Donation;
import moment from "moment";
import React, { useEffect, useState } from "react";
import Layout from "../components/shared/Layout/Layout";
import API from "../services/API";
import { useSelector } from "react-redux";

const Donation = () => {
  const { user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);

  // find donor records
  const getDonors = async () => {
    try {
      const { data } = await API.post("/inventory/get-inventory-hospital", {
        filters: {
          inventoryType: "in",
          donor: user?._id,
        },
      });
      if (data?.success) {
        setData(data?.inventory);
        console.log(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getDonors();
  }, []);

  return (
    <Layout>
      <div className="donation-page-container">
        <style jsx>{`
          .donation-page-container {
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

          .modal-title, .modal-body, .modal-footer {
            color: black; /* Ensure modal text is black for readability */
          }
        `}</style>
        <div className="content-container">
          <table className="table">
            <thead>
              <tr>
                <th scope="col">Blood Group</th>
                <th scope="col">Inventory Type</th>
                <th scope="col">Quantity</th>
                <th scope="col">Email</th>
                <th scope="col">Date</th>
              </tr>
            </thead>
            <tbody>
              {data?.map((record) => (
                <tr key={record._id}>
                  <td>{record.bloodGroup}</td>
                  <td>{record.inventoryType}</td>
                  <td>{record.quantity}</td>
                  <td>{record.email}</td>
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

export default Donation;
