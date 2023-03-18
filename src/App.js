import "./App.css";
import Landingpage from "./pages/Landingpage";
import UserProfile from "./pages/UserProfile";
import Navbar from "./components/Navbar";
import Doctors from "./pages/Doctors";
import BookAppointment from "./pages/BookAppointment";
import AboutUs from "./pages/AboutUs";
import Appointments from "./pages/Appointments";
import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {

  return (
    <div className="App">
      <BrowserRouter>
        <Navbar/>
        <Routes>
          <Route path="/" element={<Landingpage />} />
          <Route
            path="doctors"
            element={
              <Doctors
              />
            }
          />
          <Route path="aboutus" element={<AboutUs />} />
          <Route
            path="userprofile"
            element={<UserProfile />}
          />
          <Route path="appointments" element={<Appointments />} />
          <Route path="userprofile" element={<UserProfile />} />
          <Route
            path="bookappointment1"
            element={
              <BookAppointment
                name="Dr. Ajay Singh"
                spec="Cardiologist"
                dist="1.2"
                rate="4.9"
                img="https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0="
              />
            }
          />

          <Route
            path="bookappointment2"
            element={
              <BookAppointment
                name="Dr. Vineet Goyal"
                spec="Anesthesiologist"
                dist="11.5"
                rate="4.6"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ-hSH06Kzs-64ayH4fvxTziku0-ZEVzG8KXw&usqp=CAU"
              />
            }
          />

          <Route
            path="bookappointment3"
            element={
              <BookAppointment
                name="Dr. Ayush Rai"
                spec="Orthopedic Surgeon"
                dist="3.9"
                rate="3.7"
                img="https://st.depositphotos.com/1518767/4292/i/600/depositphotos_42920323-stock-photo-portrait-of-a-confident-male.jpg"
              />
            }
          />

          <Route
            path="bookappointment4"
            element={
              <BookAppointment
                name="Dr. Vineesh Rao"
                spec="Dermatologist"
                dist="4.1"
                rate="5.0"
                img="https://thumbs.dreamstime.com/b/confident-doctor-over-white-background-portrait-male-standing-vertical-shot-39366393.jpg"
              />
            }
          />

          <Route
            path="bookappointment5"
            element={
              <BookAppointment
                name="Dr. Ganpat Singh"
                spec="Radiologist"
                dist="6.2"
                rate="4.1"
                img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRc5QYLZBtvSxdOH0GPbU4QjhiqQ1h37DAw9qfpAFHv1bMCHrmhlOybmvSICi8x_wo6Ors&usqp=CAU"
              />
            }
          />

          <Route
            path="bookappointment6"
            element={
              <BookAppointment
                name="Dr. Prakash Sharama"
                spec="Gynecologist"
                dist="7.7"
                rate="3.5"
                img="https://img.freepik.com/free-photo/doctor-with-his-arms-crossed-white-background_1368-5790.jpg?w=2000"
              />
            }
          />

          <Route
            path="bookappointment1"
            element={
              <BookAppointment
                name="Dr. Ajay Singh"
                spec="Cardiologist"
                dist="1.2"
                rate="4.9"
                img="https://media.istockphoto.com/id/138205019/photo/happy-healthcare-practitioner.jpg?s=612x612&w=0&k=20&c=b8kUyVtmZeW8MeLHcDsJfqqF0XiFBjq6tgBQZC7G0f0="
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
