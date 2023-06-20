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
<<<<<<< Updated upstream
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
=======
import { flightDataFilterContext } from "../context/FlightDataFilterContext";
import {tourDataFliter} from "../context/TourDataFliter";
const Flight = ({
  flightsCountries,
  toursCountries,
  fromToursCity,
  toToursCity,
}) => {
  const [flight, setflight] = useState(true);
  const [counter, setCounter] = useState(1);
  const [activeCard, setActiveCard] = useState(1);
  const [flightClass, setFlightClass] = useState("");
  const [flightType, setFlightType] = useState("oneway");
  const [tourType, settourType] = useState("oneway");
  const { user } = useContext(userContext);
  const navigate = useNavigate();
  const { setFlightDataFilter } = useContext(flightDataFilterContext);
  const { settourDataFliter } = useContext(tourDataFliter);
  const fromCountryRef = useRef();
  const toCountryRef = useRef();
  const fromCityRef =useRef()
  const toCityRef =useRef()
  const takeOffRef =useRef()
  const endDateRef =useRef()
  const classRef =useRef()
  const departingDateRef = useRef();
  const returningDateRef = useRef();
  const flightTypeRef = useRef();
  const tourTypeRef =useRef()

>>>>>>> Stashed changes

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

<<<<<<< Updated upstream
=======
  // select value change handler
  const handleChange = (e) => {
    setFlightClass(e.target.value);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    setFlightDataFilter({
      fromCountry:fromCountryRef.current.children[0].children[1].children[0].value,
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

  const handleChangebus=(e)=>{
    e.preventDefault();
    settourDataFliter({
      fromCountry: fromCountryRef.current.children[0].children[1].children[0].value,
      toCountry: toCountryRef.current.children[0].children[1].children[0].value,
      fromCity: fromCityRef.current.children[0].children[1].children[0].value,
      toCity: toCityRef.current.children[0].children[1].children[0].value,
      takeOff: takeOffRef.current.children[0].children[1].children[0].value,
      endDate: endDateRef.current.children[0].children[1].children[0].value,
      class : classRef.current.children[0].children[1].children[0].value,
      baggage:"30",
      typeTour :"return",
      totalTickets:"90",
      priceDiscount:"0",
      transportation: "bus",
    })
    if (!user) {
      alert("you must login in to search for flights");
    } else {
      navigate("/tour-list");
    }
  }

>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
=======
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
            <form onSubmit={handleChangebus} className="py-3">
            <div className="py-3 rounded-end rounded-bottom">
              <div className="chexs">
                <RadioGroup
                  className="radiogroup flights-div"
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="oneway"
                  name="radio-buttons-group"
                  ref={tourTypeRef}
                  onChange={()=>{
                    settourType(
                      document.querySelector('[name="tour-type"]:checked')
                      .value,
                    )

                  }}
                >
                  <FormControlLabel
                    value="return"
                    control={<Radio />}
                    label="Country"
                  />
                  <FormControlLabel
                    value="oneway"
                    control={<Radio />}
                    label="One-way Trip"
                  />
                </RadioGroup>
              </div>
              <Grid className="grid flights-grid text-center ">
                <Grouped
                  className="d-flex"
                  // inputRef={fromCountryRef}
                  data={toursCountries}
                  label="Country"
                />
                <Grouped
                  className="d-flex"
                  inputRef={toCityRef}
                  data={toToursCity}
                  label="To City"
                />
                <Grouped
                  className="d-flex"
                  inputRef={fromCityRef}
                  data={fromToursCity}
                  label="From City"
                />
>>>>>>> Stashed changes

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
<<<<<<< Updated upstream
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
=======
                <div>
>>>>>>> Stashed changes
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
<<<<<<< Updated upstream
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
                
=======
>>>>>>> Stashed changes
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
            </form>
          )}
        </div>
        <hr />
      </div>

    </div>
  );
};

export default Flight;
