const categoryModel = require("../models/categoryModel");

const getAllCategories = async () => {
  return await categoryModel.getCategories();
};

const getOneCategory = async (idCategory) => {
  return await categoryModel.getCategory(idCategory);
};

const addNewCategory = async (req, res) => {
  return await categoryModel.addNewCategory(req, res);
};

const deleteCategory = async (idCategory) => {
  return await categoryModel.deleteCategory(idCategory);
};

const editCategory = async (req, res) => {
  return await categoryModel.editCategory(req, res);
};

// exportar

module.exports = {
  getAllCategories,
  getOneCategory,
  addNewCategory,
  deleteCategory,
  editCategory,
};
