const categoryModel = require("../models/categoryModel");

const getAllCategories = async () => {
  return await categoryModel.getCategories();
};

const getOneCategory = async (idCategory) => {
  return await categoryModel.getCategory(idCategory);
};

const addNewCategory = async (name, idPage) => {
  return await categoryModel.setCategory(name, idPage);
};

module.exports = {
  getAllCategories,
  getOneCategory,
  addNewCategory,
};
