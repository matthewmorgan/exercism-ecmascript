# Pig Latin

Implement a program that translates from English to Pig Latin

Pig Latin is a made-up children's language that's intended to be
confusing. It obeys a few simple rules (below), but when it's spoken
quickly it's really difficult for non-children (and non-native speakers)
to understand.

- **Rule 1**: If a word begins with a vowel sound, add an "ay" sound to
  the end of the word.
- **Rule 2**: If a word begins with a consonant sound, move it to the
  end of the word, and then add an "ay" sound to the end of the word.

There are a few more rules for edge cases, and there are regional
variants too.

See <http://en.wikipedia.org/wiki/Pig_latin> for more details.

## Setup

Go through the setup instructions for ECMAScript to
install the necessary dependencies:

http://help.exercism.io/getting-started-with-ecmascript.html

## Requirements

They are already described in the link above, but just as a
quick reference:

Install globally a tool to run [Gulp](http://gulpjs.com) if
it is not installed yet:

```bash
$ npm install -g gulp-cli
```

Install assignment dependencies:

```bash
$ npm install
```

## Making the test suite pass

Execute the tests with:

```bash
$ gulp test
```

In many test suites all but the first test have been skipped.

Once you get a test passing, you can unskip the next one by
changing `xit` to `it`.


## Source

The Pig Latin exercise at Test First Teaching by Ultrasaurus [view source](https://github.com/ultrasaurus/test-first-teaching/blob/master/learn_ruby/pig_latin/)
