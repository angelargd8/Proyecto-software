const { gql } = require("apollo-server");

const categoryTypeDefs = gql`
  type Promotions {
    idPromotions: Int!
    percentage: Float
    state: String!
    name: String!
    discount: Float
  }

  type Categories {
    idCategory: Int!
    name: String
    Page: Pages
  }

  type Pages {
    idPage: Int!
    name: String!
    admin: Users
  }

  type Query {
    getCategories: [Categories]!
    getOneCategory(idCategory: Int!): Categories
  }

  type statusCategoryInsert {
    status: Boolean!
    message: String
    Category: Categories
  }

  type Mutation {
    addNewCategory(name: String!, idPage: Int!): statusCategoryInsert
  }
`;

module.exports = categoryTypeDefs;
