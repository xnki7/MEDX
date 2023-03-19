import React from 'react'
import './DateCard.css'
import { useState } from 'react'

function DateCard(props) {

  const [color, setColor] = useState("#13707c81");

  const setColor1 = () =>{
    setColor("#13707c")
  }

  return (
    <div className="date_card" onClick={setColor1} style={{backgroundColor : color}}>
        <p className="date">{props.date}</p>
        <p className="month">March</p>
    </div>
  )
}

export default DateCard