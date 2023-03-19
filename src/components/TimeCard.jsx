import React from 'react'
import './TimeCard.css'
import { useState } from 'react';

function TimeCard(props) {

  const [color, setColor] = useState("#13707c81");

  const setColor1 = () =>{
    setColor("#13707c")
  }

  return (
    <div className="time_card" onClick={setColor1} style={{backgroundColor : color}}>
        <p className="time_num">{props.time}</p>
        <p className="time_period">AM</p>
    </div>
  )
}

export default TimeCard
