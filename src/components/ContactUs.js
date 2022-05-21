import React, { useState } from "react";
import facebook from "./images/facebook.png";
import gmail from "./images/gmail.png";
import whatsapp from "./images/whatsapp.png";
import "./ContactUs.css";
import { Link } from "react-scroll";

const ContactUs = () => {
  const [isPending, setIsPending] = useState(false);
  const copy = () => {
    setIsPending(!isPending);
    setTimeout(() => {
      setIsPending(false);
    }, 5000);
  };

  return (
    <div className="contact-us" id="contact-us">
      <div className="container">
        <h2>יצירת קשר</h2>
        <span className="line"></span>
        <div className="content">
          <div className="card">
            <img src={facebook} alt="facebook" width="95px" />
            <p className="para-facebook">
              בפייסבוק יש לנו עוד מגוון רחב של עבודות, נשמח שתכנסו ותתרשמו מחלקם
            </p>
            <p>
              <a
                style={{ color: "rgb(14, 145, 0)" }}
                href="https://www.facebook.com/%D7%91%D7%A8%D7%90%D7%A9%D7%99%D7%AA-%D7%9E%D7%A6%D7%91%D7%95%D7%AA-109678864210084/"
              >
                Facebook
              </a>
            </p>
          </div>
          <div className="card">
            <img src={gmail} alt="gmail" width="90px" />
            <p id="gmail-id">
              ניתן ליצור איתנו קשר גם דרך המייל ונענה לכם בהקדם כדי לספק לכם את
              השירות הטוב ביותר<br></br>
            </p>
            <p>
              <a style={{ color: "rgb(14, 145, 0)" }} onClick={copy}>
                Gmail
              </a>
              {isPending && (
                <div className="copied-message">pini0527857002@gmail.com</div>
              )}
            </p>
          </div>
          <div className="card">
            <img src={whatsapp} alt="gmail" width="110px" height="100px" />
            <p>נשמח לקבל מכם הודעה בווטסאפ, אנחנו תמיד זמינים עבורכם</p>
            <p>
              <a
                style={{ color: "rgb(14, 145, 0)" }}
                href="https://api.whatsapp.com/send?phone=972527857002"
              >
                WhatsApp
              </a>
            </p>
          </div>
        </div>
        <div className="arrow-down">
          <Link
            to="demo"
            spy={true}
            smooth={true}
            offset={-90}
            duration={500}
          ></Link>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
