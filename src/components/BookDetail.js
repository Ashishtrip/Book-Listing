import React from 'react';
import './BookDetail.css';
import { useParams, Link } from 'react-router-dom';
import books from '../data/books';

/**
 * BookDetail Component
 * Fetches and displays detailed information about a specific book based on the URL ID parameter.
 * Includes error handling for cases where the book ID is invalid.
 */
function BookDetail() {
  const { id } = useParams();
  
  // Find the book by id - convert param string to integer
  // Data filtering logic based on the URL parameter
  const book = books.find((b) => b.id === parseInt(id));

  // Error boundary / User-friendly message for invalid book IDs
  if (!book) {
    return (
      <div className="error-container">
        <h2>Oops! Book Not Found</h2>
        <p>The book you're looking for doesn't exist in our catalog or might have been removed.</p>
        <Link to="/" className="back-link">Return to Catalog</Link>
      </div>
    );
  }

  return (
    <div className="book-detail-container">
      <div className="detail-card">
        <Link to="/" className="back-button">← Back to Catalog</Link>
        
        <div className="detail-content">
          <div className="detail-image">
            {/* Demonstrate handling images in the UI */}
            <img src={book.imageUrl} alt={book.title} />
          </div>
          
          <div className="detail-info">
            <h1>{book.title}</h1>
            <h2 className="detail-author">By {book.author}</h2>
            <div className="divider"></div>
            <h3>Synopsis</h3>
            <p className="detail-description">{book.description}</p>
            
            <div className="book-meta">
              <span><strong>Category:</strong> Literature</span>
              <span><strong>ID:</strong> #{book.id}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default BookDetail;
