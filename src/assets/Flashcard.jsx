// Flashcard.js
import React, { useState } from 'react';
import EditDeleteButtons from '../assets/EditDeleteButtons';
import '../styles/flashcard.css';

const Flashcard = ({ card, onEdit, onDelete }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isEditing, setIsEditing] = useState(false);
  const [editedContent, setEditedContent] = useState('');

  return (
    <div
      className="flashcard"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
      onClick={() => {
        if (isEditing) {
          onEdit({ ...card, content: editedContent });
          setIsEditing(false);
        }
      }}
    >
      {isEditing ? (
        <input
          type="text"
          value={editedContent}
          onChange={(e) => setEditedContent(e.target.value)}
        />
      ) : (
        <>
          <p>{card.content}</p>
          <p>Status: {card.status}</p>
          <p>Last Modified: {card.date}</p>
        </>
      )}
      {isHovered && <EditDeleteButtons onEdit={() => setIsEditing(true)} onDelete={onDelete} card={card} />}
    </div>
  );
};

export default Flashcard;

