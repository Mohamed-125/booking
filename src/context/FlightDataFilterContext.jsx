import React, { useState, useEffect, createContext } from "react";
export const flightDataFilterContext = createContext({});
const FlightDataFilterContext = ({ children }) => {
  const [flightDataFilter, setFlightDataFilter] = useState({
    fromCountry: "United Kingdom",
    toCountry: "Egypt",
    flightType: "oneway",
  });

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
