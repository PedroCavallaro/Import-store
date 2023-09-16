import Link from "next/link";
import SearchBar from "./SearchBar";
import UserSection from "./UserSection";

export default function Header({ isAuth }: { isAuth: boolean }) {
    return (
        <header className=" px-2 shadow-md h-[80px] flex gap-4 justify-around items-center">
            <Link href={"/"}>LOGO</Link>
            <SearchBar />
            <UserSection isAuth={isAuth} />
        </header>
    );
}
