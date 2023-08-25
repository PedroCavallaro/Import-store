import CategoryCard from "./CategoryCard";

export default function Categories() {
    return (
        <div className="flex w-[35rem] justify-center gap-2  flex-wrap ">
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
            <CategoryCard />
        </div>
    );
}
