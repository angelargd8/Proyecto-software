const UserModel = require("../models/userModel");

const getAllUsers = async () => {
  return await UserModel.getAllUsers();
};

const getRol = async (id) => {
  return await UserModel.getRol(id);
};

const validateUser = async (email, password) => {
  return await UserModel.validateUser(email, password);
};

const validateEmail = async (email) => {
  return await UserModel.validateEmail(email);
};

const createNewUser = async (args) => {
  return await UserModel.createNewUser(args);
};

const deleteUser = async (email) => {
  return await UserModel.deleteUser(email);
};

module.exports = {
  getAllUsers,
  getRol,
  validateUser,
  validateEmail,
  createNewUser,
  deleteUser,
};
