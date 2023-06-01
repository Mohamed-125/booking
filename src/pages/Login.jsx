import React, { useRef, useState } from "react";
import emailIcon from "../assests/email.png";
import hideIcon from "../assests/hide.png";
import lockIcon from "../assests/padlock.png";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
import { login, logout } from "../firebase-cofing";
const Login = () => {
  const passwordInputRef = useRef();
  const [showPassWord, setShowPassword] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [password, setPassword] = useState("");

  const showOrHidePassword = () => {
    setShowPassword((pre) => !pre);
    if (showPassWord) {
      passwordInputRef.current.type = "text";
    } else {
      passwordInputRef.current.type = "password";
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    login(userEmail, password);
  };

  return (
    <div className="form-container">
      <button onClick={logout}>signOut</button>
      <div className="form-div container">
        <form onSubmit={submitHandler}>
          <h2>Login</h2>
          <div className="input-icons-div  ">
            <img src={emailIcon} />
            <input
              type="email"
              placeholder="heeeey"
              required
              onChange={(e) => setUserEmail(e.target.value)}
            />
          </div>
          <div className="input-icons-div  ">
            <img src={lockIcon} />
            <input
              type="password"
              placeholder="heeeey"
              required
              ref={passwordInputRef}
              onChange={(e) => setPassword(e.target.value)}
            />
            {showPassWord ? (
              <img
                src={hideIcon}
                style={{ cursor: "pointer" }}
                onClick={showOrHidePassword}
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
