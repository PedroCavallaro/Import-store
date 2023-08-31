export type Product = {
    id: string;
    name: string;
    price: number;
    coverImage: string;
    pictures: Array<string>;
    Category?: Category;
};
export type ProductWithDiscount = {
    id: string;
    isActive: boolean;
    amount: number;
    productId: string;
    Product: Product;
};
export type Category = {
    id: string;
    description: string;
};
export type FooterLink = "FAQ" | "Support" | "About";
