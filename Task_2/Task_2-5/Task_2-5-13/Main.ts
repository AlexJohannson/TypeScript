interface CurrencyValue {
    currency: string;
    value: number;
}


let exchange = (sumUAH: number, currencyValues: CurrencyValue[], exchangeCurrency: string): number => {
    let choseCurrency;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choseCurrency = item;
        }
        return sumUAH / choseCurrency.value;
    }
}

console.log(exchange(15567, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));