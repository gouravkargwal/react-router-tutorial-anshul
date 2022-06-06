import React from "react";
import { useNavigate } from "react-router-dom";

const About = () => {
  let navigate = useNavigate();

  return (
    <div>
      About
      <h2>React Tutorials</h2>
      <button
        onClick={() => {
          navigate("/");
        }}
      >
        Click
      </button>
    </div>
  );
};

export default About;
