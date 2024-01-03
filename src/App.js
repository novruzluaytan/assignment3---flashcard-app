import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
// import './styles/App.css';
import React from'react';
import Home from './pages/HomePage.jsx'
import Flashcard from './pages/FlashcardApp.jsx'
import Contact from './pages/Contact.jsx'
import Navbar from './assets/Navbar.jsx'


function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/homepage" element={<Home />} />
          <Route path="/flashCard" element={<Flashcard />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </Router>
    </div>

  );
};

export default App;