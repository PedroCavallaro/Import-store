import Button from "../Button";
import Input from "../Input";
import { BsSearch } from "react-icons/bs";
export default function SearchBar() {
    return (
        <>
            <label
                htmlFor=""
                className="flex rounded-full shadow-md items-center gap-2 px-2 "
            >
                <Button aria-label="cart">
                    <BsSearch />
                </Button>
                <Input
                    className="shadow-none py-2 outline-none w-[28rem]"
                    placeholder="Pesquisar produtos"
                />
            </label>
        </>
    );
}
