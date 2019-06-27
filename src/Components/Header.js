import React from 'react';
import background from "./home-bg.jpg";
//import Background from './img/home-bg.jpg';

// var sectionStyle = {
    
//     backgroundImage: "url(" + { Background } + ")"
//   };
  
 

function Header(){
    return(
        <header className="masthead" style={{backgroundImage: "url(" + background + ")"}}>
            
            <div className="overlay"></div>
            <div className="container">
            <div className="row">
                <div className="col-lg-8 col-md-10 mx-auto">
                <div className="site-heading">
                    <h1>React Blog</h1>
                    <span className="subheading">A Blog which is make with React Js</span>
                </div>
                </div>
            </div>
            </div>
        </header>
    )
}

export default Header;