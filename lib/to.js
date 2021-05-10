var to = function (promise) {
    return promise
        .then(function (data) {
        return [data, null];
    })
        .catch(function (err) { return [null, err]; });
};
export default to;
