import React from "react";
import MailIcon from "@mui/icons-material/Mail";
import PhoneIcon from "@mui/icons-material/Phone";
import DateCard from "../components/DateCard";
import TimeCard from "../components/TimeCard";
import "./BookAppointment.css";
// import { useState } from "react";

const { ethereum } = window

function BookAppointment(props) {
  const account2 = "0x5bcbAEe0AE75D3e6Fa4d5AC39E69f5a96d376624";

  function handleTransaction(){
    let transactionParam = {
      to: account2,
      from: props.acc,
      value: "0x38D7EA4C68000",
    };
    ethereum.request({ method: "eth_sendTransaction", params: [transactionParam] })
      .then((txhash) => {
        console.log(txhash);
      });
  }
  // document.getElementById("send-button").addEventListener("click", (event) => {
  //   let transactionParam = {
  //     to: account2,
  //     from: props.acc,
  //     value: "0x38D7EA4C68000",
  //   };

  //   ethereum.request({ method: "eth_sendTransaction", params: [transactionParam] })
  //     .then((txhash) => {
  //       console.log(txhash);
  //     });
  // });

  // // eslint-disable-next-line
  // const [date, setDate] = useState();
  // // eslint-disable-next-line
  // const [time, setTime] = useState();

  // function dateHandler(data){
  //   console.log(date);
  //   setDate(data);
  // }

  // function timeHandler(data){
  //   console.log(time);
  //   setTime(data);
  // }

  return (
    <>
      <div className="BookAppointment">
        <div className="left_content">
          <div className="doctor_image">
            <img src={props.img} alt="" />
          </div>
          <div className="doctor_details">
            <p className="name">{props.name}</p>
            <p className="specialization">{props.spec}</p>
            <div className="contact_buttons">
              <PhoneIcon />
              <MailIcon />
            </div>
            <div className="doctor_more_info">
              <p className="location">📍 {props.dist} km away</p>
              <p className="doctor_rating">⭐ {props.rate}</p>
            </div>
          </div>
        </div>
        <div className="right_content">
          <h2>Book Appointment</h2>
          <div className="description">
            <p className="description_title">Description</p>
            <p className="description_content">
              The best {props.spec} in city.
            </p>
          </div>
          <div className="select_date">
            <p className="select_date_title">Select Date</p>
            <div className="date_cards">
              <DateCard date="20" />
              <DateCard date="21" />
              <DateCard date="22" />
              <DateCard date="23" />
              <DateCard date="24" />
            </div>
          </div>
          <div className="select_time">
            <p className="select_time_title">Select Time</p>
            <div className="time_cards">
              <TimeCard time="09:00" />
              <TimeCard time="09:15" />
              <TimeCard time="09:30" />
              <TimeCard time="09:45" />
            </div>
          </div>
          <button onClick={handleTransaction}>Book Appointment Now</button>
        </div>
      </div>
    </>
  );
}

export default BookAppointment;
