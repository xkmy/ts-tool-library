var formatPrice = function (price) {
    var _price = price.toString();
    var isDecimal = false;
    var needZeroCount = 2;
    for (var i = 0; i < _price.length; i++) {
        var c = _price.charAt(i);
        if (c === '.') {
            isDecimal = true;
        }
        else if (isDecimal) {
            needZeroCount = needZeroCount - 1;
        }
    }
    if (needZeroCount === 1) {
        _price += '0';
    }
    else if (needZeroCount === 2) {
        _price += '.00';
    }
    return _price;
};
export default formatPrice;
