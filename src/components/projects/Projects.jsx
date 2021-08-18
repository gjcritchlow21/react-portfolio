//imports
import React from "react";
import { Link } from "react-router-dom";
import "./projects.css";

//image imports
import guessCode from "../../images/guessCode.PNG";
import guessCMDR from "../../images/guessCMDR.PNG";
import zorkCode from "../../images/zorkCode.PNG";
import ticTacToe from "../../images/ticTacToe.PNG";
import ticCode from "../../images/ticCode.PNG";
import RPS from "../../images/RPS.PNG";
import RPSCode from "../../images/RPSCode.PNG";

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
                    <img id="image" src={guessCode} alt="image1" />
                    <img id="image" src={guessCMDR} alt="image2" />
                  </a>
                </div>
                <h3>Guess the Number</h3>
              </div>

              <div className="classProjects">
                <div className="projectImages">
                  <a href="https://github.com/gjcritchlow21/tic-tac-toe-gjcritchlow21-1">
                    <img id="image" src={ticTacToe} alt="image3" />
                    <img id="image" src={ticCode} alt="image4" />
                  </a>
                </div>
                <h3>Tic-Tac-Toe</h3>
              </div>
              <div className="classProjects">
                <div className="projectImages">
                  <a href="https://github.com/gjcritchlow21/zorkington-DevonSmith91">
                    <img id="image" src={zorkCode} alt="image5" />
                  </a>
                </div>
                <h3>Zorkington</h3>
              </div>
              <div className="classProjects">
                <div className="projectImages">
                  <a href="https://github.com/gjcritchlow21/RPSgame">
                    <img id="image" src={RPS} alt="image4" />
                    <img id="image" src={RPSCode} alt="image3" />
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
