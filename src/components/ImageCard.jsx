import React from "react";
import './ImageCard.css'

function ImageCard(props) {
  return (
    <div className="ImageCard">
      <img
        src={props.image}
        alt=""
      />
      <div className="name">
        <p>{props.name}</p>
      </div>
    </div>
  );
}

export default ImageCard;
