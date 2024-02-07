import { gql } from "@apollo/client";

export const CREATE_THREAD = gql`
    mutation CreateThread($content: String!) {
        createThread(content: $content) {
            content
        }
    }
`;
