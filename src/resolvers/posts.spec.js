const { gql } = require('apollo-server-core');
const { print } = require('graphql');
const superagent = require('superagent');

describe('Post Resolvers', () => {
    describe('getPosts', () => {
        const query = print(gql`
            query getPosts {
                posts {
                    id
                    title
                    author {
                        firstName
                        lastName
                        email
                    }
                }
            }
        `);

        it('should return a list of posts', async () => {
            const response = await superagent.post('http://localhost:5000/graphql')
                .send({ query, variables: {} });

            expect(response.statusCode).toBe(200);
            expect(response.body).toMatchSnapshot();
        });
    });
});
