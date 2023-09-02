import Hero from "@/components/Home/Hero/Hero";
import NewsLetter from "@/components/Home/Newsletter/NewsLetter";
import BonusSection from "@/components/Home/BonusSection/BonusSection";
import Footer from "@/components/Home/Footer/Footer";
import dynamic from "next/dynamic";
import ProductSection from "@/components/Home/ProductSection/ProductSection";

const DiscountSection = dynamic(
    () => import("@/components/Home/DiscountSection"),
    {
        ssr: false,
        loading: () => <div>OI</div>,
    }
);
const DiscountBanner = dynamic(
    () => import("@/components/Home/DiscountBanner")
);
export default function Home() {
    return (
        <main className="flex flex-col gap-8">
            <Hero />
            <ProductSection />

            <BonusSection />
            <DiscountBanner />
            <DiscountSection />
            <NewsLetter />

            <Footer />
        </main>
    );
}
