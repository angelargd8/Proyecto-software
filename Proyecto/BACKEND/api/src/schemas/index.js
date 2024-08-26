const { gql } = require("apollo-server");
const userTypeDefs = require("./userSchema");
const categoryTypeDefs = require("./categorySchema");
const itemTypeDefs = require("./itemSchema");

const typeDefs = gql`
  ${userTypeDefs}
  ${categoryTypeDefs}
  ${itemTypeDefs}
`;

module.exports = typeDefs;
