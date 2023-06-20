import React, { createContext } from 'react'
import { useEffect } from 'react';
import { useState } from 'react';
export const tourDataFilter = createContext({});
const TourDataFliter = ({ children }) => {
    const[tourDataFilter ,setTourDataFilter]=useState({
        fromCountry:"Egypt",
        fromCity :"Alexandria",
        toCity:"Dahab",
        typeTour:"return",
    })
    useEffect(()=>{
        localStorage.setItem("flightDataFilter",JSON.stringify(tourDataFilter))
        console.log(tourDataFilter)
    },[tourDataFilter])
  return (

    <tourDataFilter.provider 
    value={{tourDataFilter ,setTourDataFilter}}
    >
      {children}
    </tourDataFilter.provider>

  )
}

export default TourDataFliter