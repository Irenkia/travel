import React, { useState } from "react";
import Footer from "../components/footer/Footer";
import { useTranslation } from "react-i18next";
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

  const { t } = useTranslation();

  return (
    <>
      <div className="sign-up">
        <h1>
          {t("sign_up_title")}
          {/* Sign Up */}
        </h1>
        <div className="form">
          <div className="form-body">
            <div className="username">
              <label className="form-label" htmlFor="firstName">
                {t("sign_up_name")}
              </label>
              <input
                className="form-input"
                type="text"
                value={firstName}
                onChange={(e) => handleInputChange(e)}
                id="firstName"
                placeholder={t("sign_up_name")}
              />
            </div>
            <div className="lastname">
              <label className="form-label" htmlFor="lastName">
                {t("sign_up_surname")}
                {/* Last Name */}
              </label>
              <input
                className="form-input"
                type="text"
                value={lastName}
                onChange={(e) => handleInputChange(e)}
                name=""
                id="lastName"
                placeholder={t("sign_up_surname")}
              />
            </div>
            <div className="email">
              <label className="form-label" htmlFor="email">
                {t("sign_up_email")}
                {/* Email */}
              </label>
              <input
                className="form-input"
                type="email"
                value={email}
                onChange={(e) => handleInputChange(e)}
                id="email"
                placeholder={t("sign_up_email")}
              />
            </div>
            <div className="password">
              <label className="form-label" htmlFor="password">
                {t("sign_up_password")}
                {/* Password */}
              </label>
              <input
                className="form-input"
                type="password"
                value={password}
                onChange={(e) => handleInputChange(e)}
                id="password"
                placeholder={t("sign_up_password")}
              />
            </div>
            <div className="confirm-password">
              <label className="form-label" htmlFor="confirmPassword">
                {t("sign_up_password2")}
                {/* Confirm Password */}
              </label>
              <input
                className="form-input"
                type="password"
                value={confirmPassword}
                onChange={(e) => handleInputChange(e)}
                id="confirmPassword"
                placeholder={t("sign_up_password2")}
              />
            </div>
          </div>
          <div className="submit">
            <button
              onClick={() => handleSubmit()}
              type="submit"
              className="btn"
            >
              {t("sign_up_register")}
              {/* Register */}
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
};

export default SignUp;
