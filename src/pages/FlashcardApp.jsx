import React, { useState, useEffect } from 'react';
import Navbar from '../assets/Navbar.jsx'
import '../styles/flashcard.css'

const FlashcardApp = () => {
  const [flashcards, setFlashcards] = useState([]);
  const [originalFlashcards, setOriginalFlashcards] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const [flashcardsPerPage] = useState(6);
  const [searchTerm, setSearchTerm] = useState('');
  const [showBackButton, setShowBackButton] = useState(false);
  const [hoveredCardId, setHoveredCardId] = useState(null);

  useEffect(() => {
    fetchFlashcards();
  }, []);

  const fetchFlashcards = async () => {
    try {
      const response = await fetch('http://localhost:3001/flashcards');
      const data = await response.json();
      setFlashcards(data);  // Assuming the data has a 'flashcards' property
      setOriginalFlashcards(data); // Update this accordingly if needed
    } catch (error) {
      console.error('Error fetching flashcards:', error);
    }
  };
  const handleEdit = async (card) => {
    const updatedQuestion = prompt('Edit the question:', card.question);
    const updatedAnswer = prompt('Edit the answer:', card.answer);

    if (updatedQuestion !== null && updatedAnswer !== null) {
      try {
        const response = await fetch(`http://localhost:3001/flashcards/${card.id}`, {
          method: 'PUT',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ question: updatedQuestion, answer: updatedAnswer }),
        });

        if (response.ok) {
          const updatedFlashcards = flashcards.map((c) =>
            c.id === card.id ? { ...c, question: updatedQuestion, answer: updatedAnswer } : c
          );

          setFlashcards(updatedFlashcards);
          setOriginalFlashcards(updatedFlashcards);
        } else {
          console.error('Failed to update flashcard on the server.');
        }
      } catch (error) {
        console.error('Error updating flashcard:', error);
      }
    }
  };

  const handleDelete = async (card) => {
    const confirmDelete = window.confirm('Are you sure you want to delete this flashcard?');

    if (confirmDelete) {
      try {
        const response = await fetch(`http://localhost:3001/flashcards/${card.id}`, {
          method: 'DELETE',
        });

        if (response.ok) {
          const updatedFlashcards = flashcards.filter((c) => c.id !== card.id);

          setFlashcards(updatedFlashcards);
          setOriginalFlashcards(updatedFlashcards);
        } else {
          console.error('Failed to delete flashcard on the server.');
        }
      } catch (error) {
        console.error('Error deleting flashcard:', error);
      }
    }
  };

  const handleAddFlashcard = async () => {
    const newQuestion = prompt('Enter the question:');
    const newAnswer = prompt('Enter the answer:');
  
    if (newQuestion !== null && newAnswer !== null) {
      const newFlashcard = {
        question: newQuestion,
        answer: newAnswer,
        lastModified: new Date().toLocaleString('en-US', { timeZone: 'Asia/Baku' }),
      };
  
      try {
        const response = await fetch('http://localhost:3001/flashcards', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newFlashcard),
        });
  
        if (response.ok) {
          // Fetch the updated flashcards from the server
          fetchFlashcards();
        } else {
          console.error('Failed to add flashcard on the server.');
        }
      } catch (error) {
        console.error('Error adding flashcard:', error);
      }
    }
  };

  const handleMouseEnter = (card) => {
    setHoveredCardId(card.id);
  };

  const handleMouseLeave = () => {
    setHoveredCardId(null);
  };

  const displayFlashcards = () => {
    const cardsPerPage = 6;
    const startIndex = (currentPage - 1) * cardsPerPage;
  
    const sortedFlashcards = flashcards
      .slice() // Create a shallow copy to avoid modifying the original array
      .sort((a, b) => new Date(b.lastModified) - new Date(a.lastModified));
  
    return sortedFlashcards.map((card, index) => {
      if (index >= startIndex && index < startIndex + cardsPerPage) {
        return (
          <div
            key={card.id}
            className={`flashcard ${card.flipped ? 'flipped' : ''}`}
            onClick={() => flipCard(card)}
            onMouseEnter={() => handleMouseEnter(card)}
            onMouseLeave={handleMouseLeave}
          >
            {card.flipped ? card.answer : card.question}
            {hoveredCardId === card.id && (
              <div className="card-buttons">
                <button onClick={() => handleEdit(card)} className='btn'>Edit</button>
                <button onClick={() => handleDelete(card)} className='btn'>Delete</button>
              </div>
            )}
            {card.lastModified && (
              <div className="last-modified">{`Last Modified: ${card.lastModified}`}</div>
            )}
          </div>
        );
      }
      return null; // Don't render if not in the current page range
    });
  };
  

  const flipCard = (card) => {
    const updatedFlashcards = flashcards.map((c) =>
      c.id === card.id ? { ...c, flipped: !c.flipped } : c
    );
    setFlashcards(updatedFlashcards);
  };


  const displayPagination = () => {
    const totalPages = Math.ceil(flashcards.length / flashcardsPerPage);
    const paginationButtons = [];

    for (let i = 1; i <= totalPages; i++) {
      paginationButtons.push(
        <button
          key={i}
          className={i === currentPage ? 'active' : ''}
          onClick={() => setCurrentPage(i)}
        >
          {i}
        </button>
      );
    }

    return paginationButtons;
  };

  const searchCards = () => {
    const searchTermLowerCase = searchTerm.toLowerCase().trim();

    if (searchTermLowerCase === '') {
      // If the search term is empty, show all flashcards
      setFlashcards(originalFlashcards);
    } else {
      // Filter flashcards based on the search term
      const searchResults = originalFlashcards.filter(
        (card) =>
          card.question.toLowerCase().includes(searchTermLowerCase) ||
          card.answer.toLowerCase().includes(searchTermLowerCase)
      );

      setFlashcards(searchResults);
      setShowBackButton(true);
      setCurrentPage(1); // Reset to the first page when searching
    }
  };

  const goBack = () => {
    setFlashcards(originalFlashcards);
    setShowBackButton(false); // Hide the back button
    setSearchTerm(''); // Clear the search term
  };

  return (
    <>
      <Navbar />
      <div className="search-container">
          <input
            type="text"
            placeholder="Search"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className='input-search'
          />
          <button onClick={searchCards} className='search-btn'>Search</button>
          {showBackButton && <button onClick={goBack} className='back-btn'>Back</button>}
        </div>
      <div className="app">
        <div className="flashcard-container">{displayFlashcards()}</div>
        <div className="pagination-container">{displayPagination()}</div>
        
        <button className="add-flashcard-button" onClick={handleAddFlashcard}>
          +
        </button>
      </div>
    </>
  );
}

export default FlashcardApp;