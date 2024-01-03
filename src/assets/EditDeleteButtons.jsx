// EditDeleteButtons.js
import React from 'react';

const EditDeleteButtons = ({ onEdit, onDelete, card }) => {
  return (
    <div className="actions">
      <button onClick={() => onEdit(card)}>Edit</button>
      <button onClick={() => onDelete(card)}>Delete</button>
    </div>
  );
};

export default EditDeleteButtons;
