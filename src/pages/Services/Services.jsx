import "./ServicesStyles.css"
import React, {Component, Fragment} from "react";
import dextopImage from "../../asessts/servicesImages/dextopImg.jpg"
import mobileImage from "../../asessts/servicesImages/mobileImg.jpg"
import webImage from "../../asessts/servicesImages/webImg.jpg"

class Services extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <Fragment>
                <section id='services' className="service">
                    <div data-aos="zoom-in" className='headingContainer'>
                        <h2><span>Services</span> on</h2>
                    </div>
                    <div
                        className="d-flex flex-column flex-xl-row flex-lg-row flex-xxl-row flex-sm-column justify-content-center align-items-center gap-5 mb-5 mt-3">
                        <div data-aos="zoom-in" className="serviceCard flex-column flex-sm-column flex-xl-column p-3">
                            <div className="serviceImage mb-3">
                                <img src={dextopImage} alt=""/>
                            </div>
                            <h3><span>Standalone</span> Projects</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eligendi iste
                                magni minus quia saepe sunt tempore? Amet at consequuntur dignissimos earum esse maxime
                                nesciunt, quis recusandae similique temporibus vero?</p>
                        </div>
                        <div data-aos="zoom-in" className="serviceCard flex-column flex-sm-column flex-xl-column p-3">
                            <div className="serviceImage mb-3">
                                <img src={mobileImage} alt=""/>
                            </div>
                            <h3><span>Mobile</span> Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eligendi iste
                                magni minus quia saepe sunt tempore? Amet at consequuntur dignissimos earum esse maxime
                                nesciunt, quis recusandae similique temporibus vero?</p>
                        </div>
                        <div data-aos="zoom-in" className="serviceCard flex-column flex-sm-column flex-xl-column p-3">
                            <div className="serviceImage mb-3">
                                <img src={webImage} alt=""/>
                            </div>
                            <h3><span>Web</span> Development</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium, eligendi iste
                                magni minus quia saepe sunt tempore? Amet at consequuntur dignissimos earum esse maxime
                                nesciunt, quis recusandae similique temporibus vero?</p>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Services
