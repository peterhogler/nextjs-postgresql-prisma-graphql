export const typeDefs = `#graphql
    type Query {
        threads: [Thread]
        getThreadById(id: ID!): Thread
    }

    type Thread {
        id: ID!
        content: String!
        gif: String
        author: User
        createdAt: String!
        updatedAt: String!
    }

    type User {
        id: ID!
        email: String!
        name: String
        handle: String
        emailVerified: String
        image: String
        threads: [Thread!]!
        createdAt: String!
        updatedAt: String!
    }  

    type Mutation {
        createThread(content: String!, gif: String, authorId: ID!): Thread
        getThreadById(id: String!): Thread
    }
`;
