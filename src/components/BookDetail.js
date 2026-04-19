import React from 'react';
import './BookDetail.css';
import { useParams, Link } from 'react-router-dom';
import books from '../data/books';

function BookDetail() {
  const { id } = useParams();
  // Find the book by id - simple beginner way
  const book = books.find((b) => b.id === parseInt(id));

  if (!book) {
    return <div>Book not found!</div>;
  }

  return (
    <div className="book-detail">
      <Link to="/">← Back to List</Link>
      <h1>{book.title}</h1>
      <h2>By {book.author}</h2>
      <p>{book.description}</p>
    </div>
  );
}

export default BookDetail;

