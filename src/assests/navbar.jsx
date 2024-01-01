import './App.css';
import React from 'react';

function navbar() {
  return (
    <div className="container">
      <div className="navbar">
        <div className="homePage">
          <Link to="/">Home Page</Link>
        </div>
        <div className="flashcard-app">
          <Link to="/flashcard">Flashcard app</Link>
        </div>
        <div className="contact">
          <Link to="/contact">Contact Me</Link>
        </div>
      </div>
    </div>

  );
};

export default navbar;