import React from "react";
import { useNavigate } from "react-router-dom"; // optional if using react-router
import { SIGNUP_URL } from "../api";

const Logout = () => {
   const redirectToFrontend = () => {
    // Clear local storage if you want to log the user out
    localStorage.removeItem("token");
    localStorage.removeItem("user");

    // Redirect to your frontend signup/login page
    window.location.href = SIGNUP_URL;
  };
  
 
    

  return (
    <div
      style={{ cursor: "pointer", height: "100vh" }} // optional styling
      onClick={redirectToFrontend} // click anywhere in dashboard div
    >
      
     <a> <p>Click anywhere to go to the frontend signup/login page</p></a>
    </div>
  );
};

export default Logout;