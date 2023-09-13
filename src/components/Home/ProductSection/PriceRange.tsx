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
                <div className="flex gap-2 rounded-full shadow-md py-2 px-2">
                    <label id="price-range-label" htmlFor="rangeInput">
                        Linha de preço
                    </label>
                    <div className="w-[10rem]">
                        <span className="text-orange-400">R$ 0 - {price}</span>
                    </div>
                    <div className="relative w-[15rem]">
                        <Input
                            max={4000}
                            type="range"
                            aria-labelledby="price-range-label"
                            id="rangeInput"
                            className="w-48 shadow-none accent-orange-500  outline-none"
                            defaultValue={4000}
                            onChange={handlePriceChange}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
