import React, { useState, useEffect, createContext } from "react";
export const tourDataFilterContext = createContext({});
const TourDataFilterContext = ({ children }) => {
  const [tourDataFilter, setTourDataFilter] = useState({
    fromCountry: "United Kingdom",
    toCountry: "Egypt",
    flightType: "oneway",
  });

  return (
    <tourDataFilterContext.Provider
      value={{ tourDataFilter, setTourDataFilter }}
    >
      {children}
    </tourDataFilterContext.Provider>
  );
};

export default TourDataFilterContext;
