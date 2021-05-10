var intersection = function (a, b) {
    var s = new Set(b);
    return a.filter(function (x) { return s.has(x); });
};
export default intersection;
