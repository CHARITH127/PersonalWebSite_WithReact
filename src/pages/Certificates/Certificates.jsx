import "./CertificateStyles.css"
import React, {Component, Fragment} from "react";
import javaCertification from "../../asessts/certificationImages/javaCertification.png"
import htmlCertification from "../../asessts/certificationImages/htmlCertification.jpg"


class Certificates extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <section id='certificates' className="certificates">
                    <div data-aos="zoom-in" className='headingContainer'>
                        <h2><span>Certificates</span> achieve</h2>
                    </div>
                    <div className="d-flex flex-xl-row flex-lg-row flex-xxl-row flex-sm-column-reverse flex-wrap justify-content-center align-items-center gap-3 mb-5 mt-3">
                        <div data-aos="zoom-in" className="d-flex flex-wrap gap-3 p-3 mt-5">
                            <div className="certificationCard">
                                <div className="certificationImage">
                                    <img src={javaCertification} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="d-flex flex-wrap gap-3 p-3 mt-5">
                            <div className="certificationCard">
                                <div className="certificationImage">
                                    <img src={htmlCertification} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="d-flex flex-wrap gap-3 p-3 mt-5">
                            <div className="certificationCard">
                                <div className="certificationImage">
                                    <img src={javaCertification} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="d-flex flex-wrap gap-3 p-3 mt-5">
                            <div className="certificationCard">
                                <div className="certificationImage">
                                    <img src={javaCertification} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="d-flex flex-wrap gap-3 p-3 mt-5">
                            <div className="certificationCard">
                                <div className="certificationImage">
                                    <img src={javaCertification} alt=""/>
                                </div>
                            </div>
                        </div>
                        <div data-aos="zoom-in" className="d-flex flex-wrap gap-3 p-3 mt-5">
                            <div className="certificationCard">
                                <div className="certificationImage">
                                    <img src={javaCertification} alt=""/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div data-aos="zoom-in" className="d-flex flex-xl-row bt-4 justify-content-center align-items-center">
                        <a href="#aboutMe">
                            <button className="certificatesBtn_shadow">Show all certifications <i className="bi bi-link-45deg"></i></button>
                        </a>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Certificates
