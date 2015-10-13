"use strict";
'use strict';
$traceurRuntime.options.symbols = true;
function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { 'default': obj };
}
var _foodChain = require('./food-chain');
var _foodChain2 = _interopRequireDefault(_foodChain);
describe('Food Chain', function () {
  var song = undefined;
  beforeEach(function () {
    song = new (_foodChain2[$traceurRuntime.toProperty('default')])();
  });
  it('fly', function () {
    var expected = 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    expect(song.verse(1)).toEqual(expected);
  });
  xit('spider', function () {
    var expected = 'I know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    expect(song.verse(2)).toEqual(expected);
  });
  xit('bird', function () {
    var expected = 'I know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    expect(song.verse(3)).toEqual(expected);
  });
  xit('cat', function () {
    var expected = 'I know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    expect(song.verse(4)).toEqual(expected);
  });
  xit('dog', function () {
    var expected = 'I know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    expect(song.verse(5)).toEqual(expected);
  });
  xit('goat', function () {
    var expected = 'I know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    expect(song.verse(6)).toEqual(expected);
  });
  xit('cow', function () {
    var expected = 'I know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\nShe swallowed the cow to catch the goat.\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n';
    expect(song.verse(7)).toEqual(expected);
  });
  xit('horse', function () {
    var expected = 'I know an old lady who swallowed a horse.\nShe\'s dead, of course!\n';
    expect(song.verse(8)).toEqual(expected);
  });
  xit('multiple verses', function () {
    var expected = 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\nI know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\n';
    expect(song.verses(1, 2)).toEqual(expected);
  });
  xit('the whole song', function () {
    var expected = 'I know an old lady who swallowed a fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\nI know an old lady who swallowed a spider.\nIt wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\nI know an old lady who swallowed a bird.\nHow absurd to swallow a bird!\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\nI know an old lady who swallowed a cat.\nImagine that, to swallow a cat!\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\nI know an old lady who swallowed a dog.\nWhat a hog, to swallow a dog!\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\nI know an old lady who swallowed a goat.\nJust opened her throat and swallowed a goat!\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\nI know an old lady who swallowed a cow.\nI don\'t know how she swallowed a cow!\nShe swallowed the cow to catch the goat.\nShe swallowed the goat to catch the dog.\nShe swallowed the dog to catch the cat.\nShe swallowed the cat to catch the bird.\nShe swallowed the bird to catch the spider that wriggled and jiggled and tickled inside her.\nShe swallowed the spider to catch the fly.\nI don\'t know why she swallowed the fly. Perhaps she\'ll die.\n\nI know an old lady who swallowed a horse.\nShe\'s dead, of course!\n\n';
    expect(song.verses(1, 8)).toEqual(expected);
  });
});

//# sourceMappingURL=food-chain_test.spec-compiled-compiled.js.map