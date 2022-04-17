import React, { useRef } from "react";
import "./Register.css";
import {
  useCreateUserWithEmailAndPassword,
  useSendEmailVerification,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { Link, useNavigate } from "react-router-dom";
import Loading from "../../Share/Loading/Loading";

import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useSignInWithGoogle } from "react-firebase-hooks/auth";

const Register = () => {
  const nameref = useRef("");
  const emailref = useRef("");
  const passwordref = useRef("");
  const [signinwithgoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);

  useSendEmailVerification(auth, { sendEmailVerification: true });
  const [createUserWithEmailAndPassword, user, loading, error] =
    useCreateUserWithEmailAndPassword(auth);
  const navigate = useNavigate();
  if (user || googleuser) {
    navigate("/");
    errorelement = "";
  }
  if (loading || googleloading) {
    return <Loading></Loading>;
  }

  let errorelement;
  if (error || googleerror) {
    errorelement = (
      <div>
        <p className="text-danger text-center mt-4">Error: {error?.message}</p>
      </div>
    );
  }

  const handleFormsubmit = (e) => {
    e.preventDefault();
    const name = nameref.current.value;
    const email = emailref.current.value;
    const password = passwordref.current.value;
    // console.log(email, password, name);
    createUserWithEmailAndPassword(email, password);
    toast("email send");
  };

  const handlesigninwithGoogle = (e) => {
    e.preventDefault();
    signinwithgoogle();
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
              required
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
              required
              id=""
              placeholder="Enter Your Email"
            />{" "}
            <br />
            <input
              ref={passwordref}
              type="password"
              name="password"
              required
              id=""
              placeholder="Enter Your Password"
            />{" "}
            <br />
            {errorelement}
            <p className="text-center mt-4">
              Already Have an Account? <Link to="/login"> Log in</Link>
            </p>
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
      <button
        onClick={handlesigninwithGoogle}
        className="signinwithgoogle-button"
      >
        Sign in With google
      </button>
      <ToastContainer />
    </div>
  );
};

export default Register;
