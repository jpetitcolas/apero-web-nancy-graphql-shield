const express = require('express');
const graphqlServer = require('./graphqlServer');

const app = express();
graphqlServer.applyMiddleware({ app, cors: false });

const port = process.env.PORT || 5000;

app.listen(port, () => {
    console.log(`GraphQL API listening on port ${port}...`);
});
