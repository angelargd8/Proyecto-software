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
    image: String
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

  type StatusCategoryDelete{
    status: Boolean!
    message: String
  }
    
  type Mutation{
    deleteCategory(idCategory: Int!): StatusCategoryDelete
  }
`;

module.exports = categoryTypeDefs;
