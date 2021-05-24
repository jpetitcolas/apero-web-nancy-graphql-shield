const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = new ApolloServer({
    schema
});
