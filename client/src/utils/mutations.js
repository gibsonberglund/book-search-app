import { gql } from '@apollo/client';

export const ADD_USER = gql`
mutation AddUser($username: String!) {
  addUser(username: $username) {
    email
    username
    password
  }
}
`;

export const LOGIN_USER = gql`
  mutation Login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        password
        email
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
  mutation removeBook($userId: ID!, $savedBooks: [savedBooks]) {
    deleteBook(userId: $userId, savedBooks: $Book) {
      _id
      name
      savedBooks
    }
  }
`;