import Link from "next/link";
import SearchBar from "./SearchBar";
import UserSection from "./UserSection";

export default function Header() {
    return (
        <header className=" px-2 shadow-md h-[80px] flex gap-4 justify-around items-center">
            <Link href={"/"}>LOGO</Link>
            <SearchBar />
            <UserSection />
        </header>
    );
}
