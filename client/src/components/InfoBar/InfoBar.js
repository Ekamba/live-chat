import React from "react";
import { red, green } from "@material-ui/core/colors";
import { Close, Person } from "@material-ui/icons/";

import "./InfoBar.css";

const InfoBar = ({ room }) => (
  <div className="infoBar">
    <div className="leftInnerContainer">
      <Person
        className="onlineIcon"
        style={{ color: green[500], marginLeft: 10, fontSize: 30 }}
      />
      <h3>{room}</h3>
    </div>
    <div className="rightInnerContainer">
      <a href="/">
        <Close style={{ marginLeft: 10, fontSize: 30 }} />
      </a>
    </div>
  </div>
);

export default InfoBar;
