const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    bookId: String
    title: String
    authors: [String]
    description: String
    image: String
    createdAt: String
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
    createdAt: String
  }

  type Query {
    books: [Book]!
    book(bookId: String): Book
    users: [User]!
    user(userId: ID!): User
    search(searchTerm: String!): [Book]
  }

  type Mutation {
    addBook(
      title: String!
      authors: [String]!
      description: String
      image: String
    ): Book
    addUser(username: String!, email: String!, password: String!): User
    saveBook(bookId: ID!, userId: ID!): User
    removeBook(bookId: ID!, userId: ID!): User
  }
`;

module.exports = typeDefs;
