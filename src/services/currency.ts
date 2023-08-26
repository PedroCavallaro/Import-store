export function formatPrice(val: number) {
    return new Intl.NumberFormat("pt-BR", {
        currency: "BRL",
        style: "currency",
    }).format(Number(val));
}
