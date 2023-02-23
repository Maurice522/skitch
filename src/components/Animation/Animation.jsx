import React from "react";
import bg from "../../assets/bg.svg";
import burger from "../../assets/burger.svg";
import gif from "../../assets/animation.gif";
import "./Animation.css";

const Animation = () => {
  return (
    <div className="animate__container">
      <img src={bg} alt="" className="bg" />
      <img src={burger} alt="" className="burger" />
      {/* <img src={gif} alt="" className="gif" /> */}
    </div>
  );
};

export default Animation;
