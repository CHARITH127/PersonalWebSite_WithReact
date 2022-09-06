import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import React, {Component, Fragment} from "react";
import "./NavBarStyles.css"
import {Link} from "react-scroll"

class NavBar extends Component{
    constructor(props) {
        super(props);

        this.state ={
            sectionsList:[]
        }
    }

    sectionSelection =(e)=>{
        const home = document.getElementById('home');
        const aboutMe = document.getElementById('aboutMe');
        const services = document.getElementById('services');
        const projects = document.getElementById('projects');
        const certificates = document.getElementById('certificates');
        const contact = document.getElementById('contact');

        this.setState({sectionsList:[home,aboutMe,services,projects,certificates,contact]})

        this.state.sectionsList.map((sec) => (
            sec.classList.remove("active")

        ))
        e.currentTarget.classList.add("active")
    }

    render() {
        return(
            <Fragment>
                <nav className="navbar navbar-expand-lg bg-light mb-1 mt-1 px-5 fixed-top">
                    <div className="container-fluid">
                        <div className="logoContainer mb-1 mt-1 p-3">
                            <a className="logo navbar-brand" href="#">Wishvajith</a>
                        </div>
                        <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                                data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false"
                                aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse justify-content-end " id="navbarNav">
                            <ul className="navbar-nav">
                                <li className="nav-item px-1 ">
                                    <Link className="nav-link active sectionItems" aria-current="page" to='home'>Home</Link>
                                </li>
                                <li className="nav-item px-1 ">
                                    <Link className="nav-link sectionItems" onClick={this.sectionSelection} to='aboutMe' duratoin={1000}>About</Link>
                                </li>
                                <li className="nav-item px-1 ">
                                    <Link className="nav-link sectionItems"  onClick={this.sectionSelection} to='services' duratoin={1000}>Services</Link>
                                </li>
                                <li className="nav-item px-1 ">
                                    <Link className="nav-link sectionItems" onClick={this.sectionSelection} to='projects' duratoin={1000}>Projects</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link className="nav-link sectionItems" onClick={this.sectionSelection} to='certificates' duratoin={1000}>Certificates</Link>
                                </li>
                                <li className="nav-item px-1">
                                    <Link className="nav-link sectionItems" onClick={this.sectionSelection} to='contact' duratoin={1000}>Contact</Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </Fragment>
        )
    }
}

export default NavBar
