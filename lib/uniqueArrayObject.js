var __spreadArray = (this && this.__spreadArray) || function (to, from) {
    for (var i = 0, il = from.length, j = to.length; i < il; i++, j++)
        to[j] = from[i];
    return to;
};
var uniqueArrayObject = function (arr, key) {
    return arr.reduce(function (acc, cur) {
        var keys = acc.map(function (v) { return v[key]; });
        return keys.includes(cur[key]) ? acc : __spreadArray(__spreadArray([], acc), [cur]);
    }, []);
};
export default uniqueArrayObject;
