import Input from "@/components/Input";
import { ChangeEvent } from "react";
interface PriceRangeProps {
    price: string;
    handlePriceChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export default function PriceRange({
    handlePriceChange,
    price,
}: PriceRangeProps) {
    return (
        <>
            <div className="flex gap-7 px-2 items-center">
                <h2 className="text-2xl font-bold">Produtos</h2>
                <div className="flex gap-2 rounded-full shadow-lg py-2 px-2">
                    <p>Linha de preço</p>
                    <div className="w-[10rem]">
                        <span className="text-orange-400">R$ 0 - {price}</span>
                    </div>
                    <div className="relative w-[15rem]">
                        <Input
                            max={3000}
                            type="range"
                            className="w-48 shadow-none"
                            onChange={handlePriceChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
