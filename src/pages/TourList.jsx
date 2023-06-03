import React, { useEffect, useState } from "react";
import "./TourList.css";
import bus from "../assests/bus.png";
import tv from "../assests/television.png";
import wifi from "../assests/wifi.png";
import airConditioning from "../assests/air-conditioner.png";

const departureTrips = [
  {
    tv: true,
    wifi: true,
    airConditioning: true,
    time: 10,
    class: "Deluxe Plus",
    price: 255,
    from: "20:00",
    to: "06:00",
  },
  {
    tv: true,
    wifi: false,
    airConditioning: true,
    time: 11,
    class: "Elite Plus",
    price: 155,
    from: "22:00",
    to: "09:00",
  },
];
const arrivalTrips = [
  {
    tv: true,
    wifi: true,
    airConditioning: true,
    time: 10,
    class: "Deluxe Plus",
    price: 255,
    from: "20:00",
    to: "06:00",
  },
  {
    tv: true,
    wifi: false,
    airConditioning: true,
    time: 11,
    class: "Elite Plus",
    price: 155,
    from: "22:00",
    to: "09:00",
  },
];

const TourList = () => {
  const [selectedClasses, setSelectedClasses] = useState({
    Classic: true,
    "Deluxe Plus": true,
    "Elite D.D": true,
    "Elite Plus": true,
    GoMini: true,
    "Super Go": true,
  });

  useEffect(() => {
    console.log(selectedClasses);
  }, [selectedClasses]);
  return (
    <div className="tourlist-container">
      <div className="tourlist-options-div Container">
        <div className="tourlist-options">
          <div>
            <h4>Bus Classes</h4>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setSelectedClasses((pre) => {
                    return { ...pre, ["Deluxe Plus"]: e.target.checked };
                  });
                }}
              />
              <span>Deluxe Plus</span>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setSelectedClasses((pre) => {
                    return { ...pre, ["Elite Plus"]: e.target.checked };
                  });
                }}
              />
              <span>Elite Plus</span>
            </div>

            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setSelectedClasses((pre) => {
                    return { ...pre, ["Super Go"]: e.target.checked };
                  });
                }}
              />
              <span>Super Go</span>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setSelectedClasses((pre) => {
                    return { ...pre, ["Elite D.D"]: e.target.checked };
                  });
                }}
              />
              <span>Elite D.D</span>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setSelectedClasses((pre) => {
                    return { ...pre, ["GoMini"]: e.target.checked };
                  });
                }}
              />
              <span>GoMini</span>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setSelectedClasses((pre) => {
                    return { ...pre, ["Classic"]: e.target.checked };
                  });
                }}
              />
              <span>Classic</span>
            </div>
          </div>
          <div>
            <h4>Departure / arrival times</h4>
            <div>
              <input type="checkbox" /> <span>Deluxe Plus</span>
            </div>
            <div>
              <input type="checkbox" /> <span>Deluxe Plus</span>
            </div>
          </div>
        </div>
        <div className="tourlist-trips">
          <div className="tourlist-departure-trips">
            <h4 style={{ marginBottom: "20px" }}>
              Please select your departure trip
            </h4>

            {departureTrips.map((trip) => {
              if (selectedClasses[trip.class]) {
                console.log(trip);
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
                    <div>{trip.class}</div>
                    <div>
                      <p>Price</p>
                      <p>{trip.price} L.E</p>
                    </div>
                    <div>
                      <p>View Details</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
          <div className="tourlist-arrival-trips">
            <h4 style={{ marginBottom: "20px" }}>
              Please select your arrival trip
            </h4>

            {arrivalTrips.map((trip) => {
              if (selectedClasses[trip.class]) {
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
                    <div>{trip.class}</div>
                    <div>
                      <p>Price</p>
                      <p>{trip.price} L.E</p>
                    </div>
                    <div>
                      <p>View Details</p>
                    </div>
                  </div>
                );
              }
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
