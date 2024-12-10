var exchange = function (sumUAH, currencyValues, exchangeCurrency) {
    var choseCurrency;
    for (var _i = 0, currencyValues_1 = currencyValues; _i < currencyValues_1.length; _i++) {
        var item = currencyValues_1[_i];
        if (item.currency === exchangeCurrency) {
            choseCurrency = item;
        }
        return sumUAH / choseCurrency.value;
    }
};
console.log(exchange(15567, [{ currency: 'USD', value: 25 }, { currency: 'EUR', value: 42 }], 'USD'));
