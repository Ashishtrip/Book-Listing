import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import BookList from './components/BookList';
import BookDetail from './components/BookDetail';
import './App.css';

/**
 * Main App Component
 * Sets up the routing for the application using React Router.
 * - "/" renders the BookList component (Home)
 * - "/books/:id" renders the BookDetail component with a dynamic ID parameter
 */
function App() {
  return (
    <Router>
      <div className="App">
        {/* Navigation/Header could be added here */}
        <main className="app-main">
          <Routes>
            <Route path="/" element={<BookList />} />
            <Route path="/books/:id" element={<BookDetail />} />
            {/* Catch-all route for 404 pages could be added here */}
          </Routes>
        </main>
        
        <footer className="app-footer">
          <p>&copy; 2024 Celestial Book Catalog. All rights reserved.</p>
        </footer>
      </div>
    </Router>
  );
}

export default App;
