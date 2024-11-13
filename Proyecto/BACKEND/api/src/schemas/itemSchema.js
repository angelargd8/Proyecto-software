const { gql } = require("apollo-server");

//TODO: hay que cambiar las querys para los objetos

const itemTypeDefs = gql`
  type Prices {
    idPrice: Int!
    name: String!
    quantity: Float!
    price: Float!
  }

  type Items {
    idItems: Int!
    name: String!
    quantity: Int
    description: String
    prices: [Prices]
    image: String
  }

  type Query {
    getItemsByCategory(idCategory: Int!): [Items]!
    getOneItem(idItem: Int!): Items
  }

  type StatusItemInsert {
    status: Boolean!
    message: String
    Item: Items
  }

  type StatusItemDelete {
    status: Boolean!
    message: String
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
    deleteItem(idItem: Int!): StatusItemDelete
  }
`;

module.exports = itemTypeDefs;
