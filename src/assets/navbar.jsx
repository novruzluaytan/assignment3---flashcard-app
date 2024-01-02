import '../styles/navbar.css';
import { NavLink } from 'react-router-dom';
import React from 'react';

function Navbar() {
  return (
    <div className="navbar">
      <div className='pages'>
        <NavLink to='/homepage' className="page">Home</NavLink>
        <NavLink to='/flashCard' className="page">Flashcard app</NavLink>
        <NavLink to='/contact' className="page">Contact Me</NavLink>
      </div>
    </div>
  );
};

export default Navbar;