import "./ContactStyles.css"
import React, {Component, Fragment} from "react";
import Typewriter from "typewriter-effect";
import myImage from "../../asessts/profileImages/myImage.png";

class Contact extends Component{
    constructor(props) {
        super(props);
    }

    render() {
        return(
            <Fragment>
                <section id="contact" className='contact'>
                    <div data-aos="zoom-in" className='headingContainer'>
                        <h2><span>Contact</span> Me</h2>
                    </div>
                    <div className="d-flex flex-column flex-xl-row flex-lg-row flex-xxl-row flex-sm-column justify-content-center align-items-center mb-3">
                        <div data-aos="zoom-in" className="contactContent p-3">
                            <h3 className="title">Contact information</h3>
                            <div className="info">
                                <h3><i className="bi bi-envelope-plus-fill"></i> charithrullz993@gmail.com</h3>
                                <h3><a href="https://t.me/Wishvajith993"><i className="bi bi-telephone-fill"></i> Telegram</a></h3>
                                <h3><i className="bi bi-geo-alt-fill"></i> No 321/3 Asgiriya , Gampaha ,Sri Lanka</h3>
                            </div>
                        </div>
                        <div className="contactContent p-3">
                            <div data-aos="zoom-in" className="d-flex flex-column flex-xl-column flex-lg-column flex-xxl-column flex-sm-column justify-content-center align-items-center mb-3">
                                <form className="contactForm d-flex flex-column flex-xl-column gap-5" action="">
                                    <input type="text" placeholder="name" className="box"/>
                                    <input type="email" placeholder="email" className="box"/>
                                    <input type="text" placeholder="project" className="box"/>
                                    <textarea name="" id="" cols="30" rows="10" className="box message" placeholder="message"></textarea>
                                    <button type="submit" className="contactBtn_shadow">send <i className="bi bi-send-fill"></i>
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Contact
