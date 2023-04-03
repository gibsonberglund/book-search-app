import { gql } from '@apollo/client';

export const QUERY_USERS = gql`
  query allUsers {
    Users {
      _id
      username
      savedBooks
    }
  }
`;

export const QUERY_SINGLE_USER = gql`
  query singleUser($userId: ID!) {
    user(userId: $userId) {
      _id
      username
      savedBooks
    }
  }
`;

export const QUERY_SAVED_BOOKS = gql`
  query getSavedBookIds($userId: ID!) {
    user(userId: $userId) {
    _id
    savedBooks
    }
  }
`
