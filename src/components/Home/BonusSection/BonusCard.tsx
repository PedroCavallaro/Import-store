import { LiaShippingFastSolid } from "react-icons/lia";
interface BonusCardProps {
    icon: JSX.Element;
    title: string;
    text: string;
}

export default function BonusCard({ icon, text, title }: BonusCardProps) {
    return (
        <>
            <div className="flex flex-col gap-2 justify-start px-2 shadow-lg rounded-2xl py-2 w-[17rem] h-[10rem]">
                {icon}
                <h2 className="text-lg font-bold">{title}</h2>
                <p className="text-sm">{text}</p>
            </div>
        </>
    );
}
