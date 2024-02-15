export const typeDefs = `#graphql
    type Query {
        threads: [Thread]
        getThreadById(id: ID!): Thread
    }

    type Thread {
        id: ID!
        author: User
        content: String!
        gif: String
        createdAt: String!
        updatedAt: String!
        comments: [Comment!]!
    }

    type User {
        id: ID!
        email: String!
        name: String
        handle: String
        emailVerified: String
        image: String
        createdAt: String!
        updatedAt: String!
        threads: [Thread!]!
        comments: [Comment!]!
    }
    
    type Comment {
        id: ID!
        author: User!
        content: String!
        threadId: Thread!
        createdAt: String!
        updatedAt: String!
    }


    type Mutation {
        createThread(content: String!, gif: String, authorId: ID!): Thread
        createComment(content: String!, authorId: String!, threadId: String!): Comment
        getThreadById(id: String!): Thread
    }
`;
