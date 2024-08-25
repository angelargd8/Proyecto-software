const userResolvers = require("./userResolver");
const categoryResolvers = require("./categoryResolvers");
const itemResolvers = require("./itemResolvers");

const resolvers = {
  Query: {
    ...userResolvers.Query,
    ...categoryResolvers.Query,
    ...itemResolvers.Query,
  },
  Mutation: {
    ...userResolvers.Mutation,
  },
  Users: {
    ...userResolvers.Users,
  },
};

module.exports = resolvers;
