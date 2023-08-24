import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../../components/Navbar/Navbar";
import "../Login/LoginModule.css";
import "./SignUpModule.css";

const SignUp = () => {
  useEffect(() => {
    document.title = `LAMA | Sign Up`;
  }, []);

  return (
    <>
      <div className="login-body">
        <Navbar />
        <div className="wrapper">
          <div className="form-container">
            {/* Right Overlay */}

            <div className="overlay-container overlay-container-right">
              <div className="overlay-signup-heading ">
                <div className="signup-overlay">
                  <h2 className="overlay-heading">Welcome!</h2>
                  <p className="overlay-description-sign-in">
                    Please login with your credentials to keep connected with
                    us.
                  </p>
                </div>
                <Link to="/login">
                  <button className="signup-btn">Sign In</button>
                </Link>
              </div>
            </div>

            {/* Signup */}
            <div className="signin-container">
              <form className="signin-form" action="">
                <h2>Create Account</h2>

                <input
                  className="name-input form-input"
                  type="name"
                  for="name"
                  placeholder="Name"
                />

                <input
                  className="email-input form-input"
                  type="email"
                  for="email"
                  placeholder="E-mail"
                />

                <input
                  className="pswd-input form-input"
                  type="password"
                  for="password"
                  placeholder="Password"
                />

                <button className="signin-btn overlay-signup-btn">
                  Sign Up
                </button>
              </form>
            </div>
            {/* SignIn End */}
          </div>
        </div>
      </div>
    </>
  );
};

export default SignUp;
