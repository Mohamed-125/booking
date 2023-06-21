import React, { useContext, useEffect, useState } from "react";
import "./TourList.css";
import bus from "../assests/bus.png";
import tv from "../assests/television.png";
import wifi from "../assests/wifi.png";
import airConditioning from "../assests/air-conditioner.png";
import airport from "../assests/airport.png";

import { flightDataFilterContext } from "../context/FlightDataFilterContext";
import { Link } from "react-router-dom";
const FlightsList = ({ flights }) => {
  const [stopOption, setStopOption] = useState("");
  const [filteredFlightsList, setFilteredFlightsList] = useState([]);
  const { flightDataFilter } = useContext(flightDataFilterContext);
  const [baggage, setBaggage] = useState({ 23: true, 30: true });
  useEffect(() => {
    setFilteredFlightsList(
      flights.filter((tour) => {
        if (
          tour.fromCountry === flightDataFilter.fromCountry &&
          tour.toCountry === flightDataFilter.toCountry
        ) {
          return tour;
        }
      })
    );
  }, [flights]);

  return (
    <div className="tourlist-container">
      <div className="tourlist-options-div Container">
        <div className="tourlist-options">
          <div>
            <h4>Stop</h4>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setStopOption("non-stop");
                }}
              />
              <span>Show non-stop flights only</span>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setStopOption("non-stop");
                }}
              />
              <span>1 stop </span>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setStopOption("non-stop");
                }}
              />
              <span>2+ stops </span>
            </div>
          </div>
          <div>
            <h4>Departure / arrival times</h4>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setBaggage((pre) => {
                    return { ...pre, 23: e.target.checked };
                  });
                }}
              />
              <span>Check-in baggage of 23 kg</span>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setBaggage((pre) => {
                    return { ...pre, 30: e.target.checked };
                  });
                }}
              />
              <span>Check-in baggage of 30 kg</span>
            </div>
          </div>
        </div>
        <div className="tourlist-trips">
          <div className="tourlist-departure-trips">
            <h4 style={{ marginBottom: "20px" }}>
              Please select your departure trip
            </h4>
            {filteredFlightsList.length === 0 ? (
              <p>no flights</p>
            ) : (
              filteredFlightsList.map((trip) => {
                const takeOffDate = new Date(trip.takeOff);
                const endDate = new Date(trip.endDate);
                if (baggage[trip.baggage]) {
                  return (
                    <div className="tourlist-div">
                      <div>
                        <img src={airport} />
                      </div>
                      <div>
                        {trip.fromCountry} - {trip.toCountry}
                      </div>
                      <div style={{ maxWidth: "80px" }}>{trip.duration}H</div>
                      <div>
                        <p>Take Off </p>
                        {takeOffDate.toLocaleDateString([], {
                          hour: "2-digit",
                          minute: "2-digit",
                        })}
                      </div>
                      <div style={{ maxWidth: "90px" }}>
                        <p>Price</p>
                        <p>{trip.price} L.E</p>
                      </div>
                      <div style={{ maxWidth: "90px" }}>
                        <p>baggage</p>
                        <p>{trip.baggage}KG</p>
                      </div>
                      <div>
                        <Link
                          to="/confirm-reservation"
                          state={{
                            baggage: trip.baggage,
                            fromCountry: trip.fromCountry,
                            toCountry: trip.toCountry,
                            duration: trip.duration,
                            takeOffDate,
                            fromSite: trip.fromSite,
                            price: trip.price,
                            toSite: trip.toSite,
                            endDate,
                          }}
                        >
                          <p>View Details</p>
                        </Link>
                      </div>
                    </div>
                  );
                }
              })
            )}
            {}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsList;
