//imports
import React from "react";
import { Link } from "react-router-dom";
import "./resume.css";

export default function Resume() {
  return (
    <div id="resume-container">
      <div id="media-resume">
        <Link id="home-link-resume" to={"/"}>
          <h1>Home</h1>
        </Link>
        <div id="resume-wrapper">
          <div id="resCont">
            <h1>My Experiences</h1>
            <div id="resume-contents">
              <div id="work-ex">
                <h3>Work Experience</h3>
                <ul>
                  <li>
                    Teaching Assistant - Burlington Code Academy - June, 2020 -
                    Present
                  </li>
                  <li>
                    Tutor - Burlington Code Academy - April, 2020 - Present
                  </li>
                </ul>
              </div>
              <div id="school">
                <h3>Educational Experience</h3>
                <ul>
                  <li>
                    Certification of Software Development -{" "}
                    <a id="bca-link" href="https://burlingtoncodeacademy.com/">
                      Burlington Code Academy
                    </a>{" "}
                    - April, 2020
                  </li>
                </ul>
              </div>
            </div>
            <h2>
              Download my Resume{" "}
              <a
                id="resume-link"
                href="https://docs.google.com/document/d/e/2PACX-1vTMsTJSF8ikvbgkMai3aLqnhHGTPxeAIPGDyFVn-hN3uIkKFZf4-5wy56ob8-JfXw/pub"
                download="https://docs.google.com/document/d/e/2PACX-1vTMsTJSF8ikvbgkMai3aLqnhHGTPxeAIPGDyFVn-hN3uIkKFZf4-5wy56ob8-JfXw/pub"
              >
                here!
              </a>
            </h2>
          </div>
        </div>
      </div>
    </div>
  );
}
