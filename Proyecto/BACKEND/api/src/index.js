const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const {
  addNewCategory,
  editCategory,
} = require("./controllers/categoryController");
const { addNewProduct } = require("./controllers/itemController");
const upload = require("./utils/multerConfig");
const { validateCard } = require("./controllers/stripeController");

const app = express();
app.use(cors());
app.use(express.json());

app.post("/addCategory", upload.single("file"), addNewCategory);
app.post("/addProduct", upload.single("file"), addNewProduct);
app.use("/uploads", express.static("./uploads"));
app.post("/api/validate-card", validateCard);
app.post("/editCategory", upload.single("file"), editCategory);

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
