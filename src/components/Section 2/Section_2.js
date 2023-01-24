import React from "react";
import "./Section_2.css";

const Section_2 = () => {
  return (
    <div className="Section2">
      <div className="Section2_imgs">
        <div className="outer"></div>
        <div className="Section2_img2"></div>
        <div className="Section2_img3"></div>
      </div>

      <div className="Section2_text">
        <div className="experience2">
          <p>Build your profile in less than 2 minutes.</p>
        </div>
        <br />
        <div className="experience2_discover">
          <p>
            Add a photo, contact info, your social profiles, all the <br/>basics in
            one place. Tell your story in an about and<br/> gallery section.
          </p>
        </div>
        <button>Get started for free</button>
      </div>
    </div>
  );
};

export default Section_2;
