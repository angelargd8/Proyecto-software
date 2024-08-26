const { gql } = require("apollo-server");
const { createTestClient } = require("apollo-server-testing");
const server = require("../src/index");
const { query, mutate } = createTestClient(server);

describe("GraphQL Server", () => {
  it("fetches all users", async () => {
    const GET_ALL_USERS = gql`
      query {
        allUsers {
          email
          name
        }
      }
    `;

    const res = await query({ query: GET_ALL_USERS });
    expect(res.data.allUsers).not.toBeNull();
    expect(res.data.allUsers).not.toBe([]);
  });

  it("validates user credentials", async () => {
    const VALIDATE_CREDENTIALS = gql`
      query validateCredentials($email: String!, $password: String!) {
        validateCredentials(email: $email, password: $password) {
          email
          name
        }
      }
    `;

    const variables = { email: "aguilar@gmail.com", password: "123" };
    const res = await query({ query: VALIDATE_CREDENTIALS, variables });
    validationResult = res.data.validateCredentials;

    expect(validationResult).not.toBeNull();
    expect(validationResult.email).toBe("aguilar@gmail.com");
  });

  it("adds a new user", async () => {
    const ADD_NEW_USER = gql`
      mutation addnewUser(
        $email: String!
        $nombre: String!
        $appelido: String
        $password: String!
        $rol: Int!
      ) {
        addnewUser(
          email: $email
          nombre: $nombre
          appelido: $appelido
          password: $password
          rol: $rol
        ) {
          status
          message
          user {
            email
            name
          }
        }
      }
    `;

    const variables = {
      email: "newauser@example.com",
      nombre: "New",
      appelido: "User",
      password: "password",
      rol: 1,
    };

    const res = await mutate({ mutation: ADD_NEW_USER, variables });
    expect(res.data.addnewUser.status).toBe(true);
  });

  it("Delete user", async () => {
    const DELETE_USER = gql`
      mutation DeleteUser($email: String!) {
        deleteUser(email: $email) {
          message
          status
        }
      }
    `;

    const variables = {
      email: "newauser@example.com",
    };

    const res = await mutate({ mutation: DELETE_USER, variables });
    expect(res.data.deleteUser.status).toBe(true);
  });
});
