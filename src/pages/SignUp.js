import React from "react";
import Footer from "../components/footer/Footer";
import "./../styles/App.css";
import "./../styles/SignUp.css";

const SignUp = () => {
  return (
    <>
      <div className="sign-up">
        <h1>Sign Up</h1>
        <div className="form">
          <div className="form-body">
            <div className="username">
              <label className="form-label" for="firstName">
                First Name
              </label>
              <input
                className="form-input"
                type="text"
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="lastname">
              <label className="form-label" for="lastName">
                Last Name
              </label>
              <input
                type="text"
                name=""
                id="lastName"
                className="form-input"
                placeholder="LastName"
              />
            </div>
            <div className="email">
              <label className="form-label" for="email">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="form-input"
                placeholder="Email"
              />
            </div>
            <div className="password">
              <label className="form-label" for="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="confirm-password">
              <label className="form-label" for="confirmPassword">
                Confirm Password
              </label>
              <input
                className="form-input"
                type="password"
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div class="submit">
            <button type="submit" class="btn">
              Register
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
