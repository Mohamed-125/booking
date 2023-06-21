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
  // onAuthStateChanged(auth, (currentUser) => {
  //   setUser(currentUser);
  //   setLoading(false);
  // });
  const [flights, setFlights] = useState([]);
  const [flightsCountries, setFlightsCountries] = useState([]);
  const [tours, setTours] = useState([]);
  const [toursCountries, setToursCountries] = useState([]);
  const [fromToursCity, setFromToursCity] = useState([]);
  const [toToursCity, setToToursCity] = useState([]);

  useEffect(() => {
    axios
      .get(
        "https://booking-flights-web-application.onrender.com/api/v1/tours?transportation=plane"
      )
      .then((data) => {
        setFlights(data.data.data);
        setFlightsCountries([
          ...new Set(data.data.data.map((tour) => tour.fromCountry)),
        ]);
        console.log(
          data.data.data,
          ...new Set(data.data.data.map((tour) => tour.fromCountry))
        );
      })
      .catch((err) => console.log(err));

    axios
      .get(
        "https://booking-flights-web-application.onrender.com/api/v1/tours?transportation=bus"
      )
      .then((data) => {
        setTours(data.data.data);
        setToursCountries([
          ...new Set(data.data.data.map((tour) => tour.fromCountry)),
        ]);
        setFromToursCity([
          ...new Set(data.data.data.map((tour) => tour.fromCity)),
        ]);

        setToToursCity([...new Set(data.data.data.map((tour) => tour.toCity))]);
      })
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="App">
      {loading ? (
        <div>
          <span className="loader"></span>
        </div>
      ) : (
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
                  flightsCountries={flightsCountries}
                  toursCountries={toursCountries}
                  fromToursCity={fromToursCity}
                  toToursCity={toToursCity}
                  loading={loading}
                  setLoading={setLoading}
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
          <Route
            path="/tours-list"
            element={
              <TourList
                tours={tours}
                toursCountries={toursCountries}
                fromToursCity={fromToursCity}
                toToursCity={toToursCity}
              />
            }
          />
          <Route
            path="/flights-list"
            element={<FlightsList flights={flights} />}
          />
        </Routes>
      )}
    </div>
  );
}

export default App;
