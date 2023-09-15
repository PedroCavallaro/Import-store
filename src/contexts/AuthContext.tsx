import { api } from "@/lib/api";
import { ReactNode } from "react";
import { createContext } from "react";

interface AuthContextValues {
    login: () => void;
    register: () => void;
}

const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const login = async () => {};
    const register = async () => {};
    return (
        <AuthContext.Provider value={{ login, register }}>
            {children}
        </AuthContext.Provider>
    );
};
