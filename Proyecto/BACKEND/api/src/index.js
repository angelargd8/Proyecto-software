const express = require("express");
const cors = require("cors");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("./schemas");
const resolvers = require("./resolvers");
const { uploadFile } = require("./controllers/itemController");
const upload = require("./utils/multerConfig");

const app = express();
app.use(cors());

app.post("/upload", upload.single("file"), uploadFile);

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
