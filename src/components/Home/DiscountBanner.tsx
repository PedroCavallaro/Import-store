import Button from "../Button";

export default function DiscountBanner() {
    return (
        <section className="flex justify-center items-center px-4 py-4 ml-3">
            <div className="h-[20rem] w-full rounded-lg bg-gray-600 flex justify-between px-2">
                <div className="flex flex-col justify-self-start py-2">
                    <h2>Oferta Limitada</h2>
                    <h2 className="text-2xl font-bold w-[20rem]">
                        50% de desconto em todos os aso rem Ipsum is simply
                        dummy text of the printing and typesetting in.{" "}
                    </h2>
                </div>
                <Button>
                    <span>Garanta já o seu</span>
                </Button>
            </div>
            <div></div>
        </section>
    );
}
