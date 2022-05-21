import React from "react";
import "./Hero.css";
import { GiStakeHammer } from "react-icons/gi";
import { FcApproval } from "react-icons/fc";
import { FcLike } from "react-icons/fc";
import { FcRating } from "react-icons/fc";
import arrowImg from "./images/arrow-down.gif";
import { Link } from "react-scroll";

const Hero = () => {
  return (
    <div className="hero">
      <div className="content">
        <p></p>
        <h1>
          <GiStakeHammer />
        </h1>
        <p>בראשית מצבות</p>
        <p>עובדים מהלב</p>
        <p>052-785-7002</p>
      </div>
    </div>
  );
};

export default Hero;
