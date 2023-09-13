import { FooterLink } from "@/@types/types";
import { footerLinks } from "@/constants/constants";
import Link from "next/link";

interface FooterLinksProps {
    heading: string;
    type: FooterLink;
}

export default function FooterLinks({ heading, type }: FooterLinksProps) {
    return (
        <div className="flex flex-col gap-2">
            <p>{heading}</p>
            <ul>
                {footerLinks[type].map(({ href, title }, index) => {
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
    );
}
