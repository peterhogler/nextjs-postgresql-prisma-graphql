import { gql } from "@apollo/client";

export const GET_THREADS = gql`
    query Threads {
        threads {
            id
            author {
                email
                id
                image
                name
            }
            content
            gif
            createdAt
            updatedAt
            comments {
                author {
                    id
                }
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
            id
            updatedAt
            comments {
                content
                createdAt
                author {
                    email
                    name
                }
            }
        }
    }
`;
