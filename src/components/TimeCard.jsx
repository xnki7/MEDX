import React from 'react'
import './TimeCard.css'

function TimeCard(props) {
  return (
    <div className="time_card">
        <p className="time_num">{props.time}</p>
        <p className="time_period">AM</p>
    </div>
  )
}

export default TimeCard
