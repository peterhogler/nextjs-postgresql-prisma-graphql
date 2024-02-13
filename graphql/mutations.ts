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
