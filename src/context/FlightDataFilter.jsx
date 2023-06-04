import React, { useState, useEffect, createContext } from "react";
export const flightDataFilter = createContext({});
const FlightDataFilter = ({ children }) => {
  const [flightDataFilter, setFlightDataFilter] = useState({});

  return (
    <flightDataFilter.Provider
      value={{ flightDataFilter, setFlightDataFilter }}
    >
      {children}
    </flightDataFilter.Provider>
  );
};

export default FlightDataFilter;
