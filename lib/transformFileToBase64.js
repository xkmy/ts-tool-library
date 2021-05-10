var transformFileToBase64 = function (file) {
    return new Promise(function (reslove) {
        var reader = new FileReader();
        reader.readAsDataURL(file);
        reader.onload = function () {
            reslove(reader.result);
        };
    });
};
export default transformFileToBase64;
