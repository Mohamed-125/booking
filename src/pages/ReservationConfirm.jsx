import React, { useState } from "react";
import "./ReservationConfirm.css";
const ReservationConfirm = () => {
  const [activeCard, setActiveCard] = useState(1);
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
