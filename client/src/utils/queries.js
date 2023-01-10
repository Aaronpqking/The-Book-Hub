import gql from 'graphql-tag';

export const SEARCH_QUERY = gql`
query SearchQuery($searchTerm: String!) {
  search(searchTerm: $searchTerm) {
    title
    author
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

