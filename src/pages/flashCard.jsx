import React, { useState, useEffect } from 'react';
import FlashCard from './FlashCard.jsx';
import axios from 'axios';
import '../styles/flashcard.css'

const FlashcardApp = () => {
    const [flashcards, setFlashcards] = useState([]);
    const [originalFlashcards, setOriginalFlashcards] = useState([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');
    const [showBackButton, setShowBackButton] = useState(false);

    useEffect(() => {
        fetchFlashcards();
    }, []);

    const fetchFlashcards = async () => {
        try {
            const response = await fetch('http://localhost:3001/flashcards');
            const data = await response.json();
            setFlashcards(data);
            setOriginalFlashcards(data.flashcards);
        } catch (error) {
            console.error('Error fetching flashcards:', error);
        }
    };


    const displayFlashcards = () => {
        const cardsPerPage = 6; // Update to 6 cards per page
        const startIndex = (currentPage - 1) * cardsPerPage;
        const endIndex = startIndex + cardsPerPage;
        const paginatedFlashcards = flashcards.slice(startIndex, endIndex);

        return paginatedFlashcards.map((card) => (
            <div
                key={card.id}
                className={`flashcard ${card.flipped ? 'flipped' : ''}`}
                onClick={() => flipCard(card)}
            >
                {card.flipped ? card.answer : card.question}
            </div>
        ));
    };


    const flipCard = (card) => {
        const updatedFlashcards = flashcards.map((c) =>
            c.id === card.id ? { ...c, flipped: !c.flipped } : c
        );
        setFlashcards(updatedFlashcards);
    };


    const displayPagination = () => {
        const totalPages = Math.ceil(flashcards.length / 6);
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
        const searchTermLowerCase = searchTerm.toLowerCase();
        const searchResults = flashcards.filter(
            (card) =>
                card.question.toLowerCase().includes(searchTermLowerCase) ||
                card.answer.toLowerCase().includes(searchTermLowerCase)
        );

        setFlashcards(searchResults);
        setShowBackButton(true);
    };


    const goBack = () => {
        setFlashcards(originalFlashcards);
        setShowBackButton(false); // Hide the back button
        setSearchTerm(''); // Clear the search term
      };
    


    return (
        <div className="app">
            <div className="flashcard-container">{displayFlashcards()}</div>
            <div className="pagination-container">{displayPagination()}</div>
            <div className="search-container">
                <input
                    type="text"
                    placeholder="Search"
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button onClick={searchCards}>Search</button>
                {showBackButton && <button onClick={goBack}>Back</button>}
            </div>
        </div>
    );
}

export default FlashcardApp;










//     const handleStatusChange = (cardId, status) => {
//         // Implement status change logic (know/dontknow)
//         console.log(`Card ${cardId} status changed to ${status}`);
//     };

//     const handleEdit = (cardId) => {
//         // Implement edit logic
//         console.log(`Edit card with ID: ${cardId}`);
//     };

//     const handleDelete = (cardId) => {
//         // Implement delete logic
//         console.log(`Delete card with ID: ${cardId}`);
//     };

//     const handleSearch = () => {
//         setCurrentPage(1);
//     };

//     const prevPage = () => {
//         setCurrentPage(currentPage > 1 ? currentPage - 1 : 1);
//     };

//     const nextPage = () => {
//         const maxPages = Math.ceil(flashcards.length / flashcardsPerPage);
//         setCurrentPage(currentPage < maxPages ? currentPage + 1 : maxPages);
//     };

//     return (
//         <div className="flashcard-container">
//             <h1>Flashcard App</h1>
//             <input
//                 type="text"
//                 placeholder="Search"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//             />
//             <button onClick={handleSearch}>Search</button>
//             <div className="flashcards">{renderFlashcards()}</div>
//             <div className="pagination">
//                 <button onClick={prevPage}>Previous</button>
//                 <button onClick={nextPage}>Next</button>
//             </div>
//         </div>
//     );
// };

// export default FlashcardApp;









