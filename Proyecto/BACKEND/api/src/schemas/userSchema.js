const { gql } = require("apollo-server");

const userTypeDefs = gql`
  type Roles {
    ID: Int!
    name: String!
  }

  type Users {
    email: String!
    name: String!
    lastName: String!
    password: String!
    rol: Roles
  }

  type Query {
    allUsers: [Users]!
    validateCredentials(email: String!, password: String!): Users
    validateEmail(email: String!): Users
    oneUser(email: String!): Users
  }

  type UserValidationResult {
    status: Boolean!
    message: String
    user: Users
  }

  type StatusUserDelete {
    status: Boolean!
    message: String
  }

  type Mutation {
    addnewUser(
      email: String!
      nombre: String!
      appelido: String
      password: String!
      rol: Int!
    ): UserValidationResult
    deleteUser(email: String!): StatusUserDelete
    modifyUser(
      name: String!
      lastName: String!
      password: String!
      idRol: Int!
      email: String!
    ): UserValidationResult
  }
`;

module.exports = userTypeDefs;
