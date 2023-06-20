import React, { useContext, useEffect, useState } from "react";
import "./TourList.css";
import bus from "../assests/bus.png";
import tv from "../assests/television.png";
import wifi from "../assests/wifi.png";
import airConditioning from "../assests/air-conditioner.png";
import { tourDataFilterContext } from "../context/TourDataFilterContext";
const TourList = ({ tours, toursCountries }) => {
  const [selectedClasses, setSelectedClasses] = useState({
    first: true,
    economy: true,
    business: true,
  });

  const { tourDataFilter } = useContext(tourDataFilterContext);
  const filteredTours = tours.filter((tour) => {
    if (
      tour.fromCity === tourDataFilter?.fromCity &&
      tour.toCity === tourDataFilter?.toCity
    ) {
      return tour;
    }
  });
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
                    return { ...pre, ["first"]: e.target.checked };
                  });
                }}
              />
              <span>First </span>
            </div>
            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setSelectedClasses((pre) => {
                    return { ...pre, ["economy"]: e.target.checked };
                  });
                }}
              />
              <span>Economy</span>
            </div>

            <div>
              <input
                type="checkbox"
                defaultChecked
                onChange={(e) => {
                  setSelectedClasses((pre) => {
                    return { ...pre, ["business"]: e.target.checked };
                  });
                }}
              />
              <span>Business</span>
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

            {filteredTours.length !== 0 ? (
              filteredTours.map((trip) => {
                if (selectedClasses[trip.class]) {
                  return (
                    <div className="tourlist-div">
                      <div>
                        <img src={bus} /> <br />
                        <div className="tourlist-features-div">
                          <img src={tv} />
                          <img src={wifi} />
                          <img src={airConditioning} />
                        </div>
                      </div>
                      <div>
                        {trip.fromCity} - {trip.toCity}
                      </div>
                      <div>{trip.duration}H</div>
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
              })
            ) : (
              <p>no results</p>
            )}
          </div>
          {/* <div className="tourlist-arrival-trips">
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
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default TourList;
