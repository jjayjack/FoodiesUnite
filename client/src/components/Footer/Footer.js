import React from "react";
import "./style.css";

const today = new Date();

const Footer = () => (
  <div className="footer">
    <p> © Eats Around Me {today.getFullYear()} </p>
  </div>
);

export default Footer;
