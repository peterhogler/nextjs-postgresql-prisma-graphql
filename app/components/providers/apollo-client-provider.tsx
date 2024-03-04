"use client";

import { ApolloClient, InMemoryCache, ApolloProvider } from "@apollo/client";

const publicUrl = "https://x-clone-app-ylef.vercel.app/api/graphql";

const client = new ApolloClient({
    uri: "https://x-clone-app-ylef.vercel.app/api/graphql",

    cache: new InMemoryCache(),
});

export default function ApolloClientProvider({ children }: { children: React.ReactNode }) {
    return <ApolloProvider client={client}>{children}</ApolloProvider>;
}
