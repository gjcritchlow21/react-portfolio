//imports
import React from "react";
import "./App.css";
import { Switch, Route } from "react-router-dom";

//component import
import Home from "./components/home/Home";
import About from "./components/about/About";
import Projects from "./components/projects/Projects";
import Resume from "./components/resume/Resume";
import Contact from "./components/contact/Contact";
import ContactForm from "./components/contact/ContactFrom"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path={"/"} component={Home} />
        <Route path={"/about"} component={About} />
        <Route path={"/projects"} component={Projects} />
        <Route path={"/resume"} component={Resume} />
        <Route path={"/contact"} component={Contact} />
        <Route path={"/ContactForm"} component={ContactForm} />
      </Switch>
    </div>
  );
}

export default App;
