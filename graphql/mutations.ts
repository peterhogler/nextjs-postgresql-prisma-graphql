import { gql } from "@apollo/client";

export const CREATE_THREAD = gql`
    mutation CreateThread($content: String!, $gif: String!) {
        createThread(content: $content, gif: $gif) {
            content
            gif
        }
    }
`;
