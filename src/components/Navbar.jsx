import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";
import { ethers } from 'ethers';

const Navbar = ({account,setAccount})=> {

  const connectHandler = async()=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
    setAccount(account);
  }

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

        {account ?(
          <button className="connect_wallet">
            {account.slice(0, 6) + '...' + account.slice(38, 42)}{" "}
            <Link to="/userprofile">
            <img
              src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000"
              className="wallet_pic"
              alt=""
            />
          </Link>
          </button>
        ):(
          <button className="connect_wallet" onClick={connectHandler}>
          Connect Wallet{" "}
          <Link to="/userprofile">
            <img
              src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png"
              className="wallet_pic"
              alt=""
            />
          </Link>
        </button>
        )}
      </div>
    </div>
  );
}

export default Navbar;
