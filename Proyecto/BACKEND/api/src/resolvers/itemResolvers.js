const itemController = require("../controllers/itemController");

//TODO: arreglar la parte de promociones

const itemResolver = {
  Query: {
    getItems: async () => {
      const items = await itemController.getAllItems();
      return items;
    },
    getOneItem: async (root, args) => {
      const { idItem } = args;
      const item = await itemController.getOneItem(idItem);
      return item[0];
    },
  },
  Mutation: {
    addNewItem: async (root, args) => {
      const item = { ...args };
      const response = await itemController.addNewItem(item);
      if (response) {
        return {
          status: true,
          message: "Se creo con exito el objeto",
          Item: response,
        };
      } else {
        return {
          status: false,
          message: "algo salio mal",
          Item: response,
        };
      }
    },
    updateItem: async (root, args) => {
      const newItem = { ...args };
      const response = await itemController.updateItem(newItem);
      return response;
    },
  },
};

module.exports = itemResolver;
