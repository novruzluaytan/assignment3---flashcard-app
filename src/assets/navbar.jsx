import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function navbar() {
  return (
    <div className="navbar">
      <div className='pages'>
        <NavLink to='/homePage'>Home</NavLink>
        <NavLink to='/flashCard'>Flashcard app</NavLink>
        <NavLink to='/contact'>Contact Me</NavLink>
      </div>
    </div>
  );
};

export default navbar;