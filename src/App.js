import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './styles/App.css';
import React from'react';
import './assests/navbar.jsx'
import Home from './pages/homePage.jsx'
import Flashcard from './pages/flashCard.jsx'
import Contact from './pages/contact.jsx'


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/flashcard" element={<Flashcard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>

  );
};

export default App;