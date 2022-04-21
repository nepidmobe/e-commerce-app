const { ApolloServer, gql } = require("apollo-server");
const typeDef = gql`
  type Query {
    hello: String!
  }
`;
const resolver = {
  Query: {
    hello: () => "dipenjbjjb",
  },
};
const server = new ApolloServer({
  typeDefs: typeDef,
  resolvers: resolver,
});

server.listen().then((x) => console.log(x.url));
