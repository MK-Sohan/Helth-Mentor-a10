import React, { useRef } from "react";
import { Link, useNavigate } from "react-router-dom";
import "./Login.css";
import { useSignInWithEmailAndPassword } from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";

const Login = () => {
  const emailref = useRef("");
  const passwordref = useRef("");
  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);
  const navigate = useNavigate();
  const handleloginForm = (e) => {
    const email = emailref.current.value;
    const password = passwordref.current.value;
    e.preventDefault();
    signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate("/");
  }
  return (
    <div className="main-container">
      <form onSubmit={handleloginForm}>
        <div className="login-container">
          <div className="login-tittle ">
            <h1 className="text-center ">Sign in</h1> <br />
            <p className="text-center">
              New to Helth Mentis?{" "}
              <Link to="/register"> Create an Account</Link>{" "}
            </p>
          </div>
          <div className="login-inputs">
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
            <button className="signin-button">Sign in</button>
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

export default Login;
