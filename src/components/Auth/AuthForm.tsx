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

export default function AuthForm({ type }: { type: keyof AuthTypeObj }) {
    const schema = type === "login" ? loginSchema : registerSchema;
    type FormData = z.infer<typeof schema>;

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
            action=""
            onSubmit={handleSubmit((data) => console.log("a"))}
            className="flex flex-col px-2  gap-5 w-[35rem]"
        >
            <h1 className="text-[30px] font-bold">{type}</h1>
            {type !== "login" && (
                <LabelInput
                    label="Nome"
                    type="text"
                    //@ts-ignore
                    errors={errors.name?.message}
                    placeholder="Digite seu email"
                    //@ts-ignore
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
                    <span className="text-white">Entrar</span>
                </Button>
            </div>
            <InternRedirectLink type={type} />
            <GoogleLogin />
        </form>
    );
}
