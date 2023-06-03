import React, { useState, useContext } from "react";
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

const Flight = () => {
  const [flight, setflight] = useState(true);
  const [counter, setCounter] = useState(1);
  const [levelValue, setLevelValue] = useState("");
  const [activeCard, setActiveCard] = useState(1);

  const { user } = useContext(userContext);
  const navigate = useNavigate();

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
    setLevelValue(e.target.value);
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
            <div className="py-3">
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
              <button
                onClick={() => {
                  if (!user) {
                    alert("you must login in to search for flights");
                  } else {
                    navigate("/flights-list");
                  }
                }}
                className="btn d-block mt-5 mx-auto bg search-trip-btn  "
              >
                Search for Flight
              </button>
            </div>
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
