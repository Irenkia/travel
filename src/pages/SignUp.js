import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import "./../styles/App.css";
import "./../styles/SignUp.css";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    if (id === "firstName") {
      setFirstName(value);
    }
    if (id === "lastName") {
      setLastName(value);
    }
    if (id === "email") {
      setEmail(value);
    }
    if (id === "password") {
      setPassword(value);
    }
    if (id === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const handleSubmit = () => {
    console.log(firstName, lastName, email, password, confirmPassword);
  };

  return (
    <>
      <div className="sign-up">
        <h1>Sign Up</h1>
        <div className="form">
          <div className="form-body">
            <div className="username">
              <label className="form-label" htmlFor="firstName">
                First Name
              </label>
              <input
                className="form-input"
                type="text"
                value={firstName}
                onChange={(e) => handleInputChange(e)}
                id="firstName"
                placeholder="First Name"
              />
            </div>
            <div className="lastname">
              <label className="form-label" htmlFor="lastName">
                Last Name
              </label>
              <input
                className="form-input"
                type="text"
                value={lastName}
                onChange={(e) => handleInputChange(e)}
                name=""
                id="lastName"
                placeholder="LastName"
              />
            </div>
            <div className="email">
              <label className="form-label" htmlFor="email">
                Email
              </label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
                id="email"
                placeholder="Email"
              />
            </div>
            <div className="password">
              <label className="form-label" htmlFor="password">
                Password
              </label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e)}
                id="password"
                placeholder="Password"
              />
            </div>
            <div className="confirm-password">
              <label className="form-label" htmlFor="confirmPassword">
                Confirm Password
              </label>
              <input
                className="form-input"
                type="password"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
                id="confirmPassword"
                placeholder="Confirm Password"
              />
            </div>
          </div>
          <div className="submit">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="btn"
            >
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
