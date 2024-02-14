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
                image
            }
        }
    }
`;

export const GET_THREAD = gql`
    query GetThreadById($getThreadByIdId: ID!) {
        getThreadById(id: $getThreadByIdId) {
            author {
                email
                name
                image
            }
            content
            createdAt
            gif
        }
    }
`;
