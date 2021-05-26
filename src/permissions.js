const { allow, deny, shield, rule, or } = require('graphql-shield');

const isAdmin = rule({ cache: 'contextual' })((root, args, context) => {
    return context.role === "ADMIN";
});

const isLoggedUser = rule({ cache: 'contextual' })((user, args, context) => {
    return +context.userId === user.id;
});

module.exports = shield({
    User: {
        "*": allow,
        email: or(isAdmin, isLoggedUser)
    },

    Post: {
        "*": allow,
        "author": isAdmin
    },

    Query: {
        users: allow,
        post: allow,
    }
}, {
    allowExternalErrors: true,
    fallbackError: new Error("Not Authorized!"),
    fallbackRule: deny
});
