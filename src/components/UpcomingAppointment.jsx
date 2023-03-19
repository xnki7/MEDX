import React from 'react'
import "./UpcomingAppointment.css"

function UpcomingAppointment(props) {
  return (
    <div className="upcoming_appointments">
        <div className="left_content">
            <p className="name">{props.name}</p>
            <p className="specialization">{props.spec}</p>
            <p className="distance">📍 {props.dist} km away</p>
        </div>
        <div className="right_content">
            <p className="date">{props.date} March</p>
            <p className="time">{props.time} AM</p>
        </div>
    </div>
  )
}

export default UpcomingAppointment
