var getUrlParams = function (url) {
    return (url.match(/([^?=&]+)(=([^&]*))/g) || []).reduce(function (a, v) {
        var _a = v.split('='), key = _a[0], value = _a[1];
        if (a[key]) {
            a[key] = (typeof a[key] === 'string' ? [a[key]] : a[key]).concat(value);
        }
        else {
            a[key] = value;
        }
        return a;
    }, {});
};
export default getUrlParams;
