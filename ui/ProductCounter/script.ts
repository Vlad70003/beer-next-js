interface handleProductCounterArg {
    status?: any;
    productCount: number;
    setProductCount: (value: number) => void;
    action: string;
}

export const handleProductCounter = ({status, productCount, setProductCount, action}: handleProductCounterArg) => {

    if ( productCount === 0 && action === "increase") {
        return
    }

    if (status && action === "increase") {
        setProductCount(productCount - 0.5)
    } else if (action === "increase") {
        setProductCount(productCount - 1);
    }

    if( status && action === "decrease" ) {
        setProductCount(productCount + 0.5)
    } else if (action === "decrease") {
        setProductCount(productCount + 1);
    }

}