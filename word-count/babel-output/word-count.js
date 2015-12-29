"use strict";

Object.defineProperty(exports, "__esModule", {
    value: true
});

exports["default"] = function () {
    return {
        count: function count(phrase) {
            return phrase.trim().split(/\s+/).reduce(function (counts, word) {
                counts[word]++ || (counts[word] = 1);
                return counts;
            }, {});
        }
    };
};

module.exports = exports["default"];