var throttle = function (fn, delay) {
    var wait = false;
    var throttled = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        if (wait)
            return;
        var val = fn.apply(void 0, args);
        wait = true;
        window.setTimeout(function () {
            wait = false;
        }, delay);
        return val;
    };
    return throttled;
};
export default throttle;
