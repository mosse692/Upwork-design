import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <div className="Footer">
      <div className="Footer1">
        <div className="row1">
          <h1>Language</h1>
          <div className="language">
            <div className="flag"></div> <p>English</p>
          </div>
          <div className="Ecologi"></div>
        </div>

        <div className="row2">
          <h1>GPM Solutions</h1>
          <p>GPM Link</p>
          <p>GPM for Businesses and Teams</p>
          <p>GPM Mall</p>
          <p>GPM Travel</p>
          <p>GPM Token</p>
          <p>GPM Link</p>
          <p>GPM Reseller</p>
        </div>

        <div className="row3">
          <h1>Trust & Legal</h1>
          <p>Privacy Policy</p>
          <p>Terms and Conditions</p>
          <p>Report a violation</p>
          <p>GDPR Request form</p>
        </div>

        <div className="row4">
          <h1>Find us</h1>
          <div className="icons">
            <div className="log"></div>
            <div className="discord"></div>
            <div className="twitter"></div>
            <div className="telegram"></div>
            <div className="instagram"></div>
          </div>
          <h2>App</h2>
          <div className="AppStore"></div>
          <div className="GooglePlay"></div>
        </div>
      </div>
      <div className="copyRight">
        <p>copyright © 2022 All rights reserved - Gopop.me</p>
      </div>
    </div>
  );
};

export default Footer;
