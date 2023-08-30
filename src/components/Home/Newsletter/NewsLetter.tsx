import Button from "../../Button";
import Input from "../../Input";
import { MdOutlineMailOutline } from "react-icons/md";
import EmailForm from "./EmailForm";
export default function NewsLetter() {
    return (
        <section className="flex flex-col gap-4 items-center justify-center">
            <h2 className="text-2xl font-bold text-center ">
                Se inscreva para nossa newsletter, e
                <p>fique por dentro de todas as</p>
                <p className="text-red-500">novidades</p>
            </h2>
            <p className="text-[#B5AFAF]">
                Inscritos podem ganhar até 20% de desconto apenas se inscrevendo
            </p>
            <EmailForm />
            <p className="text-[#B5AFAF]">
                Mas pode relaxar, é possível remover sua inscrição a qualquer
                momento
            </p>
        </section>
    );
}
