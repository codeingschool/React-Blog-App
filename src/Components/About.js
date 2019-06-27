import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
import background from "./about-bg.jpg";

function About(){
    return(
        <div>
            <Navbar />
            <header className="masthead" style={{backgroundImage: "url(" + background + ")"}}>
                <div className="overlay"></div>
                <div className="container">
                <div className="row">
                    <div className="col-lg-8 col-md-10 mx-auto">
                    <div className="page-heading">
                        <h1>About Me</h1>
                        <span className="subheading">This is what I do.</span>
                    </div>
                    </div>
                </div>
                </div>
            </header>

  
        <div className="container">
            <div className="row">
            <div className="col-lg-8 col-md-10 mx-auto">
                <p>Hi, my name is Subham Roy. Now I study B-tech in Computer Science & Engineering at Regent Education & Research Foundation. I am from Kolkata, India. I love coding, so I create this blog to teach the other person who new in coding. I believe the if I share my knowledge, my knowledge will increases.</p>
                <p>I teach here C, C++, JAVA, PHP, PYTHON. In the future, many languages will be added to this list. My main motto is, make code easy for beginners and non-tech persons.I hope that I will teach you well!</p>
                
            </div>
            </div>
        </div>
    <Footer />
</div>
    )
}

export default About