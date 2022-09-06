import "./HomeStyle.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import React, {Component, Fragment} from "react";
import Typewriter from "typewriter-effect";
import myImage from "../../asessts/profileImages/myImage.png"
import Aos from "aos"
import "aos/dist/aos.css"

class Home extends Component{
    constructor(props) {
        super(props);
    }

    componentDidMount() {
        Aos.init({duration:900});
    }

    render() {
        return(
            <Fragment>
                <section id='home' className="home">
                    <div data-aos="zoom-in" className="d-flex flex-column-reverse flex-sm-column-reverse flex-xl-row flex-lg-row flex-xxl-row  justify-content-center align-items-center mb-3">
                        <div className="homeContents p-3">
                            <h3>Hi THERE !</h3>
                            <h1> I'M <span>Charith Wishvajith</span></h1>
                            <h2>a <span className="typedText">
                                <Typewriter
                                    options={{loop:true}}
                                    onInit={(typewriter)=>{
                                        typewriter
                                            .typeString("Web Developer..")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .typeString("UI/UX Engineer..")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .typeString("Software Developer..")
                                            .pauseFor(2000)
                                            .deleteAll()
                                            .start()
                                    }}
                                />
                            </span></h2>
                            <p>I have just over a year of experience as a junior Software Engineer
                                with Java and some other Technologies.In my short time there ,
                                I've already done some projects using various technologies ,
                                you can see those in here...
                            </p>
                            <div className="socialMediaLinks">
                                <div className='button_container'>
                                    <div><a href="https://www.linkedin.com/in/w-c-wishvajith-6011b1226/"><i className="icon bi bi-linkedin"></i></a></div>
                                </div>
                                <div className='button_container'>
                                    <div><a href="https://github.com/CHARITH127"><i className="icon bi bi-github"></i></a></div>
                                </div>
                                <div className='button_container'>
                                    <div><a href=""><i className="icon bi bi-twitter"></i></a></div>
                                </div>
                                <div className='button_container'>
                                    <div><a href="https://stackoverflow.com/users/14799167/charith-wishwejith"><i className="icon bi bi-stack-overflow"></i></a></div>
                                </div>
                            </div>
                            <a href="#aboutMe">
                                <button className="btn_shadow"> About Me <i className="bi bi-person"></i></button>
                            </a>
                        </div>
                        <div className="homeContents p-3">
                            <div className='imageContainer'>
                                <img src={myImage} alt=""/>
                            </div>
                        </div>
                    </div>
                </section>
            </Fragment>
        )
    }
}

export default Home
