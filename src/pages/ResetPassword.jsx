import React, { useState,useEffect } from "react";
import emailIcon from "../assests/email.png";
import "./Form.css";

const ResetPassword = () => {
  const intialValues = { email: ""};
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
          <span>Email sent</span>
      )}
        <form onSubmit={handleSubmit} noValidate>
          <h2>Send Email to your account to reset your password</h2>
          <div className="input-icons-div  ">
            <img src={emailIcon} alt="" />
            <input
              type="email"
              name="email"
              id="email"
              value={formValues.email}
              onChange={handleChange}
              placeholder="Enter your email"
              required
            />
          </div>
          <button>Send email and reset password</button>
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

// import React, { useState } from "react";
// import emailIcon from "../assests/email.png";
// import { auth } from "../firebase-cofing";
// import { sendPasswordResetEmail } from "firebase/auth";
// import { useNavigate } from "react-router";
// import "./Form.css";

// const ResetPassword = () => {
//   const [resetEmail, setResetEmail] = useState("");
//   const navigate = useNavigate();
//   const submitHandler = (e) => {
//     e.preventDefault();
//     sendPasswordResetEmail(auth, resetEmail)
//       .then(() => {
//         navigate("/login");
//       })
//       .catch((err) => {
//         switch (err.message) {
//           case "Firebase: Error (auth/invalid-email).":
//             alert("invalid email");
//             break;
//           case "Firebase: Error (auth/user-not-found).":
//             alert("there is not such account with this email.");
//             break;

//           default:
//             break;
//         }
//         console.log(err.message);
//       });
//   };

//   return (
//     <div className="form-container">
//       <div className="form-div container">
//         <form onSubmit={submitHandler}>
//           <h2>Send Email to your account to reset your password</h2>
//           <div className="input-icons-div  ">
//             <img src={emailIcon} alt="" />
//             <input
//               type="email"
//               placeholder="Enter your email"
//               required
//               onChange={(e) => setResetEmail(e.target.value)}
//             />
//           </div>
//           <button>Send email and reset password</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default ResetPassword;
