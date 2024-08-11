import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "../../components/shared/Spinner";

const Register = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <div className="register-container">
          <div className="form-container">
            <style jsx>{`
              .register-container {
                display: flex;
                align-items: center;
                justify-content: center;
                height: 100vh; /* Full height of the viewport */
                position: relative;
                color: white; /* White text color */
                background-image: url('./assets/images/logo-photo.jpg'); /* Background image */
                background-size: cover; /* Cover the whole container */
                background-position: center; /* Center the background image */
                background-repeat: no-repeat; /* Prevent repetition of the background image */
                overflow: hidden; /* Prevents overflow of content */
              }

              .form-container {
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
                padding: 2rem;
                border-radius: 10px;
                max-width: 90%; /* Responsive max width */
                width: 400px; /* Fixed width to ensure form doesn't exceed screen width */
                box-sizing: border-box; /* Include padding in width calculation */
                max-height: 90vh; /* Restrict maximum height to 90% of viewport height */
                overflow: auto; /* Allow scrolling if content overflows */
                position: relative;
              }

              .form-container h1 {
                margin-bottom: 2rem; /* Space below the heading */
                display: flex;
                align-items: center;
                font-size: 1.5rem;
                text-align: center; /* Center align the heading */
              }

              .form-container h1 i {
                margin-right: 0.5rem; /* Space between icon and text */
                font-size: 1.8rem; /* Adjust icon size */
              }

              .form-container input {
                width: 100%;
                padding: 0.5rem;
                margin: 0.5rem 0;
                border: none;
                border-radius: 5px;
                background-color: rgba(255, 255, 255, 0.2); /* Transparent background for inputs */
                color: white; /* Text color inside input */
                position: relative;
                z-index: 1; /* Ensure input is above the placeholder */
              }

              .form-container input::placeholder {
                color: rgba(255, 255, 255, 0.7); /* Placeholder color */
              }

              .form-container input:focus::placeholder {
                color: rgba(255, 255, 255, 0.7); /* Keep placeholder color on focus */
              }

              .form-container input:focus {
                outline: none; /* Remove default focus outline */
              }

              .form-container button {
                width: 100%;
                padding: 0.5rem;
                margin-top: 1rem;
                border: none;
                border-radius: 5px;
                background-color: #e36f9f; /* Button color */
                color: white;
                cursor: pointer;
              }

              .form-container button:hover {
                background-color: #c05b7a; /* Darker button color on hover */
              }
            `}</style>
            <h1>
              <i className="fa-solid fa-hand-holding-medical"></i>
              Enroll to Make a Difference
            </h1>
            <Form
              formTitle={"Register"}
              submitBtn={"Register"}
              formType={"register"}
            />
          </div>
        </div>
      )}
    </>
  );
};

export default Register;
