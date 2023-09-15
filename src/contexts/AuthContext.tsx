import { RegisterUserData, SignInData } from "@/@types/types";
import { api } from "@/lib/api";
import { createContext, ReactNode, useContext } from "react";

interface AuthContextValues {
    loginUser: ({ email, password }: SignInData) => void;
    registerUser: ({ email, name, password }: RegisterUserData) => void;
}

const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    async function loginUser({ email, password }: SignInData) {
        await api
            .post("auth/login", {
                email,
                password,
            })
            .then((res) => console.log(res));
    }

    async function registerUser({ email, name, password }: RegisterUserData) {
        await api.post("auth/register", {
            email,
            name,
            password,
        });
    }

    return (
        <AuthContext.Provider value={{ loginUser, registerUser }}>
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
