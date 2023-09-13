import Categories from "./Categories";
import dynamic from "next/dynamic";

const HeroSlider = dynamic(() => import("./HeroSlider/HeroSlider"), {
    ssr: true,
    loading: () => <p>Carregando</p>,
});

export default function Hero() {
    return (
        <section className="flex items-center gap-[8rem] px-4 mt-8">
            <div className="w-[50rem] h-[30rem] ">
                <HeroSlider />
            </div>
            <div>
                <Categories />
            </div>
        </section>
    );
}
