import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const navbarStyle = ({ isActive }) => {
    return { backgroundColor: isActive ? "green" : "" };
  };
  return (
    <nav>
      <NavLink to="/" style={navbarStyle}>
        Home
      </NavLink>
      <NavLink to="/about" style={navbarStyle}>
        About
      </NavLink>
      <NavLink to="/contact" style={navbarStyle}>
        Contact
      </NavLink>
      <NavLink to="/dashboard" style={navbarStyle}>
        Dashboard
      </NavLink>
      {/* <a href="/contact">Contact</a> */}
    </nav>
  );
};

export default Navbar;
