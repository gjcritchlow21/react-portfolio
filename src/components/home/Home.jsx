import React from "react";
import "./home.css";
import { Link } from "react-router-dom";


export default function Home() {
  return (
    <div id="home-container">
      <div id="info-container">
        <img id="profPic" src="https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313026/GJHeadshot_pfvtq2.jpg" alt="profile-pic" />
        <div id="prof-info">
          <div id="name">
            <h1>G.J. Critchlow</h1>
            <h3>Web Developer | Human | Gamer | Vermonter</h3><div id="line" />
          </div>
          <div id="link-container">
            <Link className="home-links" to={"/about"}>
              About Me
            </Link>
            <Link className="home-links" to={"/projects"}>
              Projects
            </Link>
            <Link className="home-links" to={"/resume"}>
              Resume
            </Link>
            <Link className="home-links" to={"/contact"}>
              Contact Me
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
