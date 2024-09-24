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

const getOneUserById = async (email) => {
  return await UserModel.getOneUserbyEmail(email);
};

const modifyUser = async (user) => {
  return await UserModel.modifyUser(user);
};

const modifyUserPassword = async (email, password) => {
  return await UserModel.modifyUserPassword(email, password);
};

const modifyUserNameLastName = async (email, lastName, name) => {
  return await UserModel.modifyUserNameLastName(name, lastName, email);
};

const modifyRolUser = async (idRol, email) => {
  return await UserModel.modifyRolUser(idRol, email);
};

module.exports = {
  getAllUsers,
  getRol,
  validateUser,
  validateEmail,
  createNewUser,
  deleteUser,
  getOneUserById,
  modifyUser,
  modifyUserPassword,
  modifyUserNameLastName,
  modifyRolUser,
};
