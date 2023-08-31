import { FaMapMarkerAlt } from "react-icons/fa";

export default function Location() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h1 className="text-2xl">LOGO</h1>
                <div className="flex gap-2 text-gray-400">
                    <FaMapMarkerAlt />
                    <p className="w-[20rem]">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit.
                        Impedit iure eaque accusamus voluptatem a delectus,
                        reprehenderit minus ipsa
                    </p>
                </div>
            </div>
        </>
    );
}
