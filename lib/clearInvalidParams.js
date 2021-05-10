var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var clearInvalidParams = function (params) {
    if (typeof params === 'object') {
        var _params = __assign({}, params);
        for (var key in _params) {
            var value = _params[key];
            if (typeof value === 'string' && value) {
                value = value.trim();
                _params[key] = value;
            }
            if (value === undefined || value === null || value === '') {
                delete _params[key];
            }
        }
        return _params;
    }
    return params;
};
export default clearInvalidParams;
