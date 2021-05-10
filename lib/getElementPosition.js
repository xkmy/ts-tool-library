"use strict";
var getElementPosition = function (element) {
    if (element) {
        var _a = element.getBoundingClientRect(), height = _a.height, width = _a.width, x = _a.x, y = _a.y, bottom = _a.bottom, left = _a.left, right = _a.right, top_1 = _a.top;
        return { x: x, y: y, bottom: bottom, left: left, right: right, top: top_1, width: width, height: height };
    }
};
