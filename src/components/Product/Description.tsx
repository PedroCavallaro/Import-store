export default function Description({ description }: { description: string }) {
    return (
        <section className="px-4 py-4 ml-3 flex flex-col gap-3 ">
            <h1 className="font-bold text-2xl">Descrição</h1>
            <p className="font-[30px]">{description}</p>
        </section>
    );
}
