import React, { useRef, useState } from "react";

const Login = () => {
  const passwordInputRef = useRef();
  const [showPassWord, setShowPassword] = useState(false);
  const showOrHidePassword = () => {
    if (showPassWord) passwordInputRef.current.type = "text";
    if (!showPassWord) passwordInputRef.current.type = "password";
  };
  return (
    <div className="form-container">
      <div className="form-div container">
        <div>
          {" "}
          <h2>Login</h2>
          <div className="input-icons-div  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <image id="email" width="43" height="43" />
            </svg>
            <input type="email" placeholder="heeeey" />
          </div>
          <div className="input-icons-div  ">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <image id="email" width="43" height="43" />
            </svg>
            <input
              type="password"
              placeholder="heeeey"
              ref={passwordInputRef}
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="43"
              height="43"
              viewBox="0 0 43 43"
            >
              <image id="email" width="43" height="43" />
            </svg>
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
