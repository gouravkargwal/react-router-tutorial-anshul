import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  let data = "Profile";
  return (
    <div>
      <h1>Contact</h1>
      <button
        onClick={() => {
          navigate("/profile/gourav", { state: data });
        }}
      >
        Visit Gourav Profile
      </button>
    </div>
  );
};

export default Contact;
