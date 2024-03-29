import React, { useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./Login.css";
import {
  useSignInWithEmailAndPassword,
  useSignInWithGoogle,
} from "react-firebase-hooks/auth";
import auth from "../../../firebase.init";
import { useSendPasswordResetEmail } from "react-firebase-hooks/auth";
import Loading from "../../Share/Loading/Loading";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import google from "../../../images/google.png";

const Login = () => {
  const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth);
  const [signInWithGoogle, googleuser, googleloading, googleerror] =
    useSignInWithGoogle(auth);
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
  let location = useLocation();
  let from = location.state?.from?.pathname || "/";

  useEffect(() => {
    if (user || googleuser) {
      navigate(from, { replace: true });
    }
  }, [user, googleuser]);

  let errorelement;
  if (error) {
    errorelement = (
      <div>
        <p className="text-danger text-center mt-4">Error: {error?.message}</p>
      </div>
    );
  }

  const resetpassword = async () => {
    const email = emailref.current.value;
    await sendPasswordResetEmail(email);
    if (!email) {
      toast("Enter an Email first");
    } else {
      await sendPasswordResetEmail(email);
      toast("Sent email");
    }
  };

  const handlesigninwithGoogle = (e) => {
    e.preventDefault();
    signInWithGoogle();
  };
  if (loading || sending || googleloading) {
    return <Loading></Loading>;
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
              id="loginemail"
              required
              placeholder="Enter Your Email"
            />{" "}
            <br />
            <input
              ref={passwordref}
              required
              type="password"
              name="password"
              id="loginpass"
              placeholder="Enter Your Password"
            />{" "}
            <br />
            {errorelement}
            <button className="signin-button">Sign in</button>
            <Link to="/login" onClick={resetpassword}>
              <p className="text-center mt-5">Forget Password?</p>
            </Link>
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
        <img src={google} alt="" />
        Sign in With google
      </button>
      <ToastContainer />
    </div>
  );
};

export default Login;
