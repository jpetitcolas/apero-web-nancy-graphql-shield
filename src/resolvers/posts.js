const posts = require('./posts.json');
const users = require('./users.json');

module.exports = {
    Post: {
        author: post => users.find(user => user.id === post.author_id),
    },

    Query: {
        post: (root, args) => posts.find(p => p.id === +args.id),
        posts: () => posts
    }
};
