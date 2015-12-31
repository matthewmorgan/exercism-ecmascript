'use strict';

Object.defineProperty(exports, '__esModule', {
  value: true
});

var _createClass = (function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ('value' in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; })();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError('Cannot call a class as a function'); } }

var PATTERNS = [' _ | ||_|   ', '     |  |   ', ' _  _||_    ', ' _  _| _|   ', '   |_|  |   ', ' _ |_  _|   ', ' _ |_ |_|   ', ' _   |  |   ', ' _ |_||_|   ', ' _ |_| _|   '],
    WIDTH = 3,
    HEIGHT = 4;

function parseLine(scanLines, scanLine, chars) {
  var charIndex = 0;
  while (charIndex < scanLine[0].length / WIDTH) {
    var onePattern = '';
    for (var layer = 0; layer < HEIGHT; layer++) {
      onePattern += scanLine[layer].substr(charIndex * WIDTH, WIDTH);
    }
    charIndex++;
    chars += recognizeChar(onePattern);
  }
  scanLines.length > 0 ? chars += ',' : {};
  return chars;
}

function recognizeChar(pattern) {
  return PATTERNS.indexOf(pattern) >= 0 ? PATTERNS.indexOf(pattern).toString() : '?';
}

var Ocr = (function () {
  function Ocr() {
    _classCallCheck(this, Ocr);
  }

  _createClass(Ocr, [{
    key: 'convert',
    value: function convert(str) {
      var scanLines = str.match(/[|_ ]+/g);
      var chars = '';

      do {
        var scanLine = scanLines.splice(0, HEIGHT);
        chars = parseLine(scanLines, scanLine, chars);
      } while (scanLines.length > 0);

      return chars;
    }
  }]);

  return Ocr;
})();

exports['default'] = Ocr;
module.exports = exports['default'];