import { faqLinks } from "@/app/constants/constants";
import Link from "next/link";

export default function Faq() {
    return (
        <>
            <div className="flex flex-col gap-2">
                <h3>Produtos</h3>
                <ul>
                    {faqLinks.map(({ href, title }, index) => {
                        return (
                            <li key={index.toString()}>
                                <Link
                                    href={href}
                                    className="text-gray-400 hover:text-gray-800 transition-all"
                                >
                                    {title}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
            </div>
        </>
    );
}
