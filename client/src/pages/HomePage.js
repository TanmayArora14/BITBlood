// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Spinner from "../components/shared/Spinner";
// import Layout from "../components/shared/Layout/Layout";
// import Modal from "../components/shared/modal/Modal";
// import API from "../services/API";
// import moment from "moment";

// const HomePage = () => {
//   const { loading, error, user } = useSelector((state) => state.auth);
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   //get function
//   const getBloodRecords = async () => {
//     try {
//       const { data } = await API.get("/inventory/get-inventory");
//       if (data?.success) {
//         setData(data?.inventory);
//         // console.log(data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getBloodRecords();
//   }, []);
//   return (
//     <Layout>
//       {user?.role === "admin" && navigate("/admin")}
//       {error && <span>{alert(error)}</span>}
//       {loading ? (
//         <Spinner />
//       ) : (
//         <>
//           <div className="container">
//             <h4
//               className="ms-4"
//               data-bs-toggle="modal"
//               data-bs-target="#staticBackdrop"
//               style={{ cursor: "pointer" }}
//             >
//               <i className="fa-solid fa-plus text-success py-4"></i>
//               Add Inventory
//             </h4>
//             <table className="table ">
//               <thead>
//                 <tr>
//                   <th scope="col">Blood Group</th>
//                   <th scope="col">Inventory Type</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Donar Email</th>
//                   <th scope="col">TIme & Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data?.map((record) => (
//                   <tr key={record._id}>
//                     <td>{record.bloodGroup}</td>
//                     <td>{record.inventoryType}</td>
//                     <td>{record.quantity} (ML)</td>
//                     <td>{record.email}</td>
//                     <td>
//                       {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>

//             <Modal />
//           </div>
//         </>
//       )}
//     </Layout>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Spinner from "../components/shared/Spinner";
// import Layout from "../components/shared/Layout/Layout";
// import Modal from "../components/shared/modal/Modal";
// import API from "../services/API";
// import moment from "moment";

// const HomePage = () => {
//   const { loading, error, user } = useSelector((state) => state.auth);
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   // get function
//   const getBloodRecords = async () => {
//     try {
//       const { data } = await API.get("/inventory/get-inventory");
//       if (data?.success) {
//         setData(data?.inventory);
//         // console.log(data);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getBloodRecords();
//   }, []);

//   return (
//     <Layout>
//       {user?.role === "admin" && navigate("/admin")}
//       {error && <span>{alert(error)}</span>}
//       {loading ? (
//         <Spinner />
//       ) : (
//         <>
//           <div className="homepage-container">
//             <div className="container">
//               <h4
//                 className="ms-4"
//                 data-bs-toggle="modal"
//                 data-bs-target="#staticBackdrop"
//                 style={{ cursor: "pointer" }}
//               >
//                 <i className="fa-solid fa-plus text-success py-4"></i>
//                 Add Inventory
//               </h4>
//               <table className="table">
//                 <thead>
//                   <tr>
//                     <th scope="col">Blood Group</th>
//                     <th scope="col">Inventory Type</th>
//                     <th scope="col">Quantity</th>
//                     <th scope="col">Donar Email</th>
//                     <th scope="col">Time & Date</th>
//                   </tr>
//                 </thead>
//                 <tbody>
//                   {data?.map((record) => (
//                     <tr key={record._id}>
//                       <td>{record.bloodGroup}</td>
//                       <td>{record.inventoryType}</td>
//                       <td>{record.quantity} (ML)</td>
//                       <td>{record.email}</td>
//                       <td>
//                         {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
//                       </td>
//                     </tr>
//                   ))}
//                 </tbody>
//               </table>

//               <Modal />
//             </div>
//           </div>
//           <style jsx>{`
//             .homepage-container {
//               background-image: url('./assets/images/homepage_photo.jpg'); /* Background image */
//               background-size: cover; /* Cover the entire container */
//               background-position: center; /* Center the image */
//               background-repeat: no-repeat; /* Do not repeat the image */
//               min-height: 100vh; /* Ensure the container covers the full height of the viewport */
//               display: flex;
//               align-items: center; /* Center content vertically */
//               justify-content: center; /* Center content horizontally */
//               color: white; /* Text color */
//             }

//             .container {
//               background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background for the content */
//               padding: 2rem;
//               border-radius: 10px;
//               width: 100%;
//               max-width: 1200px; /* Max width for large screens */
//               box-sizing: border-box; /* Include padding in width calculation */
//               overflow-x: auto; /* Allow horizontal scroll if necessary */
//             }

//             .table {
//               color: white; /* Table text color */
//             }
//           `}</style>
//         </>
//       )}
//     </Layout>
//   );
// };

// export default HomePage;


// import React, { useEffect, useState } from "react";
// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import Spinner from "../components/shared/Spinner";
// import Layout from "../components/shared/Layout/Layout";
// import Modal from "../components/shared/modal/Modal";
// import API from "../services/API";
// import moment from "moment";

// const HomePage = () => {
//   const { loading, error, user } = useSelector((state) => state.auth);
//   const [data, setData] = useState([]);
//   const navigate = useNavigate();

//   //get function
//   const getBloodRecords = async () => {
//     try {
//       const { data } = await API.get("/inventory/get-inventory");
//       if (data?.success) {
//         setData(data?.inventory);
//       }
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     getBloodRecords();
//   }, []);
  
//   return (
//     <Layout>
//       {user?.role === "admin" && navigate("/admin")}
//       {error && <span>{alert(error)}</span>}
//       {loading ? (
//         <Spinner />
//       ) : (
//         <div className="home-page-container">
//           <style jsx>{`
//             .home-page-container {
//             color : white;
//               background-image: url('./assets/images/homepage_photo.jpg');
//               background-size: cover; /* Cover the entire container */
//               background-position: center; /* Center the background image */
//               background-repeat: no-repeat; /* Prevent the image from repeating */
//               min-height: 100vh; /* Ensure the container takes up at least the full height of the viewport */
//               padding: 1rem; /* Optional: Add padding if needed */
//             }

//             .content-container {
//                color : white;
//               background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background to ensure text is readable */
//               padding: 2rem; /* Add padding around the content */
//               border-radius: 10px; /* Optional: Add rounded corners */
//               max-width: 100%; /* Ensure content does not exceed the container width */
//               overflow-x: auto; /* Allow horizontal scrolling if content overflows */
//             }
//           `}</style>
//           <div className="content-container">
//             <h4
//               className="ms-4"
//               data-bs-toggle="modal"
//               data-bs-target="#staticBackdrop"
//               style={{ cursor: "pointer" }}
//             >
//               <i className="fa-solid fa-plus text-success py-4"></i>
//               Add Inventory
//             </h4>
//             <table className="table ">
//               <thead>
//                 <tr>
//                   <th scope="col">Blood Group</th>
//                   <th scope="col">Inventory Type</th>
//                   <th scope="col">Quantity</th>
//                   <th scope="col">Donor Email</th>
//                   <th scope="col">Time & Date</th>
//                 </tr>
//               </thead>
//               <tbody>
//                 {data?.map((record) => (
//                   <tr key={record._id}>
//                     <td>{record.bloodGroup}</td>
//                     <td>{record.inventoryType}</td>
//                     <td>{record.quantity} (ML)</td>
//                     <td>{record.email}</td>
//                     <td>
//                       {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
//                     </td>
//                   </tr>
//                 ))}
//               </tbody>
//             </table>
//             <Modal />
//           </div>
//         </div>
//       )}
//     </Layout>
//   );
// };

// export default HomePage;


import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Spinner from "../components/shared/Spinner";
import Layout from "../components/shared/Layout/Layout";
import Modal from "../components/shared/modal/Modal";
import API from "../services/API";
import moment from "moment";

const HomePage = () => {
  const { loading, error, user } = useSelector((state) => state.auth);
  const [data, setData] = useState([]);
  const navigate = useNavigate();

  //get function
  const getBloodRecords = async () => {
    try {
      const { data } = await API.get("/inventory/get-inventory");
      if (data?.success) {
        setData(data?.inventory);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getBloodRecords();
  }, []);

  return (
    <Layout>
      {user?.role === "admin" && navigate("/admin")}
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="home-page-container">
          <style jsx>{`
            .home-page-container {
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
            <h4
              className="ms-4"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
              style={{ cursor: "pointer" }}
            >
              <i className="fa-solid fa-plus text-success py-4"></i>
              Add Inventory
            </h4>
            <table className="table ">
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
                {data?.map((record) => (
                  <tr key={record._id}>
                    <td>{record.bloodGroup}</td>
                    <td>{record.inventoryType}</td>
                    <td>{record.quantity} (ML)</td>
                    <td>{record.email}</td>
                    <td>
                      {moment(record.createdAt).format("DD/MM/YYYY hh:mm A")}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <Modal />
          </div>
        </div>
      )}
    </Layout>
  );
};

export default HomePage;
