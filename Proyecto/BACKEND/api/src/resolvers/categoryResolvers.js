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
    deleteCategory: async (root, args) => {
      const { idCategory } = args;
      const result = await categoryController.deleteCategory(idCategory);
      if (result.status) {
        return {
          status: true,
          message: result.message,
        };
      } else {
        return {
          status: false,
          message: result.message,
        };
      }
    },
  },
};

module.exports = categoryResolver;
