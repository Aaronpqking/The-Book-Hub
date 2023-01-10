import gql from 'graphql-tag';

export const ADD_USER = gql`
  mutation signup($username: String!, $email: String!, $password: String!) {
    signup(username: $username, email: $email, password: $password) {
      token
    }
  }
`;

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
    }
  }
`;

export const LOGOUT_USER = gql`
  mutation logout {
    logout
  }
`;

export const ADD_BOOK_MUTATION = gql`
  mutation addBook($title: String!, $author: String!, $price: Float!) {
    addBook(title: $title, author: $author, price: $price) {
      id
      title
      author
      price
    }
  }
`;


export const DELETE_BOOK_MUTATION = gql`
  mutation deleteBook($id: ID!) {
    deleteBook(id: $id) {
      id
      title
      author
      price
    }
  }
`;

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!) {
    saveBook(bookId: $bookId) {
      id
      savedBooks {
        id
        title
        author
      }
    }
  }
`;
