import { AuthTypeObj } from "@/@types/types";
import { z } from "zod";

export const registerSchema = z.object({
    name: z.string().min(3, "O nome precisa ser maior"),
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Minimo 8 caracteres"),
});
export const loginSchema = z.object({
    email: z.string().email("Email inválido"),
    password: z.string().min(8, "Minimo 8 caracteres"),
});
export const authTypesAttributes: AuthTypeObj = {
    login: {
        title: "Login",
        buttonText: "Entrar",
        authFunction: () => true,
    },
    register: {
        title: "Cadastro",
        buttonText: "Cadastre-se",
        authFunction: () => true,
    },
};
