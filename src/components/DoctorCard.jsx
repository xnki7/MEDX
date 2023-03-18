import React from "react";
import "./DoctorCard.css";

function DoctorCard(props) {
  return (
    <div>
      <div className="doctor_card">
        <div className="doctor_image">
          <img
            src={props.img}
            alt=""
          />
        </div>
        <div className="doctor_details">
          <div className="doctor_name">
            <p>{props.name}</p>
          </div>
          <div className="doctor_specialization">
            <p>{props.spec}</p>
          </div>
        </div>
        <div className="doctor_more_info">
          <p className="location">📍 {props.dist} km away</p>
          <p className="doctor_rating">⭐ {props.rate}</p>
        </div>
      </div>
    </div>
  );
}

export default DoctorCard;
