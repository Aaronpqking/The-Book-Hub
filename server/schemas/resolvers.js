const Book = require('../models/book');
const User = require('../models/user');

const resolvers = {
    Query: {
        search: async (parent, { searchTerm }) => {
            return Book.find({ title: searchTerm });
        },
        books: async () => {
            return Book.find();
        },
        book: async (parent, { bookId }) => {
            return Book.findOne({ bookId: bookId });
        },
        users: async () => {
            return User.find();
        },
        user: async (parent, { userId }) => {
            return User.findOne({ _id: userId });
        },
    },
    Mutation: {
        addBook: async (parent, { title, author, description, image }) => {
            return Book.create({ title, author, description, image });
        },
        addUser: async (parent, { username, password, email }) => {
            return User.create({ username, password, email });
        },
        removeBook: async (parent, { bookId }) => {
            return Book.findOneAndDelete({ _id: bookId });
        },
    },
};

module.exports = resolvers;
