"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import { MediaProvider } from "@/contexts/MediaContext";
import { queryClient } from "@/lib/quryClient";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
export default function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <GoogleOAuthProvider
                clientId={process.env.NEXT_PUBLIC_GOOGLE_CLIENT_ID!}
            >
                <AuthProvider>
                    <MediaProvider>{children}</MediaProvider>
                </AuthProvider>
            </GoogleOAuthProvider>
        </QueryClientProvider>
    );
}
