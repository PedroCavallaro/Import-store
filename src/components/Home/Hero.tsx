import HeroSlider from "./HeroSlider/HeroSlider";

export default function Hero() {
    return (
        <section className="flex items-center mt-8 px-3">
            <div className="w-[50rem] h-[30rem] bg-gray-600 flex items-center justify-center">
                <HeroSlider />
            </div>
        </section>
    );
}
