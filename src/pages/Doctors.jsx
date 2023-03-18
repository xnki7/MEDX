import React, { useEffect } from "react";
import "./Doctors.css";
import DoctorCard from "../components/DoctorCard";
import { Link } from "react-router-dom";

function Doctors(AppointmentsContract, PatientsContract) {
  async function getDoctorData() {
    const doc1 = await AppointmentsContract.functions.doctors(
      "0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266"
    );
    console.log(doc1);
  }

  useEffect(() => {
    getDoctorData();
  });

  return (
    <div className="doctors">
      <div className="doctors_header">
        <Link to="/">
          <button>back</button>
        </Link>
        <h1>OUR DOCTORS</h1>
      </div>
      <div className="doctor_cards_content">
        <Link to="/bookappointment1">
          <DoctorCard
            name="Dr. Ajay Singh"
            spec="Psychiatrist"
            dist="1.2"
            rate="4.9"
            img="https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0="
          />
        </Link>
        <Link to="/bookappointment2">
          <DoctorCard
            name="Dr. Vineet Goyal"
            spec="Psychiatrist"
            dist="11.5"
            rate="4.6"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hSH06Kzs-64ayH4fvxTziku0-ZEVzG8KXw&usqp=CAU"
          />
        </Link>
        <Link to="/bookappointment3">
          <DoctorCard
            name="Dr. Ayush Rai"
            spec="Psychiatrist"
            dist="3.9"
            rate="3.7"
            img="https://st.depositphotos.com/1518767/4292/i/600/depositphotos_42920323-stock-photo-portrait-of-a-confident-male.jpg"
          />
        </Link>
      </div>
      <div className="doctor_cards_content2">
        <Link to="/bookappointment4">
          <DoctorCard
            name="Dr. Vineesh Rao"
            spec="Psychiatrist"
            dist="4.1"
            rate="5.0"
            img="https://thumbs.dreamstime.com/b/confident-doctor-over-white-background-portrait-male-standing-vertical-shot-39366393.jpg"
          />
        </Link>
        <Link to="/bookappointment5">
          <DoctorCard
            name="Dr. Ganpat Singh"
            spec="Psychiatrist"
            dist="6.2"
            rate="4.1"
            img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5QYLZBtvSxdOH0GPbU4QjhiqQ1h37DAw9qfpAFHv1bMCHrmhlOybmvSICi8x_wo6Ors&usqp=CAU"
          />
        </Link>
        <Link to="/bookappointment6">
          <DoctorCard
            name="Dr. Prakash Sharama"
            spec="Psychiatrist"
            dist="7.7"
            rate="3.5"
            img="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=2000"
          />
        </Link>
      </div>
    </div>
  );
}

export default Doctors;
