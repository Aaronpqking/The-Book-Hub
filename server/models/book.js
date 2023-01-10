const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  bookId: {
    type: String,
    required: false,
  },  
  title: {
    type: String,
    required: true,
    text: true
  },
  authors: {
    type: String,
    required: true,
    text: true
  },
  publisher: String,
  bookmarked: {
    type: Boolean,
    default: false,
  },
});
const Book = mongoose.model('Book', bookSchema);
module.exports = Book;
