import React, { useState } from "react";
import FormControlLabel from '@mui/material/FormControlLabel';
import { Grid, Radio, RadioGroup, Stack } from "@mui/material";
import { NavLink } from "react-router-dom";
import Grouped from "./Grouped";
import { DemoContainer } from '@mui/x-date-pickers/internals/demo';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers/LocalizationProvider';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import FlightTakeoffOutlinedIcon from '@mui/icons-material/FlightTakeoffOutlined';
import AirportShuttleOutlinedIcon from '@mui/icons-material/AirportShuttleOutlined';
import "./Flight.css"


const Flight = () => {
  const [flight, setflight] = useState(true);
  const [counter, setCounter] = useState(1);

  //increase counter
  const increase = () => {
    setCounter(count => count + 1);
  };

  //decrease counter
  const decrease = () => {
    if (counter > 1) {
      setCounter(count => count - 1);
    }
  };


  return (
    <div className='containerflight'>
      <div className='flight' id='flight'>
        <div className='container'>
          <h3 className='special-heading text-dark'>
            Flight with us
          </h3>
          <div className='content'>
            <div className='container d-flex '>
              <div
                className={`transpornat col-2 rounded-top ${flight ? "active" : ""
                  }`}
                onClick={() => {
                  setflight(true);
                }}
              >
                <FlightTakeoffOutlinedIcon />
                Tour with Flight
              </div>
              <div
                className={`transpornat rounded-top ${flight ? "" : "active"
                  }`}
                onClick={() => {
                  setflight(false);
                }}
              >
                <AirportShuttleOutlinedIcon />
                Tour with Bus
              </div>
            </div>
            {flight ? (
              <div className='container pb-5 bg-light '>
                <RadioGroup
                  className="radiogroup"
                  aria-labelledby="demo-radio-buttons-group-label"
                  defaultValue="oneway"
                  name="radio-buttons-group"
                >
                  <FormControlLabel value="return" control={<Radio />} label="Return Flight" />
                  <FormControlLabel value="oneway" control={<Radio />} label="One-way Flight" />
                </RadioGroup>
                <Grid className='grid text-center '>
                  <Grouped className="d-flex" />
                  <Grouped className="d-flex" />
                  <Grouped className="d-flex" />
                  <Grouped className="d-flex" />

                  {/* start LocalizationProvider */}
                  <LocalizationProvider className="d-flex" dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label=" Departing Date" />
                    </DemoContainer>
                  </LocalizationProvider>
                  {/* end LocalizationProvider */}
                  {/* start LocalizationProvider */}
                  <LocalizationProvider className="d-flex" dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="Returning Date" />
                    </DemoContainer>
                  </LocalizationProvider>
                  {/* end LocalizationProvider */}
                </Grid>
                <NavLink
                  to='/flightTour'
                  className='btn d-block mt-5 mx-auto bg  text-dark'
                >
                  Search for Flight
                </NavLink>
              </div>
            ) : (
              <div className='container pb-5 bg-light rounded-end rounded-bottom'>
                <div className='chexs'>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio1'
                      value='option1'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='inlineRadio1'
                    >
                      Return Flight
                    </label>
                  </div>
                  <div className='form-check form-check-inline'>
                    <input
                      className='form-check-input'
                      type='radio'
                      name='inlineRadioOptions'
                      id='inlineRadio2'
                      value='option2'
                    />
                    <label
                      className='form-check-label'
                      htmlFor='inlineRadio2'
                    >
                      One-way Flight
                    </label>
                  </div>
                </div>
                <div className=' row justify-content-around align-items-center'>
                  <Grouped />
                  <Grouped />

                  <div className=' col-lg-3 col-md-3 col-sm-5 col-5 p-lg-3 p-md-2 p-sm-0 p-0 justify-content-between mor'>
                    <button className="control__btn" onClick={increase}>+</button>
                    <span className="counter__output">{counter}</span>
                    <button className="control__btn" onClick={decrease}>-</button>

                  </div>

                  {/* start LocalizationProvider */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label=" Departing Date" />
                    </DemoContainer>
                  </LocalizationProvider>
                  {/* end LocalizationProvider */}
                  {/* start LocalizationProvider */}
                  <LocalizationProvider dateAdapter={AdapterDayjs}>
                    <DemoContainer components={['DatePicker']}>
                      <DatePicker label="Returning Date" />
                    </DemoContainer>
                  </LocalizationProvider>
                  {/* end LocalizationProvider */}

                </div>
                <NavLink
                  to='/bustTour'
                  className='btn d-block mt-5 mx-auto bg  text-light'
                >
                  Search for Trip
                </NavLink>
              </div>
            )}
          </div>
          <hr />
        </div>
      </div>
    </div>
  );
};

export default Flight;







