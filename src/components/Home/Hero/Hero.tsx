import Categories from "./Categories";
import HeroSlider from "./HeroSlider/HeroSlider";

export default function Hero() {
    return (
        <section className="flex items-center gap-[8rem] px-4 mt-8">
            <div className="w-[67rem] h-[30rem] ">
                <HeroSlider />
            </div>
            <div>
                <Categories />
            </div>
        </section>
    );
}
