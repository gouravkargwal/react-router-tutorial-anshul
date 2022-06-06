import React from "react";
import { useLocation } from "react-router-dom";

const Login = () => {
  let location = useLocation();
  console.log(location.state.reason);
  return (
    <div>
      Login
      {/* {alert(location.state.reason)} */}
    </div>
  );
};

export default Login;
