import React from "react";
import {Button} from "../button/Button";
import "../button/Button.css";
import "./Basic.css";

const Basic = () => {
  return (
    <div className="basic-container">
      <h1>ADVENTURE AWAITS</h1>
      <p>What are you waiting for?</p>
      <div className="basic-btns">
        <Button
          className="btns"
          buttonStyle="btn--outline"
          buttonSize="btn--large"
          value="GET STARTED"
        >GET STARTED</Button>
        <Button
          className="btns"
          buttonStyle="btn--primary"
          buttonSize="btn--large"
          onClick={console.log("Hello")}
          value="SEE OFERS"
        >SEE OFERS
        </Button>
      </div>
    </div>
  );
};

export default Basic;