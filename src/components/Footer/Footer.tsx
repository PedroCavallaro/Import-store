import FooterLinks from "./FooterLinks";
import Location from "./Location";

export default function Footer() {
    return (
        <section className="h-[12rem] mt-10 bg-[#EAEAEA] flex items-center justify-between px-2 relative bottom-0">
            <Location />
            <div className="flex mr-2 gap-10">
                <FooterLinks heading="Produtos" type="Products" />
                <FooterLinks heading="Sobre" type="Products" />
                <FooterLinks heading="Suporte" type="Products" />
                <div></div>
            </div>
        </section>
    );
}
