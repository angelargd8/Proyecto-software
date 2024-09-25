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
    oneUser: async (root, args) => {
      const { email } = args;
      const user = await userController.getOneUserById(email);
      return user;
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
    modifyUser: async (root, args) => {
      const user = { ...args };
      const response = await userController.modifyUser(user);
      if (response.length > 0) {
        return {
          status: true,
          message: "El usuario fue modificado con exito",
          user: response[0],
        };
      } else {
        return {
          status: false,
          message: "Fallo en la modificacion",
        };
      }
    },
    modifyUserPassword: async (root, args) => {
      const { password, email } = args;
      const response = await userController.modifyUserPassword(email, password);
      if (response.length > 0) {
        return {
          status: true,
          message: "El usuario fue modificado con exito",
          user: response[0],
        };
      } else {
        return {
          status: false,
          message: "Fallo en la modificacion",
        };
      }
    },
    modifyUserNameLastName: async (root, args) => {
      const { name, lastName, email } = args;
      const response = await userController.modifyUserNameLastName(
        email,
        lastName,
        name
      );
      if (response.length > 0) {
        return {
          status: true,
          message: "El usuario fue modificado con exito",
          user: response[0],
        };
      } else {
        return {
          status: false,
          message: "Fallo en la modificacion",
        };
      }
    },
    modifyRolUser: async (root, args) => {
      const { idRol, email } = args;
      const response = await userController.modifyRolUser(idRol, email);
      if (response.length > 0) {
        return {
          status: true,
          message: "El usuario fue modificado con exito",
          user: response[0],
        };
      } else {
        return {
          status: false,
          message: "Fallo en la modificacion",
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
