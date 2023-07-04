import React, { useState } from "react";
import "./ReservationConfirm.css";
import { useLocation } from "react-router";
import busImg from "../assests/bus.png";
import qr from "../assests/qr-code.png";
import { Link } from "react-router-dom";

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
    bus,
    endDate,
    tickets,
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
            <h3> One-way {bus ? "Trip" : "Flight"} </h3>
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
                      <h5>{takeOffDate?.toLocaleDateString([])}</h5>
                    </div>
                    <div>
                      <p>Return</p>
                      <h5>{endDate?.toLocaleDateString([])}</h5>
                    </div>
                  </div>
                  <div>
                    {bus ? (
                      <p
                        style={{
                          width: "100%",
                          height: "100%",
                          backgroundColor: "white",
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        Tickets : {tickets}
                      </p>
                    ) : (
                      <>
                        <div>
                          <p>Adults</p>
                          <div>
                            <div>
                              <button
                                className="counter-confirm"
                                onClick={increase}
                              >
                                +
                              </button>
                              <div className="counter-value">{counter}</div>
                              <button
                                className="counter-confirm"
                                onClick={decrease}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p>Kids</p>
                          <div>
                            <div>
                              <button
                                className="counter-confirm"
                                onClick={increase2}
                              >
                                +
                              </button>
                              <div className="counter-value">{counter2}</div>
                              <button
                                className="counter-confirm"
                                onClick={decrease2}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                        <div>
                          <p>Infants</p>
                          <div>
                            <div>
                              <button
                                className="counter-confirm"
                                onClick={increase3}
                              >
                                +
                              </button>
                              <div className="counter-value">{counter3}</div>
                              <button
                                className="counter-confirm"
                                onClick={decrease3}
                              >
                                -
                              </button>
                            </div>
                          </div>
                        </div>
                      </>
                    )}
                  </div>
                </div>
                <div className="reservaton-ticket-confirm-row">
                  <div>
                    <div style={{ alignItems: "center" }}>
                      <img src={busImg} />
                    </div>
                    <div>XX..........</div>
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
                       <Link
                       to="/payment"
                       >
                        Pay Now
                       </Link>
                        
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
                      <div>
                        <div>
                          <button
                            className="counter-confirm"
                            onClick={increase}
                          >
                            +
                          </button>
                          <div className="counter-value">{counter}</div>
                          <button
                            className="counter-confirm"
                            onClick={decrease}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Kids</p>
                      <div>
                        <div>
                          <button
                            className="counter-confirm"
                            onClick={increase2}
                          >
                            +
                          </button>
                          <div className="counter-value">{counter2}</div>
                          <button
                            className="counter-confirm"
                            onClick={decrease2}
                          >
                            -
                          </button>
                        </div>
                      </div>
                    </div>
                    <div>
                      <p>Infants</p>
                      <div>
                        <div>
                          <button
                            className="counter-confirm"
                            onClick={increase3}
                          >
                            +
                          </button>
                          <div className="counter-value">{counter3}</div>
                          <button
                            className="counter-confirm"
                            onClick={decrease3}
                          >
                            -
                          </button>
                        </div>
                      </div>
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
