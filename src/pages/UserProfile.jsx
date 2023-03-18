import React from "react";
import "./UserProfile.css";
import { Link } from "react-router-dom";
import { ethers } from 'ethers';

function UserProfile({account,setAccount}) {
  const connectHandler = async()=>{
    const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
    const account = ethers.utils.getAddress(accounts[0])
        setAccount(account);
  }
  return (
    <div className="User_profile">
      <div className="profile_nav">
        <Link to="/">
          <button>Back</button>
        </Link>
        <h2>USER PROFILE</h2>
      </div>
      <div className="profile_content">
        <div className="left_content">
          <div className="profile_entry">
            <p className="entry_head">Name</p>
            <p className="entry_detail">: Tushar Sharma</p>
          </div>
          <div className="profile_entry">
            <p className="entry_head">Age</p>
            <p className="entry_detail">: 22</p>
          </div>
          <div className="profile_entry">
            <p className="entry_head">Height</p>
            <p className="entry_detail">: 5 ft | 10 Inch</p>
          </div>
          <div className="profile_entry">
            <p className="entry_head">Weight</p>
            <p className="entry_detail">: 72 Kgs</p>
          </div>
          <div className="profile_entry">
            <p className="entry_head">Phone</p>
            <p className="entry_detail">: +91 6879453269</p>
          </div>
        </div>
        <div className="right_content">
          <img src="https://img.freepik.com/free-photo/handsome-confident-smiling-man-with-hands-crossed-chest_176420-18743.jpg?w=2000" alt="" />
          {account ?(
            <button>
              {account.slice(0, 6) + '...' + account.slice(38, 42)}{" "}
            </button>
          ):(
            <button onClick={connectHandler}>Connect Wallet</button>
          )}
          {/* <button>Address</button> */}
        </div>
      </div>
      <div className="appointment">
        <div className="previous_appointments">
          <p className="previous_appointments_head">Previous Appointments</p>
          <p className="previous_appointments_detail">15</p>
        </div>
        <div className="pending_appointments">
          <p className="pending_appointments_head">Pending Appointments</p>
          <p className="pending_appointments_detail">2</p>
        </div>
      </div>
      <div className="edit_profile">
        <button>Edit Profile</button>
      </div>
    </div>
  );
}

export default UserProfile;
