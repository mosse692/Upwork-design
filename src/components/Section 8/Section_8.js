import React from "react";
import "./Section_8.css";

const Section_8 = () => {
  return (
    <div className="Section8">
      <div className="Newsletter">
        <h1>Join our newsletter.</h1>
        <div className="triangle"></div>
        <form>
          <input placeholder="Your Email" type="email" />
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Section_8;
