"use client";
import Link from "next/link";
import Button from "../Button";
import { AiOutlineHeart, AiOutlineUser } from "react-icons/ai";
import { BiCart } from "react-icons/bi";
import { useAuth } from "@/contexts/AuthContext";
export default function UserSection() {
    const { isAuth } = useAuth();
    return (
        <nav>
            <ul className="flex gap-5 items-center ">
                <li className="flex flex-col items-center gap-1">
                    {isAuth ? (
                        <>
                            <Button
                                aria-label="itens salvos"
                                name="heart"
                                className="transition-all hover:text-zinc-700"
                            >
                                <AiOutlineUser size={30} />
                            </Button>
                            <p className="text-xs">Minha conta</p>
                        </>
                    ) : (
                        <div>
                            <Button className="shadow-md rounded-full py-2 px-2 w-[10rem] hover:bg-zinc-100 transition-all ">
                                <Link
                                    href={"/auth/login"}
                                    className="w-full h-full"
                                >
                                    <span>Login</span>
                                </Link>
                            </Button>
                        </div>
                    )}
                </li>
                <li className="flex flex-col items-center gap-1">
                    <Button
                        aria-label="itens salvos"
                        name="heart"
                        className="hover:text-red-600 transition-all"
                    >
                        <AiOutlineHeart size={30} />
                    </Button>
                    <p className="text-xs">Itens salvos</p>
                </li>
                <li className="flex flex-col items-center gap-1">
                    <Button
                        aria-label="carrinho"
                        className="hover:text-orange-500 transition-all"
                    >
                        <BiCart size={30} />
                    </Button>
                    <p className="text-xs">Carrinho</p>
                </li>
            </ul>
        </nav>
    );
}
