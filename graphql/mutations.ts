import { gql } from "@apollo/client";

export const CREATE_THREAD = gql`
    mutation CreateThread($content: String!, $gif: String, $authorId: ID!) {
        createThread(content: $content, gif: $gif, authorId: $authorId) {
            id
            content
            gif
            createdAt
            author {
                id
                name
                email
            }
        }
    }
`;

export const CREATE_COMMENT = gql`
    mutation Mutation($content: String!, $authorId: String!, $threadId: String!) {
        createComment(content: $content, authorId: $authorId, threadId: $threadId) {
            author {
                email
                id
                name
            }
            createdAt
            id
            content
            threadId {
                id
            }
            updatedAt
        }
    }
`;
