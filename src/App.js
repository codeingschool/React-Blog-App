import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import Home from "./Components/Home";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Post from "./Components/Post";



function App() {
  return (
    <BrowserRouter>
      <div>
        
        <Route exact path="/" component={Home}/>
        <Route path="/About" component={About}/>
        <Route path="/Contact" component={Contact}/>
        <Route path="/Post" component={Post}/>
      </div>
    </BrowserRouter>
  );
}

export default App;
