import './App.css';
import React from 'react';

function navbar() {
  return (
    <div className="navbar">
      <div className='pages'>
        <NavLink to='/home'>Home</NavLink>
        <NavLink to='/cards'>Flashcard app</NavLink>
        <NavLink to='/contact'>Contact Me</NavLink>
      </div>

    </div>

  );
};

export default navbar;