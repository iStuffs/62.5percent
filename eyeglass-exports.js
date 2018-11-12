const normalize = require("./index");

module.exports = function (eyeglass, sass) {
    return {
        sassDir: normalize.includePaths[0]
    };
};
