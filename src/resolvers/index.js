const { merge } = require('lodash');

const posts = require('./posts');
const users = require('./users');

module.exports = merge(posts, users);
