import React, { useContext, useEffect, useState } from "react";
import "./TourList.css";
import bus from "../assests/bus.png";
import tv from "../assests/television.png";
import wifi from "../assests/wifi.png";
import airConditioning from "../assests/air-conditioner.png";
import { flightDataFilterContext } from "../context/FlightDataFilterContext";
const FlightsList = ({ tours, setTours, countries, setCountries }) => {
  const departureTrips = [
    {
      tv: true,
      wifi: true,
      airConditioning: true,
      time: 10,
      stops: "1 stop",
      price: 255,
      from: "20:00",
      to: "06:00",
    },
    {
      tv: true,
      wifi: true,
      airConditioning: true,
      time: 10,
      stops: "1 stop",
      price: 255,
      from: "20:00",
      to: "06:00",
    },
  ];
  const arrivalTrips = [
    {
      tv: true,
      wifi: true,
      airConditioning: true,
      time: 10,
      stops: "1 stop",
      price: 255,
      from: "20:00",
      to: "06:00",
    },
    {
      tv: true,
      wifi: true,
      airConditioning: true,
      time: 10,
      stops: "1 stop",
      price: 255,
      from: "20:00",
      to: "06:00",
    },
  ];
  const [stopOption, setStopOption] = useState("");
  const [filteredFlightsList, setFilteredFlightsList] = useState([]);
  const { flightDataFilter } = useContext(flightDataFilterContext);

  useEffect(() => {
    // setFilteredFlightsList(tours.filter(tour => {
    //   if(tour.fromCountry === flightDataFilter.fromCountry && ) {
    //     return tour
    //   }
    // }))

    console.log(
      tours.filter((tour) => {
        if (
          tour.fromCountry === flightDataFilter.fromCountry &&
          tour.toCountry === flightDataFilter.toCountry &&
          tour.type === flightDataFilter.flightType
        ) {
          return tour;
        }
      })
    );
  }, []);
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
              <input type="checkbox" /> <span>Check-in baggage of 23 kg</span>
            </div>
            <div>
              <input type="checkbox" /> <span>Check-in baggage of 30 kg</span>
            </div>
          </div>
        </div>
        <div className="tourlist-trips">
          <div className="tourlist-departure-trips">
            <h4 style={{ marginBottom: "20px" }}>
              Please select your departure trip
            </h4>

            {departureTrips.map((trip) => {
              return (
                <div className="tourlist-div">
                  <div>
                    <img src={bus} /> <br />
                    <div className="tourlist-features-div">
                      {trip.tv && <img src={tv} />}
                      {trip.wifi && <img src={wifi} />}
                      {trip.airConditioning && <img src={airConditioning} />}
                    </div>
                  </div>
                  <div>
                    {trip.from} - {trip.to}{" "}
                  </div>
                  <div>{trip.time}H</div>
                  <div>{trip.stops}</div>
                  <div>
                    <p>Price</p>
                    <p>{trip.price} L.E</p>
                  </div>
                  <div>
                    <p>View Details</p>
                  </div>
                </div>
              );
            })}
          </div>
          <div className="tourlist-arrival-trips">
            <h4 style={{ marginBottom: "20px" }}>
              Please select your arrival trip
            </h4>

            {/* {arrivalTrips.map((trip) => {
              return (
                <div className="tourlist-div">
                  <div>
                    <img src={bus} /> <br />
                    <div className="tourlist-features-div">
                      {trip.tv && <img src={tv} />}
                      {trip.wifi && <img src={wifi} />}
                      {trip.airConditioning && <img src={airConditioning} />}
                    </div>
                  </div>
                  <div>
                    {trip.from} - {trip.to}{" "}
                  </div>
                  <div>{trip.time}H</div>
                  <div>{trip.stops}</div>
                  <div>
                    <p>Price</p>
                    <p>{trip.price} L.E</p>
                  </div>
                  <div>
                    <p>View Details</p>
                  </div>
                </div>
              );
            })} */}
          </div>
        </div>
      </div>
    </div>
  );
};

export default FlightsList;
