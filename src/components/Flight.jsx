import React, { useState, useContext } from "react";
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
import { userContext } from "../context/UserContext";
import { useNavigate } from "react-router-dom";
import TextField from '@mui/material/TextField';
import PlaceIcon from '@mui/icons-material/Place';
import Box from '@mui/material/Box';
import MultipleSelect from "./MultipleSelect";
import ControlledOpenSelect from "./OneSelect";
import AddIcon from '@mui/icons-material/Add';

const Flight = () => {
  const [flight, setflight] = useState(true);
  const [counter, setCounter] = useState(1);
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

  return (
    <div className="Container containerflight ">
      <div className="flight" id="flight">
        <h3 className="special-heading text-light">Flight with us</h3>
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
            <div className="pb-5 sec-destion">
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
              </RadioGroup>
              
              <Grid className="grid flights-grid text-center ">
                <Box>
                <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Coming From" variant="standard" />
                </Box>
                <Box>
                <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Coming To" variant="standard" />
                </Box>
                <ControlledOpenSelect/>
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
              <button
                onClick={() => {
                  if (!user) {
                    alert("you must login in to search for flights");
                  } else {
                    navigate("/flightTour");
                  }
                }}
                className="btn d-block mt-5 mx-auto bg search-trip-btn  "
              >
                Search for Flight
              </button>
            </div>
          ) : (
            <div className=" pb-5 rounded-end rounded-bottom sec-destion">
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
                <Box>
                <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Coming From" variant="standard" />
                </Box>
                <Box>
                <PlaceIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
                <TextField id="input-with-sx" label="Coming To" variant="standard" />
                </Box>
                <div
                  style={{
                    alignSelf: "center",
                    width: "fit-content",
                  }}
                >
                  <div className="ticket-counter">
                    <button className="control__btn" onClick={increase}>
                      <AddIcon/>
                    </button>
                    <span className="counter__output">{counter}</span>
                    <button className="control__btn" onClick={decrease}>
                      -
                    </button>
                  </div>
                </div>
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
                    alert("you must login in to search for trips");
                  } else {
                    navigate("/bustTour");
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
