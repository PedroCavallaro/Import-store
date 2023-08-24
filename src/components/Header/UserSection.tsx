import Button from "../Button";
import { AiOutlineHeart } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
export default function UserSection() {
    return (
        <nav>
            <ul className="flex gap-5 items-center ">
                <li>
                    <Button className="shadow-md rounded-full py-2 px-2 w-[10rem] hover:bg-zinc-100 transition-all ">
                        <span>Login</span>
                    </Button>
                </li>
                <li>
                    <button className="hover:text-red-600 transition-all">
                        <AiOutlineHeart size={30} />
                    </button>
                </li>
                <li>
                    <button className="hover:text-orange-500 transition-all">
                        <BiCart size={30} />
                    </button>
                </li>
            </ul>
        </nav>
    );
}
