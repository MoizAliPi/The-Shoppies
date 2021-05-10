const { ApolloServer } = require('apollo-server')
// const cors = require('cors');
//these are the exports from the schema and resolvers files we made earlier
const typeDefs = require('./schema');
const resolvers = require('./resolvers')
const movieAPI = require('./datasource')

const server = new ApolloServer({
  cors: {
    origin: '*',			// <- allow request from all domains
    credentials: true },
  typeDefs,
  resolvers,
  dataSources: () => ({
    movieAPI: new movieAPI()
  }), 
});




server.listen({ port: process.env.PORT || 4000 }).then(({ url }) => {
  console.log(`🚀 Server ready at ${url}`);
});