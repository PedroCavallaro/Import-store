import SearchBar from "./SearchBar";
import UserSection from "./UserSection";

export default function Header() {
    return (
        <header className=" px-2 shadow-md h-[80px] flex gap-4 justify-evenly items-center">
            <h1>LOGO</h1>
            <SearchBar />
            <UserSection />
        </header>
    );
}
