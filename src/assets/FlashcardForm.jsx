// FlashcardForm.js
import React, { useState } from 'react';

const FlashcardForm = ({ onSubmit }) => {
  const [content, setContent] = useState('');
  const [status, setStatus] = useState('Noted');

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit({ content, status });
    setContent('');
    setStatus('Noted');
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Content:
        <textarea value={content} onChange={(e) => setContent(e.target.value)} />
      </label>
      <label>
        Status:
        <select value={status} onChange={(e) => setStatus(e.target.value)}>
          <option value="Noted">Noted</option>
          <option value="Want to Learn">Want to Learn</option>
          <option value="Learned">Learned</option>
        </select>
      </label>
      <button type="submit">Add Card</button>
    </form>
  );
};

export default FlashcardForm;
