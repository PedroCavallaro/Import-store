import Button from "../Button";

export default function ProductVideo() {
    return (
        <div className="absolute">
            <div className="flex flex-col relative -top-3 left-0  ">
                <div className="w-[6rem] h-[6rem] bg-gray-800 rounded-full flex items-center justify-center overflow-hidden">
                    <Button>
                        <video autoPlay muted loop>
                            <source src="/VIDEO 10s.mp4" type="video/mp4" />
                        </video>
                    </Button>
                </div>
                <p className="text-center mt-1 font-bold">Video do produto</p>
            </div>
        </div>
    );
}
