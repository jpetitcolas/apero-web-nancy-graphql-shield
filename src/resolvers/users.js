const posts = require('./posts.json');
const users = require('./users.json');

module.exports = {
    User: {
        firstName: user => user.first_name,
        lastName: user => user.last_name,
        posts: user => posts.filter(p => p.author_id === user.id)
    },

    Query: {
        users: () => users,
        user: (root, args) => users.find(u => u.id === +args.id)
    }
};
