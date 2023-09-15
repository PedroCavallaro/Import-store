import Link from "next/link";

export default function InternRedirectLink({ type }: { type: string }) {
    return (
        <>
            {type === "login" ? (
                <p className="flex items-center justify-center gap-2">
                    Não tem uma conta?{" "}
                    <Link
                        href="/auth/register"
                        className="underline font-semibold hover:text-zinc-700 transition-all"
                    >
                        Cadastre-se
                    </Link>
                </p>
            ) : (
                <p className="flex items-center justify-center gap-2">
                    Já tem uma conta?{" "}
                    <Link
                        href="/auth/login"
                        className="underline font-semibold hover:text-zinc-700 transition-all"
                    >
                        Voltar para o login
                    </Link>
                </p>
            )}
        </>
    );
}
