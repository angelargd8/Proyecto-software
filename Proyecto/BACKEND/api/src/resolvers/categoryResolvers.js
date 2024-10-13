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
      if (result.rowCount>0){
        return {
          success: true,
          message: "Category deleted successfully",
        };
      }
      else {
        return {
          success: false,
          message: "Error deleting category: ",
        };
      }
    },
  },
};

module.exports = categoryResolver;
