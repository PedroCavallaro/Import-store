import Button from "@/components/Button";
import Input from "@/components/Input";
import { MdOutlineMailOutline } from "react-icons/md";

export default function EmailForm() {
    return (
        <form className="flex shadow-md justify-between items-center gap-3 w-[25rem] h-12">
            <MdOutlineMailOutline
                size={30}
                color={"#B5AFAF"}
                className="ml-2"
            />
            <Input
                type="text"
                placeholder="Digite seu email "
                className=" shadow-none"
            />
            <Button className="rounded-md bg-red-500 text-white px-2 h-full">
                <span>Inscrever-se</span>
            </Button>
        </form>
    );
}
