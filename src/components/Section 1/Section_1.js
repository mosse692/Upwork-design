import React from "react";
import "./Section_1.css";
import Group693 from "../../images/Group693.png";

const Section_1 = () => {
  return (
    <div className="Section1">
      <div className="Section1_text">
        <div className="experience">
          <p>
            Introduce yourself. <br/>Create your Digital{" "}
            <span className="experience_span">Social </span>
            Profile
          </p>
        </div>
        <div className="experience_discover">
          <p>And discover the added perks.</p>
        </div>
        <button>Get started for free</button>
      </div>
      <div className="Section1_img">
        <img src={Group693} alt="Group" />
      </div>
    </div>
  );
};

export default Section_1;
