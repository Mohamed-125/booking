import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import emailIcon from "../assests/email.png";
import avatarIcon from "../assests/avatar.png";
import locationIcon from "../assests/location.png";
import lockIcon from "../assests/padlock.png";
import "./Form.css";

const Signup = () => {

  const intialValues = { username: "", email: "", password: "", location: "" };
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

  return (
    <div className="form-container">
      <div className="form-div container">
        {Object.keys(formErrors).length === 0 && isSubmitting && (
          <span className="">Form submitted successfully</span>
        )}

        {/* <form onSubmit={submitHandler}> */}
        <form onSubmit={handleSubmit} noValidate>
          <h2>Sign up</h2>
          <div className="input-icons-div  ">
            <img src={avatarIcon} />
            <input
              type="text"
              name="username"
              id="username"
              value={formValues.username}
              onChange={handleChange}
              required
              // onChange={(e) => setUsername(e.target.value)}
              placeholder="Username"
            />
          </div>
          <div className="input-icons-div  ">
            <img src={emailIcon} />
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              // className={formErrors.email && "input-error"}
              // type="email"
              required
              // onChange={(e) => setUserEmail(e.target.value)}
              placeholder="Email"
            />
            {formErrors.email && (
              <span className="error">{formErrors.email}</span>
            )}
          </div>
          <div className="input-icons-div  ">
            <img src={lockIcon} />
            <input
              type="password"
              name="password"
              id="password"
              value={formValues.password}
              onChange={handleChange}
              className={formErrors.password && "input-error"}
              // type="password"
              required
              // onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
            />
            {formErrors.password && (
              <span className="error">{formErrors.password}</span>
            )}
          </div>
          <div className="input-icons-div  ">
            <img src={locationIcon} />
            <input
              type="text"
              name="location"
              id="location"
              value={formValues.location}
              onChange={handleChange}
              // onChange={(e) => setLocation(e.target.value)}
              placeholder="Location"
            />

          </div>
          <div className="form-checkbox-div ">
            <input type="checkbox" required />
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


// import React, { useEffect, useState } from "react";
// import emailIcon from "../assests/email.png";
// import avatarIcon from "../assests/avatar.png";
// import locationIcon from "../assests/location.png";
// import lockIcon from "../assests/padlock.png";
// import { useNavigate, Link } from "react-router-dom";
// import { auth } from "../firebase-cofing";
// import { createUserWithEmailAndPassword } from "firebase/auth";
// import "./Form.css";

// const Signup = () => {
//   const [username, setUsername] = useState("");
//   const [userEmail, setUserEmail] = useState("");
//   const [location, setLocation] = useState("");
//   const [password, setPassword] = useState("");
//   const navigate = useNavigate();

//   const submitHandler = async (e) => {
//     e.preventDefault();
//     try {
//       const user = await createUserWithEmailAndPassword(
//         auth,
//         userEmail,
//         password
//       );
//       navigate("/login");
//     } catch (err) {
//       console.log(err.message);

//       switch (err.message) {
//         case "Firebase: Error (auth/email-already-in-use).":
//           alert("email already in use");
//           break;
//         case "Firebase: Password should be at least 6 characters (auth/weak-password)":
//           alert("Password should be at least 6 characters");
//           break;
//         case "Firebase: Error (auth/invalid-email).":
//           alert("invalid email");
//           break;
//         default:
//           break;
//       }
//     }
//   };

//   return (
//     <div className="form-container">
//       <div className="form-div container">
//         <form onSubmit={submitHandler}>
//           <h2>Sign up</h2>
//           <div className="input-icons-div  ">
//             <img src={avatarIcon} />
//             <input
//               type="text"
//               required
//               onChange={(e) => setUsername(e.target.value)}
//               placeholder="Username"
//             />
//           </div>

//           <div className="input-icons-div  ">
//             <img src={emailIcon} />
//             <input
//               type="email"
//               required
//               onChange={(e) => setUserEmail(e.target.value)}
//               placeholder="Email"
//             />
//           </div>
//           <div className="input-icons-div  ">
//             <img src={lockIcon} />
//             <input
//               type="password"
//               required
//               onChange={(e) => setPassword(e.target.value)}
//               placeholder="Password"
//             />
//           </div>
//           <div className="input-icons-div  ">
//             <img src={locationIcon} />
//             <input
//               type="text"
//               required
//               onChange={(e) => setLocation(e.target.value)}
//               placeholder="Location"
//             />
//           </div>
//           <div className="form-checkbox-div ">
//             <input type="checkbox" />
//             <p>
//               I agree with <span>Terms</span> and
//               <span>Privacy</span>
//             </p>
//           </div>
//           <button type="submit">Submit</button>
//           <p>
//             Do you have an account already ?
//             <span>
//               <Link to={"/login"}> Login</Link>
//             </span>
//           </p>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default Signup;
