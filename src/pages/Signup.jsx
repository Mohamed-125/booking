import React, { useEffect, useState } from "react";
import emailIcon from "../assests/email.png";
import avatarIcon from "../assests/avatar.png";
import locationIcon from "../assests/location.png";
import lockIcon from "../assests/padlock.png";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { registerUser } from "../firebase-cofing";
const Signup = () => {
  const [username, setUsername] = useState("");
  const [userEmail, setUserEmail] = useState("");
  const [location, setLocation] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log(userEmail, password);
    registerUser(userEmail, password);
  };

  return (
    <div className="form-container">
      <div className="form-div container">
        <form onSubmit={submitHandler}>
          <h2>Sign up</h2>
          <div className="input-icons-div  ">
            <img src={avatarIcon} />
            <input
              type="text"
              required
              onChange={(e) => setUsername(e.target.value)}
              placeholder="heeeey"
            />
          </div>

          <div className="input-icons-div  ">
            <img src={emailIcon} />
            <input
              type="email"
              required
              onChange={(e) => setUserEmail(e.target.value)}
              placeholder="heeeey"
            />
          </div>
          <div className="input-icons-div  ">
            <img src={lockIcon} />
            <input
              type="password"
              required
              onChange={(e) => setPassword(e.target.value)}
              placeholder="heeeey"
            />
          </div>
          <div className="input-icons-div  ">
            <img src={locationIcon} />
            <input
              type="text"
              required
              onChange={(e) => setLocation(e.target.value)}
              placeholder="heeeey"
            />
          </div>
          <div className="form-checkbox-div ">
            <input type="checkbox" />
            <p>
              I agree with <span>Terms</span> and
              <span>Privacy</span>
            </p>
          </div>
          <button type="submit">Submit</button>
          <p>
            Do you have an account already ?
            <span>
              <Link to={"/login"}> Login</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Signup;
