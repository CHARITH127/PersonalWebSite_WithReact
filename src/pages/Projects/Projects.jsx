import "./ProjectsStyles.css"
import React, {Component, Fragment} from "react";
import clinicSystemImage from "../../asessts/projectsSS/clinicProject.png"
import studentMagenmentSystemImage from "../../asessts/projectsSS/StudentManagmentSystem.png"
import javaEEPOSSystemImage from "../../asessts/projectsSS/javaEEPOS.png"

class Projects extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <section id='projects' className="projects">
                    <div data-aos="zoom-in" className='headingContainer'>
                        <h2><span>Projects</span> Done</h2>
                    </div>
                    <div
                        className="d-flex flex-column flex-md-column flex-xl-row flex-lg-row flex-xxl-row flex-sm-column justify-content-center align-items-center gap-3 gap-sm-3 gap-md-4 mb-5 mt-3">
                        <div data-aos="zoom-in" className="projectsCard flex-column flex-sm-column flex-md-column flex-xl-column p-3">
                            <div className="projectsImage mb-3">
                                <img src={clinicSystemImage} alt=""/>
                            </div>
                            <h3><span>Clinic</span> System</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eligendi iste
                                magni minus quia saepe sunt tempore? Amet at consequuntur dignissimos earum esse maxime
                                nesciunt, quis recusandae similique temporibus vero?</p>
                            <div className="projectGitHubButtonContainer">
                                <a href="https://github.com/CHARITH127/Cilnic_System">
                                    <button className="projectsBtn_shadow"><i className="bi bi-github"></i></button>
                                </a>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="projectsCard flex-column flex-sm-column flex-md-column flex-xl-column p-3">
                            <div className="projectsImage mb-3">
                                <img src={studentMagenmentSystemImage} alt=""/>
                            </div>
                            <h3><span>Student Management</span> System</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eligendi iste
                                magni minus quia saepe sunt tempore? Amet at consequuntur dignissimos earum esse maxime
                                nesciunt, quis recusandae similique temporibus vero?</p>
                            <div className="projectGitHubButtonContainer">
                                <a href="https://github.com/CHARITH127/Student_Management_System">
                                    <button className="projectsBtn_shadow"><i className="bi bi-github"></i></button>
                                </a>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="projectsCard flex-column flex-sm-column flex-md-column flex-xl-column p-3">
                            <div className="projectsImage mb-3">
                                <img src={javaEEPOSSystemImage} alt=""/>
                            </div>
                            <h3><span>JavaEE POS</span> System</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eligendi iste
                                magni minus quia saepe sunt tempore? Amet at consequuntur dignissimos earum esse maxime
                                nesciunt, quis recusandae similique temporibus vero?</p>
                            <div className="projectGitHubButtonContainer">
                                <a href="https://github.com/CHARITH127/JavaEE_POS">
                                    <button className="projectsBtn_shadow"><i className="bi bi-github"></i></button>
                                </a>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="d-flex flex-xl-row bt-4 justify-content-center align-items-center">
                        <a href="https://github.com/CHARITH127?tab=repositories">
                            <button className="projectsBtn_shadow">Show all projects <i className="bi bi-link-45deg"></i></button>
                        </a>
                    </div>
                </section>
            </Fragment>
        )
    }

}

export default Projects
