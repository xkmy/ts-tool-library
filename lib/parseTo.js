var paseTo = function (json) {
    try {
        return JSON.parse(json);
    }
    catch (error) {
        console.log('JSON解析出错');
    }
};
export default paseTo;
