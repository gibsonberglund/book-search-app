import { gql } from '@apollo/client';

export const ADD_USER = gql`
  mutation addUser($username: String!) {
    addUser(username: $name) {
      _id
      name
      savedBooks
    }
  }
`;

export const ADD_BOOK = gql`
  mutation addBook($userId: ID!, $savedBooks: [savedBooks]) {
    addBook(userId: $userId, savedBooks: $Book) {
      _id
      name
      savedBooks
    }
  }
`;
