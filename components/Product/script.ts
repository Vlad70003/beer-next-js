interface handleProductionCountArg {
    productCount: string;
    status: string;
}

export const handleProductionCount = ({productCount, status}: handleProductionCountArg) => {
    if ( status ) {
        return "цена за 1 л без тары"
    } else {
        return productCount
    }
}