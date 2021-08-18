//imports
import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";


export default function Projects() {
  return (
    <div id="page-container">
      <div id="media-projects">
        <Link id="home-link-projects" to={"/"}>
          <h1>Home</h1>
        </Link>
        <div id="project-wrapper">
          <div id="projects-container">
            <h1>My Coding Projects</h1>
            <div id="projects">
              <div className="classProjects">
                <div className="projectImages">
                  <a href="https://github.com/gjcritchlow21/guess-the-number-game">
                    <img id="image" src="https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313027/guessCode_dj7joo.png" alt="image1" />
                    <img id="image" src="https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313023/guessCMDR_ykz792.png" alt="image2" />
                  </a>
                </div>
                <h3>Guess the Number</h3>
              </div>

              <div className="classProjects">
                <div className="projectImages">
                  <a href="https://github.com/gjcritchlow21/tic-tac-toe-gjcritchlow21-1">
                    <img id="image" src="https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313030/ticTacToe_cn3txs.png" alt="image3" />
                    <img id="image" src="https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313029/ticCode_fz42wk.png" alt="image4" />
                  </a>
                </div>
                <h3>Tic-Tac-Toe</h3>
              </div>
              <div className="classProjects">
                <div className="projectImages">
                  <a href="https://github.com/gjcritchlow21/zorkington-DevonSmith91">
                    <img id="image" src="https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313031/zorkCode_w1hmyo.png" alt="image5" />
                  </a>
                </div>
                <h3>Zorkington</h3>
              </div>
              <div className="classProjects">
                <div className="projectImages">
                  <a href="https://github.com/gjcritchlow21/RPSgame">
                    <img id="image" src="https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313021/RPS_uf7rak.png" alt="image4" />
                    <img id="image" src="https://res.cloudinary.com/dpnhiv4hn/image/upload/v1629313027/RPSCode_ocryob.png" alt="image3" />
                  </a>
                </div>
                <h3>Rock-Paper-Scissors</h3>
              </div>
              <h2>
                Checkout more of my projects on
                <a id="gitLink" href="https://github.com/gjcritchlow21">
                  {" "}
                  GitHub
                </a>
              </h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
