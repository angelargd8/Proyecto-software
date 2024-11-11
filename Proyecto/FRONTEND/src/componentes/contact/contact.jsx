import logo from "../../assets/img/logo.png";
import "./contact.css";
import { LogoWhatsapp, MailOutline } from "react-ionicons";
import React from "react";

function Contact() {
  return (
    <div className="contact-container">
      <div style={{ width: "100%" }}>
        <div className="header-text">Contáctanos</div>
        <div
          className="header-text"
          style={{
            fontSize: "20px",
          }}
        >
          ¡Estamos para servirte!
        </div>
      </div>
      <hr />
      <div className="info-container">
        <div style={{ width: 400, height: 400 }}>
          <img
            src={logo}
            alt="logo"
            style={{ width: "100%", height: "100%", objectFit: "contain" }}
          />
        </div>
        <div className="contact-info-container">
          <div>
            <LogoWhatsapp color="#cea44a" />: 3706-7222
          </div>
          <div>
            <MailOutline color="#cea44a" />
            :picolinescolor@gmail.com
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contact;
