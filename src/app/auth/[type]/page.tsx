import { redirect } from "next/navigation";
export default function Auth({ params }: { params: { type: string } }) {
    if (params.type !== "register") {
        redirect("/");
    }
    return (
        <main>
            <section></section>
        </main>
    );
}
