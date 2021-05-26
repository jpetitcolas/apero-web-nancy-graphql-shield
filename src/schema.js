const { gql } = require('apollo-server-express');

module.exports = gql`
    enum UserRole {
        ADMIN
        WRITER
    }

    type User {
        id: ID!
        firstName: String!
        lastName: String!
        email: String
        role: UserRole!
        posts: [Post]!
    }

    enum PostStatus {
        DRAFT
        PUBLISHED
    }

    type Post {
        id: ID!
        title: String!
        author: User
        status: PostStatus!
    }

    type Query {
        post(id: ID!): Post!
        posts: [Post]!
        user(id: ID!): User!
        users: [User]!
    }
`
