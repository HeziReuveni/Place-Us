import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import { GiStakeHammer } from "react-icons/gi";
import "./Navbar.css";

const Navbar = () => {
  const [click, setClick] = useState(false);
  const handleClick = () => setClick(!click);

  const closeMenu = () => setClick(false);

  return (
    <div className="header">
      <nav className="navbar">
        <a href="" className="logo">
          <div className="logo-nav">
            <h2>
              <GiStakeHammer />
            </h2>
            <p id="text_1">בראשית מצבות</p>
            <p id="text_2">עובדים מהלב</p>
          </div>
        </a>
        <div className="hamburger" onClick={handleClick}>
          {click ? (
            <FaTimes size={30} style={{ color: "#ffffff" }} />
          ) : (
            <FaBars size={30} style={{ color: "#ffffff" }} />
          )}
        </div>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
          <li className="nav-item">
            <Link
              to="hero"
              spy={true}
              smooth={true}
              offset={-90}
              duration={500}
              onClick={closeMenu}
            >
              עמוד הבית
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="about"
              spy={true}
              smooth={true}
              offset={-110}
              duration={500}
              onClick={closeMenu}
            >
              אודות
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="demo"
              spy={true}
              smooth={true}
              offset={-190}
              duration={500}
              onClick={closeMenu}
            >
              גלריית תמונות
            </Link>
          </li>
          <li className="nav-item">
            <Link
              to="contact-us"
              spy={true}
              smooth={true}
              offset={-170}
              duration={500}
              onClick={closeMenu}
            >
              יצירת קשר
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;
