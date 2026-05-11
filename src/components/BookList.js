import React from 'react';
import './BookList.css';
import { Link } from 'react-router-dom';
import books from '../data/books';

/**
 * BookList Component
 * Displays a grid of books with their titles, authors, and a truncated description.
 * Each book card includes a link to its detail page.
 */
function BookList() {
  // Filter logic could be added here for search functionality
  const displayedBooks = books;

  return (
    <div className="book-list">
      <header className="list-header">
        <h1>Celestial Library</h1>
        <p>Explore our curated collection of literary masterpieces.</p>
      </header>

      <div className="books-grid">
        {displayedBooks.map((book) => (
          <div key={book.id} className="book-card">
            <div className="book-card-image">
              <img src={book.imageUrl} alt={book.title} />
            </div>
            <div className="book-card-content">
              <h3>{book.title}</h3>
              <p className="author">By {book.author}</p>
              
              {/* Truncated description for better UI */}
              <p className="description-preview">
                {book.description.substring(0, 80)}...
              </p>

              <Link to={`/books/${book.id}`}>
                <button className="read-more-btn">Read More</button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;
