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
};

module.exports = categoryResolver;
