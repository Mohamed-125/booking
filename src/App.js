import { Route, Routes } from "react-router";
import "./App.css";

import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tour from "./components/Tour";
import Flight from "./components/Flight";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Forgetpass from "./pages/Forgetpass";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path='/' element={
          <>
            <Navbar />
            <Home />
            <About />
            <Tour />
            <Flight />
            <Review />
            <Footer />
          </>
        } />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpass" element={<Forgetpass/>}/>
        
      </Routes>
    </div>
  );
}

export default App;
