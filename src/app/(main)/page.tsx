import Hero from "@/components/Home/Hero/Hero";
import ProductSection from "@/components/Home/ProductSection/ProductSection";
import NewsLetter from "@/components/Home/Newsletter/NewsLetter";
import Image from "next/image";

export default function Home() {
    return (
        <main className="flex flex-col gap-8">
            <Hero />
            <ProductSection />
            <NewsLetter />
        </main>
    );
}
