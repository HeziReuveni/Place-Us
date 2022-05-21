import React, { useEffect, useState } from "react";
import { IoIosArrowDown } from "react-icons/io";
import { BsImages } from "react-icons/bs";
import { FaLinkedin } from "react-icons/fa";
import img1 from "./views_images/pic1.jpg";
import img2 from "./views_images/pic2.jpg";
import img3 from "./views_images/pic3.jpg";
import img4 from "./views_images/pic4.jpg";
import img5 from "./views_images/pic5.jpg";
import img6 from "./views_images/pic6.jpg";
import img7 from "./views_images/pic7.jpg";
import "./Demo.css";

const Demo = () => {
  const arrImgs = [img1, img2, img3, img4, img5, img6, img7];
  const [image, setImage] = useState(img1);
  const [seconds, setSeconds] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((second) => (second === 6 ? 0 : second + 1));
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="demo" id="demo">
      <div className="container">
        <div className="col-1">
          <p></p>
          <p style={{ textAlign: "center" }}> נשמח שתתרשמו מהעבודות שלנו</p>
          <p style={{ textAlign: "center" }}>
            אנחנו מציעים מגוון רחב של מצבות באיכות וברמה הגבוהה ביותר, בנוסף אנו
            עושים חידוש מצבות ואנדרטאות, לחצו כאן לגלרייה המלאה
          </p>
          <h2>
            <IoIosArrowDown style={{ color: "rgb(14, 145, 0)" }} />
          </h2>
          <a href="/gallery" id="end-button" className="button">
            העבודות שלנו <BsImages className="rrr" />
          </a>
        </div>
        <div className="col-2">
          <img src={arrImgs[seconds]} width="600vw" height="400vh" />
        </div>
      </div>
    </div>
  );
};

export default Demo;
