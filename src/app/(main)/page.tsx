import Hero from "@/components/Home/Hero/Hero";
import ProductSection from "@/components/Home/ProductSection/ProductSection";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col gap-8">
            <Hero />
            <section className="px-4 py-4 ml-3">
                <ProductSection />
            </section>
        </main>
    );
}
