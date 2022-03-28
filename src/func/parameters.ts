export function sumPrice(...prices: number[]): number {
    return prices.reduce(((prevTotal: number, total: number) => {
        return prevTotal + total;
    }), 0);
}