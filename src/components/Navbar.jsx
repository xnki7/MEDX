import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {

  return (
    <div className="Navbar">
      <div className="left">
        <Link to="/">
          <img className="logo" src="./Med-x-1 1.png" alt="" />
        </Link>
      </div>
      <div className="right">
        <Link to="/aboutus">
          <button className="about_us">About Us</button>
        </Link>
        <Link to="/doctors">
          <button className="Register">Doctors</button>
        </Link>
        <Link to="/appointments">
          <button className="appointments">Appointments</button>
        </Link>

        <button className="connect_wallet" >
          Log In / Sign Up
          <Link to="/userprofile">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
              className="wallet_pic"
              alt=""
            />
          </Link>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
