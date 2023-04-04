const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type Book {
    _id: ID
    title: String
    authors: [String]
    description: String
    bookId: String
    image: String
    link: String
  }

  type Auth {
    token: ID!
    user: User
  }

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Book]
  }

  type Query {
    books: [Book]
    book(bookId: ID!): Book
    users: [User]
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!): User
    login(email: String!, password: String!): Auth
    addBook(userId: ID!, savedBooks: ID!): User
    removeUser(userId: ID!): User
    removeBook(userId: ID!, savedBooks: ID!): User
  }
`;

module.exports = typeDefs;
