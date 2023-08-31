import Faq from "./Faq";
import Location from "./Location";

export default function Footer() {
    return (
        <section className="h-[15rem] bg-[#EAEAEA] flex items-center justify-between px-2">
            <Location />
            <div>
                <Faq />
                <div></div>
            </div>
        </section>
    );
}
