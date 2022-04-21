const { ApolloServer } = require("apollo-server");
const { typeDef } = require("./schema.js");
const { Query } = require("./resolvers/Query");
const { Product } = require("./resolvers/Product");
const { Category } = require("./resolvers/Category");

const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: {
    Query,
    Category,
    Product,
  },
});

server.listen().then((x) => console.log(x.url));
