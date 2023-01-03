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

export const SAVE_BOOK = gql`
  mutation saveBook($bookId: ID!) {
    saveBook(bookId: $bookId) {
      id
      savedBooks {
        id
        title
        authors
      }
    }
  }
`;
