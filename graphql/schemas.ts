export const typeDefs = `#graphql
    type Query {
        threads: [Thread]
        getThreadById(id: ID!): Thread
    }

    type Thread {
        id: ID!
        createdAt: String!
        updatedAt: String!
        content: String!
        gif: String!
    }

    type Mutation {
        createThread(content: String!, gif: String!): Thread
        getThreadById(id: String!): Thread
    }
`;
