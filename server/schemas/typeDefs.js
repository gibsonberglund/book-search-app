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

  type User {
    _id: ID
    username: String
    email: String
    password: String
    savedBooks: [Books]
  }

  type Query {
    books: [Book]
    book(bookId: ID!): Book
    user(userId: ID!): User
  }

  type Mutation {
    addUser(username: String!): User
    addBook(userId: ID!, savedBooks: Book): User
    removeUser(userId: ID!): User
    removeBook(userId: ID!, savedBooks: Book): User
  }
`;

module.exports = typeDefs;
