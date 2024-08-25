const categoryController = require("../controllers/categoryController");

const categoryResolver = {
  Query: {
    getCategories: async (root, args) => {
      const categories = await categoryController.getAllCategories();
      return categories;
    },
    getOneCategory: async (root, args) => {
      const { idCategory } = args;
      const category = await categoryController.getOneCategory(idCategory);
      return category[0];
    },
  },
  Mutation: {
    addNewCategory: async (root, args) => {
      const { name, idPage } = args;
      const response = await categoryController.addNewCategory(name, idPage);
      if (response.length > 0) {
        return {
          status: true,
          message: "Se inserto con exito",
          Category: response[0],
        };
      } else {
        return {
          status: false,
          message: "Problema insertando",
        };
      }
    },
  },
};

module.exports = categoryResolver;
