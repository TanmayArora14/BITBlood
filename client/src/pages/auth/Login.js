import React from "react";
import Form from "../../components/shared/Form/Form";
import { useSelector } from "react-redux";
import Spinner from "./../../components/shared/Spinner";

const Login = () => {
  const { loading, error } = useSelector((state) => state.auth);
  return (
    <>
      {error && <span>{alert(error)}</span>}
      {loading ? (
        <Spinner />
      ) : (
        <>
          <style jsx>{`
            .login-container {
              display: flex;
              align-items: center;
              justify-content: center;
              height: 100vh; /* Full height of the viewport */
              position: relative;
              color: white; /* White text color */
            }

            .login-container::before {
              content: '';
              position: absolute;
              top: 0;
              left: 0;
              width: 100%;
              height: 100%;
              background-image: url('./assets/images/logo-photo.jpg'); /* Background image */
              background-size: cover; /* Cover the whole container */
              background-position: center; /* Center the background image */
              opacity: 1; /* Adjust the opacity for transparency */
              z-index: -1; /* Ensure the overlay is behind the form */
            }

            .form-container {
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent background */
              padding: 2rem;
              border-radius: 10px;
            }

            .form-container h1 {
              margin-bottom: 1rem;
              display: flex;
              align-items: center;
              font-size: 1.5rem;
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
          <div className="login-container">
            <div className="form-container">
              <h1>
                <i className="fa-solid fa-hand-holding-medical"></i>
                Welcome Back!
              </h1>
              <Form
                //formTitle={"Welcome Back!"}
                submitBtn={"Login"}
                formType={"login"}
              />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default Login;
