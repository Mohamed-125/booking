import React, { useRef, useState } from "react";
import emailIcon from "../assests/email.png";
import { auth } from "../firebase-cofing";
import { sendPasswordResetEmail } from "firebase/auth";
import { useNavigate } from "react-router";

const ResetPassword = () => {
  const [resetEmail, setResetEmail] = useState("");
  const navigate = useNavigate();
  const submitHandler = (e) => {
    e.preventDefault();
    sendPasswordResetEmail(auth, resetEmail)
      .then(() => {
        navigate("/login");
      })
      .catch((err) => {
        switch (err.message) {
          case "Firebase: Error (auth/invalid-email).":
            alert("invalid email");
            break;
          case "Firebase: Error (auth/user-not-found).":
            alert("there is not such account with this email.");
            break;

          default:
            break;
        }
        console.log(err.message);
      });
  };

  return (
    <div className="form-container">
      <div className="form-div container">
        <form onSubmit={submitHandler}>
          <h2>Send Email to your account to reset your password</h2>
          <div className="input-icons-div  ">
            <img src={emailIcon} />
            <input
              type="email"
              placeholder="Enter your email"
              required
              onChange={(e) => setResetEmail(e.target.value)}
            />
          </div>
          <button>Send email and reset password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;
