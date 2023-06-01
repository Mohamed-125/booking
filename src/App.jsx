import { useContext, useState } from "react";
import { Route, Routes } from "react-router";
import Login from "./pages/Login";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/About";
import Tour from "./components/Tour";
import Flight from "./components/Flight";
import Review from "./components/Review";
import Footer from "./components/Footer";
import Forgetpass from "./pages/Forgetpass";
import Signup from "./pages/Signup";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase-cofing.js";
import { userContext } from "./context/UserContext.jsx";
import ResetPassword from "./pages/ResetPassword";
function App() {
  const { setUser } = useContext(userContext);
  const [loading, setLoading] = useState(true);
  onAuthStateChanged(auth, (currentUser) => {
    setUser(currentUser);
    setLoading(false);
  });

  return (
    <div className="App">
      {loading && (
        <div>
          <span className="loader"></span>
        </div>
      )}
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Navbar />
              <Home />
              <About />
              <Tour />
              <Flight />
              <Review />
              <Footer />
            </>
          }
        />
        <Route path="/login" element={<Login />} />
        <Route path="/forgetpass" element={<Forgetpass />} />
        <Route path="/sign-up" element={<Signup />} />
        <Route path="/reset-password" element={<ResetPassword />} />
      </Routes>
    </div>
  );
}

export default App;
