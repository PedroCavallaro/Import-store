export type Product = {
    id: string;
    name: string;
    price: number;
    description: string;
    coverImage: string;
    pictures: Array<string>;
    categoryId?: string;
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
export type FooterLink = "Products" | "Support" | "About";

export type AuthTypeObj = {
    login: AuthConst;
    register: AuthConst;
};

export type AuthConst = {
    title: string;
    buttonText: string;
    authFunction: Function;
};
