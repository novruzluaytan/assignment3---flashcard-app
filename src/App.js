import './App.css';
import React from'react';

function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/flashcard" element={<Flashcard />} />
        </Routes>
      </Router>
    </div>

  );
};

export default App;
