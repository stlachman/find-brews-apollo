const { ApolloServer } = require("apollo-server");
const typeDefs = require("./schema");
const resolvers = require("./resolvers");
const BreweryAPI = require("./datasources/brewery");

const server = new ApolloServer({
  typeDefs,
  resolvers,
  dataSources: () => ({
    breweryAPI: new BreweryAPI()
  })
});

server.listen().then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});
