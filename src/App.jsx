import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navigation from './components/Navigation';
import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';

const App = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <Routes>
          <Route path="/" element={<Home/>}  /> 
          <Route path="/home" element={<Home/>}  /> 
          <Route path="/about" element={<About/>} />
          <Route path="/contact" element={<Contact/>} />
          
           </Routes>
      </div>
    </Router>
  );
};

export default App;
