const userController = require("../controllers/userController");

const userResolvers = {
  Query: {
    allUsers: async () => {
      const users = await userController.getAllUsers();
      return users;
    },
    validateCredentials: async (root, args) => {
      const { email, password } = args;
      const user = await userController.validateUser(email, password);
      return user[0];
    },
    validateEmail: async (root, args) => {
      const { email } = args;
      const user = await userController.validateEmail(email);
      return user[0];
    },
  },
  Mutation: {
    addnewUser: async (root, args) => {
      const user = { ...args };
      const response = await userController.validateUser(
        user.email,
        user.password
      );
      if (response.length < 1) {
        const result = await userController.createNewUser(user);
        return {
          status: true,
          message: "Usuario creado con exito",
          user: result,
        };
      } else {
        return {
          status: false,
          message: "El usuario ya existe",
        };
      }
    },
    deleteUser: async (root, args) => {
      const { email } = args;
      const response = await userController.deleteUser(email);
      if (response.rowCount > 0) {
        return {
          status: true,
          message: "Usuario eliminado con exito",
        };
      } else {
        return {
          status: false,
          message: "Usuario no encontrado",
        };
      }
    },
  },
  Users: {
    rol: async (root) => {
      const rol = await userController.getRol(root.IdRol);
      return rol[0];
    },
  },
};

module.exports = userResolvers;
