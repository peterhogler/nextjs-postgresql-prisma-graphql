import { gql } from "@apollo/client";

export const GET_THREADS = gql`
    query Threads {
        threads {
            id
            content
            createdAt
            updatedAt
            gif
            author {
                id
                name
                email
            }
        }
    }
`;
