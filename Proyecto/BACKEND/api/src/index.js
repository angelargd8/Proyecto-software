const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const { addNewCategory } = require("./controllers/categoryController");
const { addNewProduct } = require("./controllers/itemController");
const upload = require("./utils/multerConfig");

const app = express();
app.use(cors());

// Prod
// app.post("/upload", upload.single("file"), uploadFile);
// app.use('/uploads', express.static('/app/uploads'));
app.post("/addCategory", upload.single("file"), addNewCategory);
app.post("/addProduct", upload.single("file"), addNewProduct);
app.use("/uploads", express.static("./uploads"));

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

async function startServer() {
  await server.start();
  server.applyMiddleware({ app });

  app.listen({ port: 4000 }, () =>
    console.log(`Servidor listo en http://localhost:4000/graphql`)
  );
}

startServer();

module.exports = server;
