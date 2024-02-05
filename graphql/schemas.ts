export const typeDefs = `#graphql
    type Query {
        threads: [Thread]
    }

    type Thread {
        id: ID!
        createdAt: String!
        updatedAt: String!
        content: String!
    }

    type Mutation {
        createThread(content: String!): Thread
    }
`;
