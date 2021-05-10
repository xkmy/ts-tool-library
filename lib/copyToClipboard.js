var copyToClipboard = function (value) {
    var _a, _b, _c;
    var el = document.createElement('textarea');
    el.value = value;
    el.setAttribute('readonly', '');
    el.style.position = 'absolute';
    el.style.left = '-9999px';
    document.body.appendChild(el);
    var selection = document.getSelection();
    var selected = selection && selection.rangeCount > 0 ? (_a = document.getSelection()) === null || _a === void 0 ? void 0 : _a.getRangeAt(0) : false;
    el.select();
    var success = document.execCommand('copy');
    document.body.removeChild(el);
    if (selected) {
        (_b = document.getSelection()) === null || _b === void 0 ? void 0 : _b.removeAllRanges();
        (_c = document.getSelection()) === null || _c === void 0 ? void 0 : _c.addRange(selected);
    }
    return { success: success, value: value };
};
export default copyToClipboard;
