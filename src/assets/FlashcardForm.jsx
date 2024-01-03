// AddCardForm.jsx
import React, { useState } from 'react';

const AddCardForm = ({ onSave, onCancel, cardData }) => {
  const [question, setQuestion] = useState(cardData ? cardData.question : '');
  const [answer, setAnswer] = useState(cardData ? cardData.answer : '');
  const [status, setStatus] = useState(cardData ? cardData.status : '');

  const handleSave = () => {
    onSave({ question, answer, status });
  };

  return (
    <div className="popup-form">
      <label>Question:</label>
      <input type="text" value={question} onChange={(e) => setQuestion(e.target.value)} />

      <label>Answer:</label>
      <input type="text" value={answer} onChange={(e) => setAnswer(e.target.value)} />

      <label>Status:</label>
      <input type="text" value={status} onChange={(e) => setStatus(e.target.value)} />

      <button onClick={handleSave}>Save</button>
      <button onClick={onCancel}>Cancel</button>
    </div>
  );
};

export default AddCardForm;
