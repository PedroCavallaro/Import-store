export type Product = {
    id: string;
    name: string;
    price: number;
    coverImage: string;
    pictures: Array<string>;
};

export type Category = {
    id: string;
    description: string;
};
