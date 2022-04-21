const { ApolloServer } = require("apollo-server");
const { typeDef } = require("./schema.js");
const { Query } = require("./resolvers/Query");
const { Mutation } = require("./resolvers/Mutation");

const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");
const { db } = require("./db");

const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: {
    Query,
    Category,
    Product,
    Mutation,
  },
  context: {
    db,
  },
});

server.listen().then((x) => console.log(x.url));
