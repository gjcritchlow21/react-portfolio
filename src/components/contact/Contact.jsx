//imports
import React from "react";
import { Link } from "react-router-dom";
import "./contact.css";

//image imports
import email from "../../images/email.png";
import github from "../../images/github.png";
import linkedin from "../../images/linkedin1.png";

export default function Contact() {
  return (
    <div id="contact-container">
      <div id="media-contact">
        <Link id="home-link-contact" to={"/"}>
          <h1>Home</h1>
        </Link>
        <div id="link-container">
          <div id="contact-wrapper">
            <h1>Check Me Out!</h1>
            <div id="icon-container">
              <Link id="home-link" to={"/ContactForm"}>
                <img className="buttons" src={email} id="email" alt="email" />
              </Link>
              <a href="https://www.linkedin.com/in/gjcritchlow32176/">
                <img
                  className="buttons"
                  src={linkedin}
                  id="linkedin"
                  alt="email"
                />
              </a>
              <a href="https://github.com/gjcritchlow21">
                <img className="buttons" src={github} id="github" alt="email" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
