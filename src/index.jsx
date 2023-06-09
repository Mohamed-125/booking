import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import UserContext from "./context/UserContext";
import FlightDataFilterContext from "./context/FlightDataFilterContext.jsx";
import "bootstrap/dist/css/bootstrap.min.css";
import TourDataFilterContext from "./context/TourDataFilterContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <UserContext>
        <FlightDataFilterContext>
          <TourDataFilterContext>
            <App />
          </TourDataFilterContext>
        </FlightDataFilterContext>
      </UserContext>
    </BrowserRouter>
  </React.StrictMode>
);
