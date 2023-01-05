// import gql from 'graphql-tag';

// export const GET_BOOKS = gql`
//   query GetBooks {
//     books {
//       title
//       author
//       price
//       imageUrl
//     }
//   }
// `;

// export const GET_AUTHORS = gql`
//   query GetAuthors {
//     authors {
//       name
//       id
//       books {
//         title
//       }
//     }
//   }
// `;

// export const ADD_BOOK = gql`
//   mutation AddBook($title: String!, $author: String!, $price: Float!, $imageUrl: String) {
//     addBook(title: $title, author: $author, price: $price, imageUrl: $imageUrl) {
//       title
//       author
//       price
//       imageUrl
//     }
//   }
// `;
// export const SEARCH_QUERY = gql
// export default gql;
import gql from 'graphql-tag';

export const SEARCH_QUERY = gql`
  query search($query: String!) {
    search(query: $query) {
      id
      title
    }
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

