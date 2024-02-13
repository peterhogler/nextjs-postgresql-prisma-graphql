"use client";

import { AuthProviderProps } from "@/typings/next-auth";
import { SessionProvider } from "next-auth/react";
import React from "react";

export default function AuthProvider({ session, children }: AuthProviderProps) {
    return <SessionProvider session={session}>{children}</SessionProvider>;
}
