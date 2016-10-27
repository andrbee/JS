var phrases;
exports.connect=function () {
    phrases=require('./ru');
}
exports.getPhrases=function (name) {
    if(!phrases[name]) {
        throw Error("Не такой фразы "+name);
    }
    return phrases[name];
}