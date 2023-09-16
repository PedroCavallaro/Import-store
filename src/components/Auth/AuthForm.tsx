"use client";
import { useForm } from "react-hook-form";
import LabelInput from "../LabelInput";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import Button from "../Button";
import InternRedirectLink from "./InternRedirectLink";
import {
    authTypesAttributes,
    loginSchema,
    registerSchema,
} from "@/constants/auth";
import { AuthTypeObj } from "@/@types/types";
import { useAuth } from "@/contexts/AuthContext";
import Link from "next/link";
import { GoogleLogin } from "@react-oauth/google";
import { SocialLogin } from "./SocialLogin";

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
            <div className="flex flex-col">
                <LabelInput
                    label="Senha"
                    placeholder="Digite sua senha"
                    type="password"
                    errors={errors.password?.message}
                    {...register("password")}
                />
                {type === "login" && (
                    <Link
                        href={"/"}
                        className="underline text-right mt-1 hover:text-zinc-500 transition-all"
                    >
                        Esqueceu sua senha?
                    </Link>
                )}
            </div>
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
            <SocialLogin />
        </form>
    );
}
