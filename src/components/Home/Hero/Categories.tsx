"use client";
import { useCategory } from "@/hooks/useCategory";
import CategoryCard from "./CategoryCard";

export default function Categories() {
    const { categories } = useCategory();
    return (
        <div className="flex w-[35rem] justify-center gap-2  flex-wrap ">
            {categories?.map(({ description, id }, index) => {
                return (
                    <CategoryCard
                        index={index}
                        description={description}
                        id={id}
                        key={id}
                    />
                );
            })}
        </div>
    );
}
