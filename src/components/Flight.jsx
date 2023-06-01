import React, { useState } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import { Grid, Radio, RadioGroup, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Grouped from "./Grouped";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import "./Flight.css";

const Flight = () => {
  const [flight, setflight] = useState(true);
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    setCounter((count) => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter((count) => count - 1);
    }
  };

  return (
    <div className="containerflight Container">
      <div className="flight" id="flight">
        <h3 className="special-heading text-dark">Flight with us</h3>
        <div className="content">
          <div className=" transpornat-options-div d-flex ">
            <div
              className={`transpornat col-2 ${flight ? "active" : ""}`}
              onClick={() => {
                setflight(true);
              }}
            >
              <FlightTakeoffOutlinedIcon />
              Tour with Flight
            </div>
            <div
              className={`transpornat ${flight ? "" : "active"}`}
              onClick={() => {
                setflight(false);
              }}
            >
              <AirportShuttleOutlinedIcon />
              Tour with Bus
            </div>
          </div>
          {flight ? (
            <div className="pb-5">
              <RadioGroup
                className="radiogroup flights-div"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="oneway"
                name="radio-buttons-group"
              >
                <FormControlLabel
                  value="return"
                  control={<Radio />}
                  label="Return Flight"
                />
                <FormControlLabel
                  value="oneway"
                  control={<Radio />}
                  label="One-way Flight"
                />
                <FormControlLabel
                  value="multicity"
                  control={<Radio />}
                  label="Multi-City Flight"
                />
              </RadioGroup>
              <Grid className="grid flights-grid text-center ">
                <Grouped className="d-flex" />
                <Grouped className="d-flex" />
                <Grouped className="d-flex" />
                <Grouped className="d-flex" />

                {/* start LocalizationProvider */}
                <LocalizationProvider
                  className="d-flex"
                  dateAdapter={AdapterDayjs}
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label=" Departing Date" />
                  </DemoContainer>
                </LocalizationProvider>
                {/* end LocalizationProvider */}
                {/* start LocalizationProvider */}
                <LocalizationProvider
                  className="d-flex"
                  dateAdapter={AdapterDayjs}
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Returning Date" />
                  </DemoContainer>
                </LocalizationProvider>
                {/* end LocalizationProvider */}
              </Grid>
              <NavLink
                to="/flightTour"
                className="btn d-block search-trip-btn mt-5 mx-auto bg"
              >
                Search for Flight
              </NavLink>
            </div>
          ) : (
            <div className=" pb-5 rounded-end rounded-bottom">
              <div className="chexs">
                <RadioGroup
                  className="radiogroup flights-div"
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="oneway"
                  name="radio-buttons-group"
                >
                  <FormControlLabel
                    value="return"
                    control={<Radio />}
                    label="Return Trip"
                  />
                  <FormControlLabel
                    value="oneway"
                    control={<Radio />}
                    label="One-way Trip"
                  />
                </RadioGroup>
              </div>
              <Grid className="grid flights-grid text-center ">
                <Grouped className="d-flex" />
                <Grouped className="d-flex" />

                {/* start LocalizationProvider */}
                <LocalizationProvider
                  className="d-flex"
                  dateAdapter={AdapterDayjs}
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label=" Departing Date" />
                  </DemoContainer>
                </LocalizationProvider>
                {/* end LocalizationProvider */}
                {/* start LocalizationProvider */}
                <LocalizationProvider
                  className="d-flex"
                  dateAdapter={AdapterDayjs}
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker label="Returning Date" />
                  </DemoContainer>
                </LocalizationProvider>
                <div
                  style={{
                    alignSelf: "center",
                    width: "fit-content",
                  }}
                >
                  <div className="ticket-counter">
                    <button className="control__btn" onClick={increase}>
                      +
                    </button>
                    <span className="counter__output">{counter}</span>
                    <button className="control__btn" onClick={decrease}>
                      -
                    </button>
                  </div>
                </div>
                {/* end LocalizationProvider */}
              </Grid>

              <NavLink
                to="/bustTour"
                className="btn d-block mt-5 mx-auto bg search-trip-btn text-light"
              >
                Search for Trip
              </NavLink>
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Flight;
