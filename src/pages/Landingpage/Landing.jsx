import React from "react";
import Animation from "../../components/Animation/Animation";
import Navbar from "../../components/Navbar/Navbar";
import "./Landing.css";

const Landing = () => {
  return (
    <div>
      <Navbar />
      <div className="landing__wrapper">
        <div className="landing__content">
          <h3>The FOOD STOCK Exchange</h3>
          <p>To experience this wonderful journey join now</p>
          {/* <a className="link" href="https://forms.gle/a4pdvX6xtTVxTmNf7"> */}
            <button>Join Waitlist</button>
          {/* </a> */}
        </div>
        <Animation />
      </div>
    </div>
  );
};

export default Landing;
