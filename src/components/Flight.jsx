import React, { useState, useContext, useEffect, useRef } from "react";
import FormControlLabel from "@mui/material/FormControlLabel";
import {
  Grid,
  InputLabel,
  Radio,
  RadioGroup,
  Select,
  MenuItem,
  FormControl,
} from "@mui/material";
import Grouped from "./Grouped";
import { DemoContainer } from "@mui/x-date-pickers/internals/demo";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import FlightTakeoffOutlinedIcon from "@mui/icons-material/FlightTakeoffOutlined";
import AirportShuttleOutlinedIcon from "@mui/icons-material/AirportShuttleOutlined";
import "./Flight.css";
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import { flightDataFilterContext } from "../context/FlightDataFilterContext";
import axios from "axios";

const Flight = ({ flightsCountries }) => {
  const [flight, setflight] = useState(true);
  const [counter, setCounter] = useState(1);
  const [activeCard, setActiveCard] = useState(1);
  const [flightClass, setFlightClass] = useState("");
  const [flightType, setFlightType] = useState("oneway");
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const { setFlightDataFilter } = useContext(flightDataFilterContext);
  const fromCountryRef = useRef();
  const toCountryRef = useRef();
  const departingDateRef = useRef();
  const returningDateRef = useRef();
  const flightTypeRef = useRef();

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

  // select value change handler
  const handleChange = (e) => {
    setFlightClass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFlightDataFilter({
      fromCountry:
        fromCountryRef.current.children[0].children[1].children[0].value,
      toCountry: toCountryRef.current.children[0].children[1].children[0].value,
      departingDate: departingDateRef.current.children[1].children[0].value,
      returningDate: returningDateRef.current?.children[1].children[0].value,
      flightType: document.querySelector('[name="flight-types"]:checked').value,
      flightClass: flightClass,
      transportation: "plane",
    });

    if (!user) {
      alert("you must login in to search for flights");
    } else {
      navigate("/flights-list");
    }
  };

  return (
    <div className="containerflight ">
      <div className="flight Container" id="flight">
        <h3 className="special-heading text-dark">Flight with us</h3>
        <div className="choose-tour-or-flight">
          <div
            onClick={() => {
              setActiveCard(1);
              setflight(true);
            }}
            style={
              activeCard === 2
                ? { backgroundColor: "#F2F2F2" }
                : { backgroundColor: "white" }
            }
          >
            <h3> Tour with Flight</h3>
          </div>
          <div
            onClick={() => {
              setActiveCard(2);
              setflight(false);
            }}
            style={
              activeCard === 1
                ? { backgroundColor: "#F2F2F2" }
                : { backgroundColor: "white" }
            }
          >
            <h3> Tour with Bus</h3>
          </div>
        </div>
        <div className="content">
          {flight ? (
            <form onSubmit={submitHandler} className="py-3">
              <RadioGroup
                className="radiogroup flights-div"
                aria-labelledby="demo-radio-buttons-group-label"
                defaultValue="oneway"
                name="flight-types"
                ref={flightTypeRef}
                onChange={() => {
                  setFlightType(
                    document.querySelector('[name="flight-types"]:checked')
                      .value
                  );
                }}
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
                <Grouped
                  className="d-flex"
                  inputRef={fromCountryRef}
                  data={flightsCountries}
                  label="From City"
                />
                <Grouped
                  className="d-flex"
                  inputRef={toCountryRef}
                  data={flightsCountries}
                  label="To City"
                />
                {/* <Grouped className="d-flex" /> */}
                <FormControl fullWidth>
                  <InputLabel id="demo-simple-select-label">Class</InputLabel>
                  <Select
                    labelId="demo-simple-select-label"
                    id="demo-simple-select"
                    label="Class"
                    onChange={handleChange}
                  >
                    <MenuItem value={"first class"}>First Class</MenuItem>
                    <MenuItem value={"Premium Economy"}>
                      Premium Economy
                    </MenuItem>
                    <MenuItem value={"Business"}>Business </MenuItem>
                    <MenuItem value={"Economy"}>Economy </MenuItem>
                  </Select>
                </FormControl>
                {/* start LocalizationProvider */}
                <LocalizationProvider
                  className="d-flex"
                  dateAdapter={AdapterDayjs}
                >
                  <DemoContainer components={["DatePicker"]}>
                    <DatePicker
                      label="Departing Date"
                      slotProps={{
                        textField: {
                          required: true,
                        },
                      }}
                      ref={departingDateRef}
                    />
                  </DemoContainer>
                </LocalizationProvider>
                {/* end LocalizationProvider */}
                {/* start LocalizationProvider */}
                {flightType !== "oneway" && (
                  <LocalizationProvider
                    className="d-flex"
                    dateAdapter={AdapterDayjs}
                  >
                    <DemoContainer components={["DatePicker"]}>
                      <DatePicker
                        label="Returning Date"
                        slotProps={{
                          textField: {
                            required: true,
                          },
                        }}
                        ref={returningDateRef}
                      />
                    </DemoContainer>
                  </LocalizationProvider>
                )}
                {/* end LocalizationProvider */}
              </Grid>
              <button className="btn d-block mt-5 mx-auto bg search-trip-btn  ">
                Search for Flight
              </button>
            </form>
          ) : (
            <div className="py-3 rounded-end rounded-bottom">
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
                <div>
                  <div className="ticket-counter">
                    <button className="control__btn" onClick={increase}>
                      +
                    </button>
                    <div className="counter__output">{counter}</div>
                    <button className="control__btn" onClick={decrease}>
                      -
                    </button>
                  </div>
                </div>
                {/* end LocalizationProvider */}
              </Grid>

              <button
                onClick={() => {
                  if (!user) {
                    alert("you must login in to search for trips");
                  } else {
                    navigate("/tour-list");
                  }
                }}
                className="btn d-block mt-5 mx-auto bg search-trip-btn  "
              >
                Search for Trip
              </button>
            </div>
          )}
        </div>
        <hr />
      </div>
    </div>
  );
};

export default Flight;
