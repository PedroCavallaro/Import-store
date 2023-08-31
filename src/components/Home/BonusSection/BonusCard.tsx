import { LiaShippingFastSolid } from "react-icons/lia";
interface BonusCardProps {
    icon: JSX.Element;
    title: string;
    text: string;
}

export default function BonusCard({ icon, text, title }: BonusCardProps) {
    return (
        <>
            <div className="flex flex-col justify-start px-2">
                {icon}
                <h2>{title}</h2>
                <p>{text}</p>
            </div>
        </>
    );
}
