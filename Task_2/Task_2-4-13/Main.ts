interface CurrencyValue {
    currency: string;
    value: number;
}

function exchange(sumUAH: number, currencyValues: CurrencyValue[], exchangeCurrency: string): number {
    let choseCurrency: CurrencyValue | undefined;
    for (const item of currencyValues) {
        if (item.currency === exchangeCurrency) {
            choseCurrency = item;
        }
    }
    if (choseCurrency) {
        return sumUAH / choseCurrency.value;
    } else {
        throw new Error(`Currency ${exchangeCurrency} not found`);
    }
}

console.log(exchange(10000, [{currency: 'USD', value: 25}, {currency: 'EUR', value: 42}], 'USD'));

