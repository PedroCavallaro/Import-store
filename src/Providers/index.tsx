"use client";
import { AuthProvider } from "@/contexts/AuthContext";
import { queryClient } from "@/lib/quryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { ReactNode } from "react";
export default function Providers({ children }: { children: ReactNode }) {
    return (
        <QueryClientProvider client={queryClient}>
            <AuthProvider>{children}</AuthProvider>
        </QueryClientProvider>
    );
}
