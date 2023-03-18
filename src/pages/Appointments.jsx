import React from "react";
import UpcomingAppointment from "../components/UpcomingAppointment";
import RecentAppointment from "../components/RecentAppointment";
import "./Appointments.css";

function Appointments() {
  return (
    <>
      <div className="Appointmentss">
        <h1>Appointments</h1>
        <h2>Upcoming Appointment(s):</h2>
        <div className="upcoming_appointments_list">
          <UpcomingAppointment
            name="Dr. Ayush Rai"
            spec="Psychiatrist"
            dist="3.9"
            date="22"
            time="09:00"
          />
          <UpcomingAppointment
            name="Dr. Vineet Goyal"
            spec="Psychiatrist"
            dist="11.5"
            date="23"
            time="09:15"
          />
        </div>
        <h2>Recent Appointment(s):</h2>
        <div className="recent_appointments_list">
          <RecentAppointment
            name="Dr. Ganpat Singh"
            spec="Psychiatrist"
            dist="6.2"
            rate="⭐⭐⭐⭐⭐"
          />
          <RecentAppointment
            name="Dr. Prakash Sharama"
            spec="Psychiatrist"
            dist="7.7"
            rate="⭐⭐⭐⭐"
          />
        </div>
      </div>
    </>
  );
}

export default Appointments;
