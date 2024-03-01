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
        likes: [Like!]!
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
        likedThreads: [Thread!]!
    }
    
    type Comment {
        id: ID!
        author: User!
        content: String!
        threadId: Thread!
        createdAt: String!
        updatedAt: String!
    }


    type Like {
        id: ID!
        thread: Thread!
        user: User!
    }

    type Mutation {
        createThread(content: String!, gif: String, authorId: ID!): Thread
        createComment(content: String!, authorId: ID!, threadId: ID!): Comment
        createLike(userId: ID!, threadId: ID!): Like
        getThreadById(id: String!): Thread
        
    }

`;
