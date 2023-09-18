"use client";

export default function VideoModal({ videoPath }: { videoPath: string }) {
    return (
        <div className="bg-black opacity-100 z-50 w-[30rem] h-[40rem] flex items-center justify-center">
            <video controls autoPlay muted loop>
                <source src="/VIDEO 10s.mp4" type="video/mp4" />
            </video>
        </div>
    );
}
