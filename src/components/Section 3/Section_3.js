import React from "react";
import "./Section_3.css";
import logo from "../../images/logo.png";
import card1 from "../../images/card1.png"

const Section_3 = () => {
  return (
    <div className="Section3">
      <div className="trees">
        <div className="Section3_innerdiv">
          <div className="Section3_text">
            <p>
              Get an NFC card and link<br/> it to your profile. We plant <br/> a tree for
              each card!
            </p>
          </div>
          <div className="tree"></div>
          <div className="Section3_cards">
            <div className="card1">
              <img src={card1} alt="text"/>
            </div>
            <div className="card2">
              <img src={logo} alt="logo"/>
              <div className="card2_text">
                <h2>Andrea Johns</h2>
              <p>Interior Designer</p>
              </div>
              
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section_3;
