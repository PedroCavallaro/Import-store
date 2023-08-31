import { LiaShippingFastSolid } from "react-icons/lia";
import BonusCard from "./BonusCard";
const bonusCardContent = [
    {
        icon: <LiaShippingFastSolid size={30} color={"#FCBF49"} />,
        title: "Entrega Rápida",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        icon: <LiaShippingFastSolid size={30} color={"#FCBF49"} />,
        title: "Entrega Rápida",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        icon: <LiaShippingFastSolid size={30} color={"#FCBF49"} />,
        title: "Entrega Rápida",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
    {
        icon: <LiaShippingFastSolid size={30} color={"#FCBF49"} />,
        title: "Entrega Rápida",
        text: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
    },
];
export default function BonusSection() {
    return (
        <section className="px-4 py-4 ml-3">
            <h2 className="text-2xl font-bold">
                Além do produto, nós também garantimos
            </h2>
            <div className="flex items-center gap-7">
                {bonusCardContent.map(({ icon, text, title }, index) => {
                    return (
                        <BonusCard
                            icon={icon}
                            text={text}
                            title={title}
                            key={index.toString()}
                        />
                    );
                })}
            </div>
        </section>
    );
}
