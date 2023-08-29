import { FaRegSadTear } from "react-icons/fa";
export default function NoItens() {
    return (
        <div className="flex flex-col h-[20rem] justify-center items-center text-lg">
            <FaRegSadTear />
            <p>Não encontramos nenhum resultado</p>
        </div>
    );
}
