import React, { useState } from "react";
import "./ReservationConfirm.css";
import { useLocation } from "react-router";
import airport from "../assests/airport.png";
import qr from "../assests/qr-code.png";

const ReservationConfirm = () => {
  const [activeCard, setActiveCard] = useState(1);
  const location = useLocation();
  const {
    fromCountry,
    toCountry,
    fromSite,
    toSite,
    takeOffDate,
    baggage,
    price,
  } = location.state;
   const [counter, setCounter] = useState(1);
  const [counter2, setCounter2] = useState(0);
  const [counter3, setCounter3] = useState(0);

 const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };
  const increase2 = () => {
    setCounter2((count) => count + 1);
  };

  //decrease counter
  const decrease2 = () => {
    if (counter2 > 0) {
      setCounter2((count) => count - 1);
    }
  };
  const increase3 = () => {
    setCounter3((count) => count + 1);
  };

  //decrease counter
  const decrease3 = () => {
    if (counter3 > 0) {
      setCounter3((count) => count - 1);
    }
  };

  return (
    <div className="reservation-confirm-container">
      <div className="Container">
        <div className="reservation-confirm-options">
          <div
            onClick={() => {
              setActiveCard(1);
            }}
            style={
              activeCard === 2
                ? { backgroundColor: "#F2F2F2" }
                : { backgroundColor: "white" }
            }
          >
            <h3>Return Flight</h3>
          </div>
          <div
            onClick={() => {
              setActiveCard(2);
            }}
            style={
              activeCard === 1
                ? { backgroundColor: "#F2F2F2" }
                : { backgroundColor: "white" }
            }
          >
            <h3> One-way Flight</h3>
          </div>
        </div>
        <div className="reservation-confirm-tickets-div">
          {activeCard === 1 ? (
            <>
              <div className="reservation-confirm-div">
                <div className="reservaton-ticket-confirm-row">
                  <div>
                    <div>
                      <p>From</p>
                      <h5>{fromCountry}</h5>
                      <p>{fromSite}</p>
                    </div>
                    <div>
                      <p>From</p>
                      <h5>{toCountry}</h5>
                      <p>{toSite}</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>Depart</p>
                      <h5>{takeOffDate.toLocaleDateString([])}</h5>
                      <p>Friday</p>
                    </div>
                    <div>
                      <p>Depart</p>
                      <h5>13 Dec 2022</h5>
                      <p>Friday</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>Adults</p>
                      <p>2</p>
                    </div>
                    <div>
                      <p>Adults</p>
                      <p>2</p>
                    </div>
                    <div>
                      <p>Adults</p>
                      <p>2</p>
                    </div>
                  </div>
                </div>
                <div className="reservaton-ticket-confirm-row">
                  <div>
                    <div style={{ alignItems: "center" }}>
                      <img src={airport} />
                    </div>
                    <div>fdsfsd</div>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <div>
                      <h6>Baggage</h6>
                      <p>{baggage}</p>
                    </div>
                    <div>
                      <h6>Extra baggage</h6>
                      <p>30 Km</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <h6>Total price</h6>
                      <p>{price}</p>
                    </div>
                    <div>
                      <h6 style={{ color: "orangered", fontWeight: "600" }}>
                        Pay Now
                      </h6>
                    </div>
                    <div style={{ alignItems: "center" }}>
                      <img src={qr} />
                    </div>
                  </div>
                </div>
              </div>
            </>
          ) : (
            <>
              <div className="reservation-confirm-div">
                <div className="reservaton-ticket-confirm-row">
                  <div>
                    <div>
                      <p>From</p>
                      <h5>Cairo</h5>
                      <p>Cairo International Airport, Egypt</p>
                    </div>
                    <div>
                      <p>From</p>
                      <h5>Cairo</h5>
                      <p>Cairo International Airport, Egypt</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>Depart</p>
                      <h5>13 Dec 2022</h5>
                      <p>Friday</p>
                    </div>
                    <div>
                      <p>Depart</p>
                      <h5>13 Dec 2022</h5>
                      <p>Friday</p>
                    </div>
                  </div>
                  <div>
                    <div>
                      <p>Adults</p>
                      <p>2</p>
                    </div>
                    <div>
                      <p>Adults</p>
                      <p>2</p>
                    </div>
                    <div>
                      <p>Adults</p>
                      <p>2</p>
                    </div>
                  </div>
                </div>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default ReservationConfirm;
