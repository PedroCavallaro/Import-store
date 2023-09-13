import Hero from "@/components/Home/Hero/Hero";
import NewsLetter from "@/components/Home/Newsletter/NewsLetter";
import BonusSection from "@/components/Home/BonusSection/BonusSection";
import Footer from "@/components/Footer/Footer";
import dynamic from "next/dynamic";

const DiscountSection = dynamic(
    () => import("@/components/Home/DiscountSection"),
    {
        ssr: true,
        loading: () => <div>Carregando</div>,
    }
);
const DiscountBanner = dynamic(
    () => import("@/components/Home/DiscountBanner")
);
const ProductSection = dynamic(
    () => import("@/components/Home/ProductSection/ProductSection"),
    {
        ssr: true,
    }
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
