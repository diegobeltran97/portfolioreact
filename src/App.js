import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from "./Components/layout/Header";
import HomePage from "./Components/layout/HomePage";
import Uconstruction from "./Components/pages/Uconstruction"
import MAbout from "./Components/pages/MAbout";
import Projectpage from "./Components/pages/Projectpage";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />

        <Route exact path="/" component={HomePage} />
        <Route path="/about" component={MAbout} />
        <Route path="/blog" component={Uconstruction} />
        <Route path="/projects" component={Projectpage} />
        <Route path="/contact" component={Uconstruction} />
        
      
      </div>
    </Router>
  );
}

export default App;
