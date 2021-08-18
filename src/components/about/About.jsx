//imports
import React from "react";
import { Link } from "react-router-dom";
import "./about.css";

//image imports
import aboutPic from "https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313021/percyParade_xlpsjj.jpg";
import aboutPic2 from "https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313034/happyPercy_ywhtgv.jpg";

export default function About() {
  return (
    <div id="about-container">
      <div id="media-container">
        <Link id="home-link-about" to={"/"}>
          <h1>Home</h1>
        </Link>
        <div id="about-wrapper">
          <div id="about">
            <h1>About Me</h1>
            <div id="aboutMe">
              <div id="aboutMe-container">
                <img id="aboutPic" src={aboutPic} alt="aboutPic" />
                <p>
                  Full Stack Web Developer navigating the myriad of coding
                  languages. Currently a teaching assistant and tutor with
                  Burlington Code Academy, helping students learn concepts and
                  program web applications. A strong foundational knowledge of
                  JavaScript and React. Further developing my craft in the
                  continously changing landscape of programming.
                </p>
              </div>
              <div id="aboutMe-container-two">
                <p>
                  Gaming aficianado, reluctant marathon runner, Dad to two
                  furballs, Batman super-fan, and new homeowner obsessed with
                  his lawn.
                </p>
                <img id="aboutPic" src={aboutPic2} alt="aboutPic2" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
