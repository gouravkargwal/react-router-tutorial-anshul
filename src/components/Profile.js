import React from "react";
import { useParams, useLocation } from "react-router-dom";

const Profile = () => {
  let { username } = useParams();
  let location = useLocation();
  console.log(location);
  return (
    <div>
      <h1>My name is {username}.</h1>
      <p>I am a React Developer</p>
    </div>
  );
};

export default Profile;
