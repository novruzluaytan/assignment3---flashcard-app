// FlashcardList.js
import React from 'react';
import Flashcard from '../assets/Flashcard.jsx';
import '../styles/flashcard.css';

const FlashcardList = ({ flashcards, onEdit, onDelete }) => {
  return (
    <div className="flashcards-container">
      {flashcards.map((card, index) => (
        <Flashcard key={index} card={card} onEdit={onEdit} onDelete={onDelete} />
      ))}
    </div>
  );
};

export default FlashcardList;
