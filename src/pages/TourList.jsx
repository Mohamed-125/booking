import React, { useContext, useEffect, useState } from "react";
import "./TourList.css";
import bus from "../assests/bus.png";
import tv from "../assests/television.png";
import wifi from "../assests/wifi.png";
import airConditioning from "../assests/air-conditioner.png";
import { tourDataFilterContext } from "../context/TourDataFilterContext";
import { Link } from "react-router-dom";
const TourList = ({ tours }) => {
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
                  const takeOffDate = new Date(trip.takeOff);
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
                        <Link
                          to="/confirm-reservation"
                          state={{
                            baggage: trip.baggage,
                            fromCountry: trip.fromCountry,
                            toCountry: trip.toCountry,
                            duration: trip.duration,
                            takeOffDate,
                            price: trip.price,
                            fromSite: trip.fromSite,
                            toSite: trip.toSite,
                            bus: true,
                            tickets: tourDataFilter.ticketCounter,
                          }}
                        >
                          <p>View Details</p>
                        </Link>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <p>no results</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TourList;
