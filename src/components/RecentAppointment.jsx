import React from 'react'
import './RecentAppointment.css'

function RecentAppointment(props) {
  return (
    <div className="recent_appointments">
        <div className="left_content">
            <p className="name">{props.name}</p>
            <p className="specialization">{props.spec}</p>
            <p className="distance">📍 {props.dist} km away</p>
        </div>
        <div className="right_content">
            <p className="your_rating">Your Rating:</p>
            <p className="stars">{props.rate}</p>
        </div>
    </div>
  )
}

export default RecentAppointment
