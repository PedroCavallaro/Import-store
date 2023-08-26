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
            <div className="flex gap-4">
                <h2>Produtos</h2>

                <div className="flex gap-2">
                    <p>Linha de preço</p>
                    <div className="w-[10rem]">
                        <span>R$ 0 - {price}</span>
                    </div>
                    <Input
                        className="appearance-none  shadow-none  [&::-webkit-slider-runnable-track]:bg-black/25 [&::-webkit-slider-thumb]:appearance-none  [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[1rem] [&::-webkit-slider-thumb]:rounded-full [&::-webkit-slider-thumb]:bg-orange-500 [&::-webkit-slider-thumb]:scale-125"
                        type="range"
                        min={0}
                        max={3000}
                        onChange={(e) => handlePriceChange(e)}
                    />
                </div>
            </div>
        </>
    );
}
