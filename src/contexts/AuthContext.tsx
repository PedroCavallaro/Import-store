import { RegisterUserData, SignInData } from "@/@types/types";
import { api } from "@/lib/api";
import { setTokenOnCookies } from "@/services/auth";
import { createContext, ReactNode, useContext, useState } from "react";
import { useRouter } from "next/navigation";
interface AuthContextValues {
    loginUser: ({ email, password }: SignInData) => void;
    registerUser: ({ email, name, password }: RegisterUserData) => void;
    isAuth: boolean;
    isAuthLoading: boolean;
}

const AuthContext = createContext({} as AuthContextValues);

export const AuthProvider = ({ children }: { children: ReactNode }) => {
    const router = useRouter();
    async function loginUser({ email, password }: SignInData) {
        setiIsAuthLoading(true);
        await api
            .post<{ token: string }>("auth/login", {
                email,
                password,
            })
            .then((res) => {
                const { token } = res.data;
                setTokenOnCookies(token);
                router.push("/");
            });
        setiIsAuthLoading(true);
    }

    async function registerUser({ email, name, password }: RegisterUserData) {
        setiIsAuthLoading(true);
        await api
            .post<{ token: string }>("auth/register", {
                email,
                name,
                password,
            })
            .then((res) => {
                const { token } = res.data;
                setTokenOnCookies(token);
                router.push("/");
            });
        setiIsAuthLoading(true);
    }
    const [isAuthLoading, setiIsAuthLoading] = useState(false);
    const isAuth = true;
    return (
        <AuthContext.Provider
            value={{ loginUser, registerUser, isAuthLoading, isAuth }}
        >
            {children}
        </AuthContext.Provider>
    );
};
export const useAuth = () => useContext(AuthContext);
