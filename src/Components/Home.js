import React from "react"
import Maincontent from "./Maincontent";
import Navbar from "./Navbar";
import Header from "./Header";
import Footer from "./Footer";

function Home(){
    return(
        <div>
            <Navbar />
            <Header/>
            <Maincontent />
            <Footer />
        </div>
    )
}

export default Home;