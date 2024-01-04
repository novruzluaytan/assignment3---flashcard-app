Flashcard App Assignment

# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.


Overview

This project involves the development of a Flash Card App using React for educational purposes. Users can create, view, edit, and delete flashcards, each containing information on both sides for learning or memorization.

Part 1: Setting up the json-server

1. Create a json-server that serves a list of "flash-card" objects.
2. Test the endpoints using an API client like Postman or Insomnia.
3. Part 2: React Application

Home Page:
1. General introduction to the portfolio.
2. Brief information about all projects, each with an external link to its corresponding website or repository.

Flash Cards Page:
Flash Card Structure:
1. Each card has two sides: front (question or image) and back (answer or additional information).
2. Cards include a last modification date/time.
3. Each card has a status: Learned, Want to Learn, Noted.

Flash Card Management:
1. Create: Option to add new flash cards 
2. Edit/Update: Edit opens a new pop-up page or turns the card into an editable component
3. Delete: Remove a card from the collection 

Main Page Features:
1. Display Cards: List of cards fetched from the endpoint (http://localhost:3000/cards), sorted by most recent modification 
2. Create Card Option: Interface for adding new cards.
3. Search Functionality: Search cards based on text on either side
4. Filter Option: Filter cards by their status 
5. Sort Option: Sort cards based on various attributes 
6. Storage Integration:
All cards are fetched from the json-server, and updates must be persisted back to it.

Contact Me Page:
1. A simple contact page asking the user to enter the subject, email address, and message content.
2. When the user submits, the message should be sent to http://localhost:3000/messages as a JSON body to be stored in a JSON file on the json-server.

Instructions for Running the Application
1. Clone the repository.
2. Navigate to the project directory.
3. Install dependencies: npm install.
4. Start the json-server: json-server --watch db.json --port 3001.
5. In a new terminal, start the React application: npm start.
6. Feel free to explore the Flash Card App, manage your flashcards, and contact the developer for any inquiries or feedback.

Note: Ensure that the json-server is running to enable proper functionality, and modifications are persisted to the server.