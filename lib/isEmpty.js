var isEmpty = function (val) {
    if (Array.isArray(val) && val.length === 0) {
        return true;
    }
    if (typeof val === 'object') {
        if (!val || Object.keys(val).length === 0) {
            return true;
        }
        return false;
    }
    if (val === undefined || val === null || val === 'undefined' || val === '') {
        return true;
    }
    return false;
};
export default isEmpty;
