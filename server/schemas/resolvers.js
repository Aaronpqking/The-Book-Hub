const Book = require('../models/book');
const User = require('../models/user');

const resolvers = {
    Query: {
        // search: async (parent, { searchTerm }) => {
        //     try {
        //       return Book.find({
        //         $text: {
        //           $search: searchTerm
        //         }
        //       });
        //     } catch (error) {
        //       console.error("almost!");
        //     }
        //   },
        // search: async (parent, { searchTerm }, callback) => {
        //     try {
        //         await Book.findOne({ title }).exec();
        //     } catch (error) {
        //       return callback(error, null);
        //     }
        //   },
        search: async (parent, { searchTerm }) => {
            Book.find({ title: searchTerm }).exec(function (error, books) {
                if (books) {
                    return books;
                } else {
                    console.log(error);
                    return undefined;
                }
            });

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
