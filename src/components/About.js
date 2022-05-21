import React from "react";
import "./About.css";
import { MdLocationOn, MdFoodBank } from "react-icons/md";
import { IoWine, IoFastFoodOutline } from "react-icons/io5";
import { GoTools } from "react-icons/go";
import { GiTombstone, GiStakeHammer, GiGearHammer } from "react-icons/gi";
import { BsFillSuitHeartFill } from "react-icons/bs";
import { FaMedal } from "react-icons/fa";

const About = () => {
  return (
    <div className="about" id="about">
      <div className="container">
        <div className="logo-image">
          <h1>
            <GiStakeHammer />
          </h1>
          <p>בראשית מצבות</p>
          <p>עובדים מהלב</p>
        </div>
        <div className="col-2">
          <h2>אודות</h2>
          <span className="line"></span>
          <p style={{ textAlign: "center" }}>
            בראשית מצבות הינה תעשיית מצבות בהתאמה אישית. אנו מציעים מגוון רחב של
            מצבות ייחודיות ומעוצבות, בנוסף ניתן שרות של חידוש מצבות ואנדרטאות.
            חברה אמינה המספקת מתן אחריות עד 35 שנה, התשלום בסיום העבודה
            והתחייבות ללוח זמנים
          </p>
          <h2>
            <BsFillSuitHeartFill style={{ color: "red" }} />
            <GiGearHammer style={{ color: "orange" }} />
            <FaMedal style={{ color: "green" }} />
          </h2>
          <a
            href="https://www.facebook.com/%D7%91%D7%A8%D7%90%D7%A9%D7%99%D7%AA-%D7%9E%D7%A6%D7%91%D7%95%D7%AA-109678864210084/"
            className="button"
          >
            גלה עלינו עוד
          </a>
        </div>
      </div>
    </div>
  );
};

export default About;
