import gql from 'graphql-tag';

export const GET_BOOKS = gql`
  query GetBooks {
    books {
      title
      author
      price
      imageUrl
    }
  }
`;

export const GET_AUTHORS = gql`
  query GetAuthors {
    authors {
      name
      id
      books {
        title
      }
    }
  }
`;

export const ADD_BOOK = gql`
  mutation AddBook($title: String!, $author: String!, $price: Float!, $imageUrl: String) {
    addBook(title: $title, author: $author, price: $price, imageUrl: $imageUrl) {
      title
      author
      price
      imageUrl
    }
  }
`;
