import Hero from "@/components/Home/Hero/Hero";
import ProductSection from "@/components/Home/ProductSection/ProductSection";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col gap-5">
            <Hero />
            <ProductSection />
        </main>
    );
}
