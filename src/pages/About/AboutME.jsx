import "./AboutMeStyles.css"
import React, {Component, Fragment} from "react";
import boostrapLogo from "../../asessts/skillSetLogos/boostrap_logo-removebg-preview.png"
import cssLogo from "../../asessts/skillSetLogos/css_logo-removebg-preview.png"
import expressLogo from "../../asessts/skillSetLogos/expressjs_logo-removebg-preview.png"
import figmaLogo from "../../asessts/skillSetLogos/figma_logo-removebg-preview.png"
import gitLogo from "../../asessts/skillSetLogos/git_logo.png"
import gitHubLogo from "../../asessts/skillSetLogos/github_logo-removebg-preview.png"
import htmlLogo from "../../asessts/skillSetLogos/html_-removebg-preview.png"
import intelligLogo from "../../asessts/skillSetLogos/intelij_logo-removebg-preview.png"
import javaLogo from "../../asessts/skillSetLogos/java-logo-removebg-preview.png"
import javaScriptLogo from "../../asessts/skillSetLogos/javaScript_logo-removebg-preview.png"
import metirialUiLogo from "../../asessts/skillSetLogos/metiralUI_logo-removebg-preview.png"
import mongoDbLogo from "../../asessts/skillSetLogos/mongodb_logo-removebg-preview.png"
import mysQlLogo from "../../asessts/skillSetLogos/mySql_logo-removebg-preview.png"
import nodeJsLogo from "../../asessts/skillSetLogos/nodeJs_logo-removebg-preview.png"
import npmLogo from "../../asessts/skillSetLogos/npm_logo.png"
import postManLogo from "../../asessts/skillSetLogos/postMan_logo-removebg-preview.png"
import reactLogo from "../../asessts/skillSetLogos/react_logo-removebg-preview.png"
import springLogo from "../../asessts/skillSetLogos/spring_logo-removebg-preview.png"
import springBootLogo from "../../asessts/skillSetLogos/springboot_logo-removebg-preview.png"
import vsCodeLogo from "../../asessts/skillSetLogos/vsCode_logo-removebg-preview.png"
import Aos from "aos"
import "aos/dist/aos.css"

class AboutME extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <section id='aboutMe' className="aboutMe">
                    <div data-aos="zoom-in" className='headingContainer'>
                        <h2><span>About</span> Me</h2>
                    </div>
                    <div className="d-flex flex-column flex-xl-row flex-lg-row flex-xxl-row flex-sm-column justify-content-center align-items-center mb-5">
                        <div data-aos="zoom-in" className="aboutMeContents px-md-5 p-3">
                            <h3><span> name : </span> Charith Wishvajith</h3>
                            <h3><span> age : </span> 23 </h3>
                            <h3><span> mail Address : </span> charithrullz993@gmail.com </h3>
                            <h3><span> Address : </span> No:321/3,Asgiriya,Gampaha,Sri Lanka </h3>
                            <h3><span> Country : </span> Sri Lanaka </h3>
                            <h3><span> working as a : </span> software Developer </h3>
                            <a href="#">
                                <button className="btn_shadow"> Download CV <i className="bi bi-download"></i>
                                </button>
                            </a>
                        </div>
                        <div data-aos="zoom-in" className="aboutMeContents p-3">
                            <div className="aboutMeCardContainer">
                                <div className="cardInfo">
                                    <span>1+</span>
                                    <h3>years of experience</h3>
                                </div>
                                <div className="cardInfo">
                                    <span>15+</span>
                                    <h3>projects completed</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="d-flex flex-xl-row mb-3 px-sm-5 px-md-4">
                        <div data-aos="zoom-in" className="d-flex flex-wrap gap-3 gap-md-4 p-3">
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={boostrapLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Boostrap</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={cssLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>CSS</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={expressLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Express JS</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={figmaLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Figma</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={gitLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Git</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={gitHubLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>GitHub</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={htmlLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>HTML</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={javaScriptLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>JavaScript</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={javaLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Java</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={metirialUiLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Metirial Ui</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={mongoDbLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>MongoDB</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={mysQlLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>MySql</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={nodeJsLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>NodeJs</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={npmLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Npm</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={postManLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Post Man</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={reactLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>React</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={springLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Spring</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={springBootLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>SpringBoot</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={vsCodeLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Vs Code</p>
                                </div>
                            </div>
                            <div className="tecCard">
                                <div className="skill_logo">
                                    <img src={intelligLogo} alt=""/>
                                </div>
                                <div className="skill_name">
                                    <p style={{marginBottom:'0'}}>Intellij</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default AboutME
