import React, { useRef, useState } from "react";
import emailIcon from "../assests/email.png";
import hideIcon from "../assests/hide.png";
import { BsEye } from "react-icons/bs";
const Login = () => {
  const passwordInputRef = useRef();
  const [showPassWord, setShowPassword] = useState(false);
  const showOrHidePassword = () => {
    setShowPassword((pre) => !pre);
    if (showPassWord) {
      passwordInputRef.current.type = "text";
    } else {
      passwordInputRef.current.type = "password";
    }
  };

  return (
    <div className="form-container">
      <div className="form-div container">
        <div>
          <h2>Login</h2>
          <div className="input-icons-div  ">
            <img src={emailIcon} />
            <input type="email" placeholder="heeeey" />
          </div>
          <div className="input-icons-div  ">
            <img src={emailIcon} />
            <input
              type="password"
              placeholder="heeeey"
              ref={passwordInputRef}
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
            Don't have an account ? <span>Sign-up</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
