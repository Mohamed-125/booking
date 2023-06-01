import React, { useRef, useState, useEffect } from "react";
import emailIcon from "../assests/email.png";
import hideIcon from "../assests/hide.png";
import lockIcon from "../assests/padlock.png";
import { BsEye } from "react-icons/bs";
import { useNavigate, Link } from "react-router-dom";
import { login, logout, auth } from "../firebase-cofing";
import { signInWithEmailAndPassword } from "firebase/auth";

const Login = () => {
  const passwordInputRef = useRef();
  const [showPassWord, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const showOrHidePassword = () => {
    setShowPassword((pre) => !pre);
  };

  useEffect(() => {
    if (showPassWord) {
      passwordInputRef.current.type = "text";
    } else {
      passwordInputRef.current.type = "password";
    }
  }, [showPassWord]);

  const submitHandler = async (e) => {
    e.preventDefault();

    try {
      const user = await signInWithEmailAndPassword(auth, userEmail, password);
      navigate("/");
    } catch (err) {
      switch (err.message) {
        case "Firebase: Error (auth/wrong-password).":
          alert("wrong password");
          break;
        case "Firebase: Error (auth/user-not-found).":
          alert("There is not account with this email");
          break;
        case "Firebase: Error (auth/invalid-email).":
          alert("invalid email");
          break;
        default:
          break;
      }
      console.log(err.message);
    }
  };

  return (
    <div className="form-container">
      <button onClick={logout}>signOut</button>
      <div className="form-div container">
        <form onSubmit={submitHandler}>
          <h2>Login</h2>
          <div className="input-icons-div  ">
            <img src={emailIcon} alt="" />
            <input
              type="email"
              placeholder="heeeey"
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-icons-div  ">
            <img src={lockIcon} alt="" />
            <input
              type="password"
              placeholder="heeeey"
              required
              ref={passwordInputRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            {!showPassWord ? (
              <img
                src={hideIcon}
                style={{ cursor: "pointer" }}
                onClick={showOrHidePassword}
                alt=""
              />
            ) : (
              <BsEye
                style={{ cursor: "pointer" }}
                onClick={showOrHidePassword}
              />
            )}
          </div>
          <div></div>
          <button>Submit</button>
          <p>
            Don't have an account ?
            <span>
              <Link to={"/sign-up"}> Sign Up</Link>
            </span>
          </p>
          <p>
            Did you forget your password
            <span>
              <Link to={"/reset-password"}>Reset your password</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
