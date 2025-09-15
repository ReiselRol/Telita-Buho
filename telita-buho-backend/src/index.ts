import { ApolloServer } from '@apollo/server';
import { startStandaloneServer } from '@apollo/server/standalone';
import { resolvers } from './Apollo/resolvers.js';
import { typeDefs } from './Apollo/typeDefs.js';

const server = new ApolloServer({typeDefs, resolvers});

const startServer = async () => {
  const { url } = await startStandaloneServer(server, {
    listen: { port: 4001 },
  });
  console.log('Server ready at ' + url + '!');
};

await startServer();
