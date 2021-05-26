const { ApolloServer, makeExecutableSchema } = require('apollo-server-express');
const typeDefs = require('./schema.js');
const resolvers = require('./resolvers');
const { applyMiddleware } = require('graphql-middleware');
const permissions = require('./permissions.js');

const schema = makeExecutableSchema({
    typeDefs,
    resolvers
});

module.exports = new ApolloServer({
    schema: applyMiddleware(schema, permissions),
    context: ({ req }) => {
        return {
            role: req.get('x-role'),
            userId: req.get('x-user-id')
        }
    }
});
