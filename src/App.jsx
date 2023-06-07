import { useContext, useEffect, useState } from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tour from "./components/Tour";
import Flight from "./components/Flight";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Forgetpass from "./pages/Forgetpass";
import Signup from "./pages/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-cofing.js";
import { userContext } from "./context/UserContext.jsx";
import ResetPassword from "./pages/ResetPassword";
import ReservationConfirm from "./pages/ReservationConfirm";
import TourList from "./pages/TourList";
import FlightsList from "./pages/FlightsList";
import axios from "axios";

function App() {
  const { setUser } = useContext(userContext);
  const [loading, setLoading] = useState(true);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });
  const [tours, setTours] = useState([]);
  const [countries, setCountries] = useState([]);

  useEffect(() => {
    axios
      .get("https://booking-flights-web-application.onrender.com/api/v1/tours")
      .then((data) => {
        setTours(data.data.data);
        setCountries([
          ...new Set(data.data.data.map((tour) => tour.fromCountry)),
        ]);
      })
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    console.log(tours);
  }, [tours]);

  return (
    <div className="App">
      {loading && (
        <div>
          <span className="loader"></span>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Tour />
              <Flight
                tours={tours}
                setTours={setTours}
                countries={countries}
                setCountries={setCountries}
              />
              <Review />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
        <Route path="/confirm-reservation" element={<ReservationConfirm />} />
        <Route path="/tour-list" element={<TourList />} />
        <Route
          path="/flights-list"
          element={
            <FlightsList
              tours={tours}
              setTours={setTours}
              countries={countries}
              setCountries={setCountries}
            />
          }
        />
      </Routes>
    </div>
  );
}

export default App;
