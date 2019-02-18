import React from "react";
import logo40 from "../../../static/images/avatar.jpeg";
import logo41 from "../../../static/images/logo90.svg";
import "./Avatar.css";

const Avatar = props => (
  <div className={`c-avatar ${props.modifierClasses}`}>
    <img
      src={props.modifierClasses === "c-avatar--as-logo" ? logo41 : logo40}
      alt="omanchi.com"
    />
  </div>
);

export default Avatar;
