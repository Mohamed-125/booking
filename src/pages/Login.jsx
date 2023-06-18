import React, { useRef, useState, useEffect } from "react";
import emailIcon from "../assests/email.png";
import hideIcon from "../assests/hide.png";
import lockIcon from "../assests/padlock.png";
import { BsEye } from "react-icons/bs";
import { Link } from "react-router-dom";
// import { auth } from "../firebase-cofing";
// import { signInWithEmailAndPassword } from "firebase/auth";
import "./Form.css";

const Login = () => {
  const intialValues = { email: "", password:"" };
  const [formValues, setFormValues] = useState(intialValues);
  const [formErrors, setFormErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const submit = () => {
    console.log(formValues);
  };

  //input change handler
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  //form submission handler
  const handleSubmit = (e) => {
    e.preventDefault();
    setFormErrors(validate(formValues));
    setIsSubmitting(true);
  };

  //form validation handler
  const validate = (values) => {
    let errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Cannot be blank";
    } else if (!regex.test(values.email)) {
      errors.email = "Invalid email format";
    }

    if (!values.password) {
      errors.password = "Cannot be blank";
    } else if (values.password.length < 8) {
      errors.password = "must be more than 8 ";
    }

    return errors;
  };

  useEffect(() => {
    if (Object.keys(formErrors).length === 0 && isSubmitting) {
      submit();
    }
  }, [formErrors]);

  const passwordInputRef = useRef();
  const [showPassWord, setShowPassword] = useState(false);

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
  return (
    <div className="form-container">
      <div className="form-div container">
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="">Form submitted successfully</span>
        )}

        <form onSubmit={handleSubmit} noValidate>
          <h2>Login</h2>
          <div className="input-icons-div  ">
            <img src={emailIcon} alt="" />
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              required
              placeholder="Email"
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <div className="input-icons-div  ">
            <img src={lockIcon} alt="" />
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className={formErrors.password && "input-error"}
              placeholder="Password"
              required
            ref={passwordInputRef}
            />
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
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
          <p style={{ paddingBottom: "10px" }}>
            Don't have an account ?
            <span>
              <Link to={"/sign-up"}> Sign Up</Link>
            </span>
          </p>
          <p>
            Did you forget your password ?
            <span>
              <Link to={"/reset-password"}> Reset your password</Link>
            </span>
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;



// import React, { useRef, useState, useEffect } from "react";
// import emailIcon from "../assests/email.png";
// import hideIcon from "../assests/hide.png";
// import lockIcon from "../assests/padlock.png";
// import { BsEye } from "react-icons/bs";
// import { useNavigate, Link } from "react-router-dom";
// import { auth } from "../firebase-cofing";
// import { signInWithEmailAndPassword } from "firebase/auth";
// import "./Form.css";

// const Login = () => {
//   const passwordInputRef = useRef();
//   const [showPassWord, setShowPassword] = useState(false);
//   const [userEmail, setUserEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const showOrHidePassword = () => {
//     setShowPassword((pre) => !pre);
//   };

//   useEffect(() => {
//     if (showPassWord) {
//       passwordInputRef.current.type = "text";
//     } else {
//       passwordInputRef.current.type = "password";
//     }
//   }, [showPassWord]);

//   const submitHandler = async (e) => {
//     e.preventDefault();

//     try {
//       const user = await signInWithEmailAndPassword(auth, userEmail, password);
//       navigate("/");
//     } catch (err) {
//       switch (err.message) {
//         case "Firebase: Error (auth/wrong-password).":
//           alert("wrong password");
//           break;
//         case "Firebase: Error (auth/user-not-found).":
//           alert("There is not account with this email");
//           break;
//         case "Firebase: Error (auth/invalid-email).":
//           alert("invalid email");
//           break;
//         default:
//           break;
//       }
//       console.log(err.message);
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-div container">
//         <form onSubmit={submitHandler}>
//           <h2>Login</h2>
//           <div className="input-icons-div  ">
//             <img src={emailIcon} alt="" />
//             <input
//               type="email"
//               placeholder="Email"
//               required
//               onChange={(e) => setUserEmail(e.target.value)}
//             />
//           </div>
//           <div className="input-icons-div  ">
//             <img src={lockIcon} alt="" />
//             <input
//               type="password"
//               placeholder="Password"
//               required
//               ref={passwordInputRef}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             {!showPassWord ? (
//               <img
//                 src={hideIcon}
//                 style={{ cursor: "pointer" }}
//                 onClick={showOrHidePassword}
//                 alt=""
//               />
//             ) : (
//               <BsEye
//                 style={{ cursor: "pointer" }}
//                 onClick={showOrHidePassword}
//               />
//             )}
//           </div>
//           <div></div>
//           <button>Submit</button>
//           <p style={{ paddingBottom: "10px" }}>
//             Don't have an account ?
//             <span>
//               <Link to={"/sign-up"}> Sign Up</Link>
//             </span>
//           </p>
//           <p>
//             Did you forget your password ?
//             <span>
//               <Link to={"/reset-password"}> Reset your password</Link>
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Login;
