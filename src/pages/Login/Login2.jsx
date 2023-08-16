import React from "react";
import { Link } from "react-router-dom";

import "./LoginModule.css";
import "./LoginModule2.css";

const Login2 = () => {
  return (
    <>
      <div className="wrapper">
        <div className="form-container">
          <div className="left-side">
            {/* Sign In */}

            <div className="signin-container">
              <form className="signin-form" action="">
                <h2>Log In</h2>

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

                <p className="forgot-pwd">Forgot your password?</p>

                <button className="signin-btn">Sign In</button>
                <button
                  className="signin-btn"
                  style={{
                    display: "block",
                    margin: "auto",
                    marginTop: "10px",
                  }}
                >
                  Login as Test User
                </button>
              </form>
            </div>
            {/* SignIn End */}

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
            {/* SignUp End */}
          </div>

          <div className="right-side">
            {/* Sign Up Overlay */}
            <div className="overlay-container overlay-container-signin">
              <div className="overlay-signup-heading">
                <div className="signup-overlay">
                  <h2 className="overlay-heading">Hi there!</h2>
                  <p className="overlay-description">
                    Please enter your details and start your journey with us.
                  </p>
                </div>
                <Link to="/sign-up">
                  <button className="signup-btn">Sign Up</button>
                </Link>
              </div>
            </div>

            {/* Sign In Overlay */}
            <div className="overlay-container overlay-container-signup">
              <div className="overlay-signup-heading ">
                <div className="signup-overlay">
                  <h2 className="overlay-heading">Welcome!</h2>
                  <p className="overlay-description-sign-in">
                    Please login with your credentials to kepp connected with
                    us.
                  </p>
                </div>
                <Link to="/login">
                  <button className="signup-btn">Sign In</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login2;
