import type { Metadata } from "next";
import { Karla } from "next/font/google";
import "./globals.css";
import ApolloClientProvider from "./components/providers/apollo-client-provider";
import NavigationSidebar from "./components/navigation-sidebar";
import TrendingSidebar from "./components/trending-sidebar";
import AuthProvider from "./components/providers/auth-provider";
import { getServerSession } from "next-auth";

const karla = Karla({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "X Clone by / Peter ",
    description: "X Clone",
};

export default async function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    const session = await getServerSession();

    return (
        <html lang="en">
            <body className={`${karla.className} relative flex justify-center max-w-7xl m-auto`}>
                <ApolloClientProvider>
                    <AuthProvider session={session}>
                        <NavigationSidebar />
                        <main>{children}</main>
                        <TrendingSidebar />
                    </AuthProvider>
                </ApolloClientProvider>
            </body>
        </html>
    );
}
