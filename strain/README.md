# Strain

Implement the `keep` and `discard` operation on collections. Given a collection and a predicate on the collection's elements, `keep` returns a new collection containing those elements where the predicate is true, while `discard` returns a new collection containing those elements where the predicate is false.

Write two functions that each take a function and a list.  One of them will
return the list of items for which the passed in function is true, and the
other will return the items for which it is false.

For example, given the collection of numbers:

- 1, 2, 3, 4, 5

And the predicate:

- is the number even?

Then your keep operation should produce:

- 2, 4

While your discard operation should produce:

- 1, 3, 5

Note that the union of keep and discard is all the elements.

The functions may be called `keep` and `discard`, or they may need different
names in order to not clash with existing functions or concepts in your
language.

## Restrictions

Keep your hands off that filter/reject/whatchamacallit functionality
provided by your standard library!  Solve this one yourself using other
basic tools instead.

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

Conversation with James Edward Gray II [view source](https://twitter.com/jeg2)
