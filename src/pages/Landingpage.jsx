import React from "react";
import "./Landingpage.css";

function Landingpage() {
  return (
    <div className="Landingpage">
      <div className="content">
        <div className="leftcontent">
          <img className="bg_img" alt="" src={require("./cropped2.png")} />
        </div>
        <div className="rightcontent">
          <div className="slogan">
            <h1 className="head">Welcome To Med-X .</h1>
            <h1 className="head">This Is A Slogan</h1>
            <p className="slogan_para">
              "Welcome to med-X Hospital, a decentralized healthcare facility dedicated to providing high-quality, patient-centered care to our community.
            </p>
            <button className="appointment">Book An Appointment Now</button>
          </div>
          <div className="quality">
            <div className="leftquality">
                <h1 className="quality_head">
                  24x7
                  <h2>available</h2>
                </h1>
                <hr />
              <p className="quality_para">
                We are available 24x7 for your service. Book an appointment now at Med-x now.
              </p>
            </div>
            <div className="rightquality">
                <h1 className="quality_head">
                  Best
                  <h2>Doctors</h2>
                </h1>
                <hr />
              <p className="quality_para">
                We ensure you that you will be treated by best doctors of the
                world
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Landingpage;
