import Hero from "@/components/Home/Hero/Hero";
import ProductSection from "@/components/Home/ProductSection/ProductSection";
import NewsLetter from "@/components/Home/Newsletter/NewsLetter";
import DiscountSection from "@/components/Home/DiscountSection";
import BonusSection from "@/components/Home/BonusSection/BonusSection";
import Footer from "@/components/Footer";

export default function Home() {
    return (
        <main className="flex flex-col gap-8">
            <Hero />
            <ProductSection />
            <BonusSection />
            <DiscountSection />
            <NewsLetter />
            <Footer />
        </main>
    );
}
