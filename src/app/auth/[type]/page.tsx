import { AuthTypeObj } from "@/@types/types";
import AuthForm from "@/components/Auth/AuthForm";
import { redirect } from "next/navigation";

export default function Auth({
    params,
}: {
    params: { type: keyof AuthTypeObj };
}) {
    if (params.type !== "register" && params.type !== "login") {
        redirect("/");
    }
    const { type } = params;
    return (
        <main className="w-full ">
            <section className="flex relative h-screen">
                <div className="w-[70%] flex justify-center mt-[5rem] ">
                    <AuthForm type={type} />
                </div>
                <div className="w-[30%] bg-gray-700"></div>
            </section>
        </main>
    );
}
