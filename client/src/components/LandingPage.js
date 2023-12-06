import React from "react";
import "./LandingPage.css";
import logo from './logo.png';
import Footer from './Footer'
import TopNav from './LandingTopNav'

const LandingPage = () => {
    return (
        <div className="landingpage">
            <div className="bigheader headercolor text-center">
               <div>
                <img src={logo} alt="logo" width="70px" align="center"></img>
                <h1>Driver's Crash Course</h1>
               </div> 
            </div>
            <TopNav/>
            <div className="roadbackground">
                
            </div>
            
            <div className="flex-container ">
                <div class="overlay-box">
                <h1 class="darkgreen"> Welcome to Driver's Crash Course! </h1>
                <p>
                {" "}
                Your number one stop to prevent a crash. Driver's crash course
                offers many resources to help you learn and excel your driving
                test! Choose from a diverse learning resources. Flashcards, Mock
                Exams, Practice Questions, and Videos are just a few of the things
                we offer!
                </p>
                <a
                href="./login"
                class="greenbutton"
                >
                {" "}
                <font size="3px" color="white">
                    {" "}
                    <b> Signup! </b>{" "}
                </font>
                </a>
                </div>
            </div>

            <Footer/>

        </div>
    );
};

export default LandingPage;
