import Hero from "@/components/Home/Hero/Hero";
import NewsLetter from "@/components/Home/Newsletter/NewsLetter";
import BonusSection from "@/components/Home/BonusSection/BonusSection";
import Footer from "@/components/Home/Footer/Footer";
import dynamic from "next/dynamic";
import ProductSection from "@/components/Home/ProductSection/ProductSection";
import { Suspense } from "react";

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
            <Suspense fallback={<div>Carregando</div>}>
                <BonusSection />
                <DiscountBanner />
                <DiscountSection />
                <NewsLetter />
            </Suspense>
            <Footer />
        </main>
    );
}
