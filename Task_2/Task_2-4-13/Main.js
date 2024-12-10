function exchange(sumUAH, currencyValues, exchangeCurrency) {
    var choseCurrency;
    for (var _i = 0, currencyValues_1 = currencyValues; _i < currencyValues_1.length; _i++) {
        var item = currencyValues_1[_i];
        if (item.currency === exchangeCurrency) {
            choseCurrency = item;
        }
    }
    if (choseCurrency) {
        return sumUAH / choseCurrency.value;
    }
    else {
        throw new Error("Currency ".concat(exchangeCurrency, " not found"));
    }
}
console.log(exchange(10000, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
