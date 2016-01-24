'use strict';

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var _acronym = require('./acronym');

var _acronym2 = _interopRequireDefault(_acronym);

describe('acronyms', function () {
  var PAIRS = {
    'Portable Network Graphics': 'PNG',
    'Ruby on Rails': 'ROR',
    'HyperText Markup Language': 'HTML',
    'First In, First Out': 'FIFO',
    'PHP: Hypertext Preprocessor': 'PHP',
    'Complementary metal-oxide semiconductor': 'CMOS'
  };

  it('Tests the creation of acronyms from phrases', function () {
    Object.keys(PAIRS).forEach(function (key) {
      expect(_acronym2['default'].parse(key)).toEqual(PAIRS[key]);
    });
  });
});