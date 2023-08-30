export type Product = {
    id: string;
    name: string;
    price: number;
    coverImage: string;
    pictures: Array<string>;
    dicountActive?: boolean;
};

export type Category = {
    id: string;
    description: string;
};
export type ProductWithDiscount = {
    id: string;
    isActive: boolean;
    amount: number;
    productId: string;
    Product: Product;
};
