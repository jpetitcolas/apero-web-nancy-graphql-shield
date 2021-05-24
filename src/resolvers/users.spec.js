const { gql } = require('apollo-server-core');
const { print } = require('graphql');
const superagent = require('superagent');

describe('User Resolvers', () => {
    describe('getUsers', () => {
        const query = print(gql`
            query getUsers {
                users {
                    id
                    firstName
                    lastName
                    email
                }
            }
        `);

        it('should return a list of users', async () => {
            const response = await superagent.post('http://localhost:5000/graphql')
                .send({ query, variables: {} });

            expect(response.statusCode).toBe(200);
            expect(response.body).toMatchSnapshot();
        });
    });
});
