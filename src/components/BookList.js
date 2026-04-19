import React from 'react';
import './BookList.css';
import { Link } from 'react-router-dom';
import books from '../data/books';


function BookList() {
  return (
    <div className="book-list">
      <h1>Book Catalog</h1>
      <p>Click "Read More" to see book details.</p>
      <div className="books-grid">
        {books.map((book) => (
          <div key={book.id} className="book-card">
            <h3>{book.title}</h3>
            <p>By {book.author}</p>
            <Link to={`/books/${book.id}`}>
              <button>Read More</button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BookList;

