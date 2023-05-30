import axios from "axios";
const axiosInestance = axios.create({
  // baseURL: "http://localhost:3000",
  baseURL: "https://booking-flights-web-application.onrender.com",
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export default axiosInestance;
