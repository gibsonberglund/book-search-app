const { User, Book } = require('../models');

const resolvers = {
  Query: {
    users: async () => {
      return User.find();
    },

    user: async (parent, { userId }) => {
      return User.findOne({ _id: userId });
    },

    book: async (parent, { bookId }) => {
      return Book.findone({ _id: bookId });
    },
  },

  Mutation: {
    addUser: async (parent, { userId }) => {
      return User.create({ userId });
    },
    addBook: async (parent, { userId, Book }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        {
          $addToSet: { savedBooks: Book },
        },
        {
          new: true,
          runValidators: true,
        }
      );
    },
    removeUser: async (parent, { userId }) => {
      return User.findOneAndDelete({ _id: userId });
    },
    removeBook: async (parent, { userId, Book }) => {
      return User.findOneAndUpdate(
        { _id: userId },
        { $pull: { savedBooks: Book } },
        { new: true }
      );
    },
  },
};

module.exports = resolvers;

