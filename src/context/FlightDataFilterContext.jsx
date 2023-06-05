import React, { useState, useEffect, createContext } from "react";
export const flightDataFilterContext = createContext({});
const FlightDataFilterContext = ({ children }) => {
  const [flightDataFilter, setFlightDataFilter] = useState({});

  useEffect(() => {
    console.log(flightDataFilter);
  }, [flightDataFilter]);

  return (
    <flightDataFilterContext.Provider
      value={{ flightDataFilter, setFlightDataFilter }}
    >
      {children}
    </flightDataFilterContext.Provider>
  );
};

export default FlightDataFilterContext;
