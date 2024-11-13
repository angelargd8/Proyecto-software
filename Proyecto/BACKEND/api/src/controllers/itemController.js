const itemModel = require("../models/itemModel");
const getAllItems = async (idCategory) => {
  return await itemModel.getAllItems(idCategory);
};

const getOneItem = async (idItem) => {
  return await itemModel.getOneItem(idItem);
};

const updateItem = async (item) => {
  return await itemModel.updateItem(item);
};

const addNewProduct = async (req, res) => {
  return itemModel.addNewItem(req, res);
};

const getItemPrices = async (idItem) => {
  return itemModel.getItemPrices(idItem);
};

const deleteItem = async (idItem) => {
  return itemModel.deleteItem(idItem);
};

module.exports = {
  getAllItems,
  getOneItem,
  updateItem,
  addNewProduct,
  getItemPrices,
  deleteItem,
};
