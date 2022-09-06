import './App.css';
import React, {Fragment} from "react";
import NavBar from "../pages/NavBar/NavBar";
import Home from "../pages/Home/Home";
import AboutME from "../pages/About/AboutME";
import Services from "../pages/Services/Services";
import Projects from "../pages/Projects/Projects";
import Certificates from "../pages/Certificates/Certificates";
import Contact from "../pages/Contact/Contact";

function App() {
  return (
    <Fragment>
      <NavBar/>
      <Home/>
      <AboutME/>
      <Services/>
      <Projects/>
      <Certificates/>
      <Contact/>
    </Fragment>
  );
}

export default App;
