import React, { useRef } from "react";
import "./Register.css";
import { useCreateUserWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useNavigate } from "react-router-dom";
const Register = () => {
  const nameref = useRef("");
  const emailref = useRef("");
  const passwordref = useRef("");
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (user) {
    navigate("/");
  }

  const handleFormsubmit = (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;
    // console.log(email, password, name);
    createUserWithEmailAndPassword(email, password);
  };
  return (
    <div className="main-container">
      <form onSubmit={handleFormsubmit}>
        <div className="login-container">
          <div className="login-tittle ">
            <h1 className="text-center ">Register</h1> <br />
          </div>
          <div className="login-inputs">
            <input
              ref={nameref}
              type="name"
              name="name"
              id=""
              placeholder="Enter Your Name"
            />{" "}
            <br />
            <input
              ref={emailref}
              type="email"
              name="email"
              id=""
              placeholder="Enter Your Email"
            />{" "}
            <br />
            <input
              ref={passwordref}
              type="password"
              name="password"
              id=""
              placeholder="Enter Your Password"
            />{" "}
            <br />
            <p>{error}</p>
            <button className="register-button">Register</button>
            <div className="design">
              <div className="d-flex  align-items-center">
                <div
                  style={{ height: "1px", width: "290px" }}
                  className="bg-primary "
                >
                  {" "}
                </div>
                <p className="mt-2 px-2">or</p>
                <div
                  style={{ height: "1px", width: "290px" }}
                  className="bg-primary "
                ></div>
              </div>
            </div>
          </div>
        </div>
      </form>
      <button className="signinwithgoogle-button">Sign in With google</button>
    </div>
  );
};

export default Register;
