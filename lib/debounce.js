var debounce = function (func, wait, options) {
    var _a, _b;
    if (wait === void 0) { wait = 100; }
    if (options === void 0) { options = {}; }
    var timeoutId;
    var isImmediate = (_a = options.isImmediate) !== null && _a !== void 0 ? _a : false;
    var callback = (_b = options.callback) !== null && _b !== void 0 ? _b : false;
    var maxWait = options.maxWait;
    var lastInvokeTime = Date.now();
    var nextInvokeTimeout = function () {
        if (maxWait !== undefined) {
            var timeSinceLastInvocation = Date.now() - lastInvokeTime;
            if (timeSinceLastInvocation + wait >= maxWait) {
                return maxWait - timeSinceLastInvocation;
            }
        }
        return wait;
    };
    var debounced = function () {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var context = this;
        return new Promise(function (resolve) {
            var invokeFunction = function () {
                timeoutId = undefined;
                lastInvokeTime = Date.now();
                if (!isImmediate) {
                    var result = func.apply(context, args);
                    callback && callback(result);
                }
            };
            var shouldCallNow = isImmediate && timeoutId === undefined;
            if (timeoutId !== undefined) {
                clearTimeout(timeoutId);
            }
            timeoutId = setTimeout(invokeFunction, nextInvokeTimeout());
            if (shouldCallNow) {
                var result = func.apply(context, args);
                callback && callback(result);
                return resolve(result);
            }
        });
    };
    return debounced;
};
export default debounce;
