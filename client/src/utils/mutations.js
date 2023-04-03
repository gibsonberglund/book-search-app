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

export const LOGIN_USER = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
        username
      }
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

export const DELETE_BOOK = gql`
  mutation deleteBook($userId: ID!, $savedBooks: [savedBooks]) {
    deleteBook(userId: $userId, savedBooks: $Book) {
      _id
      name
      savedBooks
    }
  }
`;