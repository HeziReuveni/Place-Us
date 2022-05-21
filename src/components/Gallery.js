import React from "react";
import "./Gallery.css";
import img141 from "./gallery_images/141.jpg";
import img142 from "./gallery_images/142.jpg";
import img143 from "./gallery_images/143.jpg";
import img144 from "./gallery_images/144.jpg";
import img145 from "./gallery_images/145.jpg";
import img146 from "./gallery_images/146.jpg";
import img147 from "./gallery_images/147.jpg";
import img1 from "./gallery_images/1.jpg";
import img2 from "./gallery_images/2.jpg";
import img3 from "./gallery_images/3.jpg";
import img4 from "./gallery_images/4.jpg";
import img5 from "./gallery_images/5.jpg";
import img6 from "./gallery_images/6.jpg";
import img7 from "./gallery_images/7.jpg";
import img8 from "./gallery_images/8.jpg";
import img9 from "./gallery_images/9.jpg";
import img10 from "./gallery_images/10.jpg";
import img11 from "./gallery_images/11.jpg";
import img12 from "./gallery_images/12.jpg";
import img13 from "./gallery_images/13.jpg";
import img14 from "./gallery_images/14.jpg";
import img15 from "./news/15.jpg";
import img16 from "./news/16.jpg";
import img17 from "./news/17.jpg";
import img18 from "./news/18.jpg";
import img19 from "./news/19.jpg";
import img20 from "./news/20.jpg";
import img21 from "./news/21.jpg";
import img22 from "./news/22.jpg";
import img23 from "./news/23.jpg";
import img24 from "./candle/pic24.jpg";
import { GrTools } from "react-icons/gr";
import { MdOutlineWbTwilight } from "react-icons/md";
import { GiCandleLight } from "react-icons/gi";

const Gallery = () => {
  return (
    <div className="gallery-cont">
      <div className="first-title-gallery">
        <GrTools />
        העבודות שלנו
      </div>
      <img src={img141} />
      <img src={img142} />
      <img src={img143} />
      <img src={img144} />
      <img src={img145} />
      <img src={img146} />
      <img src={img147} />
      <img src={img1} />
      <img src={img2} />
      <img src={img3} />
      <img src={img4} />
      <img src={img5} />
      <img src={img6} />
      <img src={img7} />
      <img src={img8} />
      <img src={img9} />
      <img src={img10} />
      <img src={img11} />
      <img src={img12} />
      <img src={img13} />
      <img src={img14} />
      <div className="first2-title-gallery">חידוש מצבות ליקרים שכבר אינם</div>
      <img src={img15} />
      <img src={img16} />
      <img src={img17} />
      <img src={img18} />
      <img src={img19} />
      <img src={img20} />
      <img src={img21} />
      <img src={img22} />
      <img src={img23} />
      <div className="first2-title-gallery">
        <GiCandleLight />
        נוספות
      </div>
      <img src={img24} />
    </div>
  );
};

export default Gallery;
