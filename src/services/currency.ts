export function formatPrice(val: number) {
    return new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
    }).format(Number(val));
}
export const setDiscount = (val: number, amount: number) => {
    const updatedValue = val - val * (amount / 100);
    return formatPrice(updatedValue);
};
