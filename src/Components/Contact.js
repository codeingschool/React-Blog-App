import React from "react";
import Navbar from "./Navbar";
import Footer from './Footer';
import background from "./contact-bg.jpg";
import Form from "./Form";


function Contact(){
    return(
        <div>
        <Navbar />


        <header className="masthead" style={{backgroundImage: "url(" + background + ")"}}>
    <div className="overlay"></div>
    <div className="container">
      <div className="row">
        <div className="col-lg-8 col-md-10 mx-auto">
          <div className="page-heading">
            <h1>Contact Me</h1>
            <span className="subheading">Have questions? I have answers.</span>
          </div>
        </div>
      </div>
    </div>
  </header>


     <Form />   
  <Footer />
  </div>
    )
}

export default Contact;