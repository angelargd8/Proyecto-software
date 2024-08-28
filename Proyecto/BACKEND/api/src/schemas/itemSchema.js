const { gql } = require("apollo-server");

//TODO: hay que cambiar las querys para los objetos

const itemTypeDefs = gql`
  type Items {
    idItems: Int!
    name: String!
    quantity: Int
    price: Float!
    description: String
    promotions: [Promotions]
  }

  type Query {
    getItems: [Items]!
    getOneItem(idItem: Int!): Items
  }

  type StatusItemInsert {
    status: Boolean!
    message: String
    Item: Items
  }

  type Mutation {
    addNewItem(
      name: String!
      quantity: Int
      price: Float!
      description: String
    ): StatusItemInsert
    updateItem(
      idItem: Int!
      name: String!
      quantity: Int
      price: Float!
      description: String
    ): Items
  }
`;

module.exports = itemTypeDefs;