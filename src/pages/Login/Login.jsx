import React, { useContext, useEffect } from "react";
import Navbar from "../../components/Navbar/Navbar";
import "./LoginModule.css";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../contexts/AuthContext";
import Account from "../Account/Account";

const Login = () => {
  const { isLoggedIn, setIsLoggedIn } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  function handleTestUserLogin() {
    setIsLoggedIn(true);
    console.log("isLoggedIn", isLoggedIn);
    console.log("location", location);
    navigate(location?.state.from?.pathname);
  }

  useEffect(() => {
    document.title = `LAMA | Login`;
  }, []);

  return (
    <div>
      <Navbar />
      {/* <h1>This is a Login Page</h1> */}

      {isLoggedIn ? (
        <Account />
      ) : (
        <div className="wrapper">
          <div className="form-container">
            {/* SignIn */}
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
                  onClick={handleTestUserLogin}
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

            {/* Right Overlay */}

            <div className="overlay-container">
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
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
