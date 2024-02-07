import { gql } from "@apollo/client";

export const GET_THREADS = gql`
    query Threads {
        threads {
            content
            createdAt
            id
            updatedAt
        }
    }
`;
