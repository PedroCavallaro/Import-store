"use client";
import { useForm } from "react-hook-form";
import LabelInput from "../LabelInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../Button";
import InternRedirectLink from "./InternRedirectLink";
import GoogleLogin from "./GoogleLogin";
import {
    authTypesAttributes,
    loginSchema,
    registerSchema,
} from "@/constants/auth";
import { AuthTypeObj } from "@/@types/types";
import { useAuth } from "@/contexts/AuthContext";

export default function AuthForm({ type }: { type: keyof AuthTypeObj }) {
    const { loginUser, registerUser } = useAuth();

    const schema = type === "login" ? loginSchema : registerSchema;

    type FormData = z.infer<typeof schema> & {
        type: "register";
        name: string;
    };

    const {
        handleSubmit,
        formState: { errors },
        register,
    } = useForm<FormData>({
        mode: "onBlur",
        resolver: zodResolver(schema),
    });

    return (
        <form
            onSubmit={handleSubmit(({ email, password, name }) =>
                type === "login"
                    ? loginUser({ email, password })
                    : registerUser({ name, email, password })
            )}
            className="flex flex-col px-2  gap-5 w-[35rem]"
        >
            <h1 className="text-[30px] font-bold">
                {authTypesAttributes[type].title}
            </h1>
            {type !== "login" && (
                <LabelInput
                    label="Nome"
                    type="text"
                    errors={errors.name?.message}
                    placeholder="Digite seu Nome"
                    {...register("name")}
                />
            )}
            <LabelInput
                label="Email"
                type="email"
                errors={errors.email?.message}
                placeholder="Digite seu email"
                {...register("email")}
            />
            <LabelInput
                label="Senha"
                placeholder="Digite sua senha"
                type="password"
                errors={errors.password?.message}
                {...register("password")}
            />
            <div className="flex flex-col gap-2">
                <Button
                    type="submit"
                    className="bg-blue-900 h-[3rem] rounded-md"
                >
                    <span className="text-white">
                        {authTypesAttributes[type].buttonText}
                    </span>
                </Button>
            </div>
            <InternRedirectLink type={type} />
            <GoogleLogin />
        </form>
    );
}
