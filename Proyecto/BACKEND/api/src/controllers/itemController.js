const itemModel = require("../models/itemModel");
const getAllItems = async () => {
  return await itemModel.getAllItems();
};

const getOneItem = async (idItem) => {
  return await itemModel.getOneItem(idItem);
};

const addNewItem = async (args) => {
  return await itemModel.setNewItem(args);
};

const updateItem = async (item) => {
  return await itemModel.updateItem(item);
};

const uploadFile = (req, res) => {
  res.json({
    filename: req.file.filename,
    mimetype: req.file.mimetype,
    encoding: "7bit",
    path: req.file.path,
  });
};

module.exports = {
  getAllItems,
  getOneItem,
  addNewItem,
  updateItem,
  uploadFile,
};
