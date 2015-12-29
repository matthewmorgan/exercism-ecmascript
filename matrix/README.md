# Matrix

Write a program that, given a string representing a matrix of numbers, can return the rows and columns of that matrix.

So given a string with embedded newlines like:

> 9 8 7
> 5 3 2
> 6 6 7

representing this matrix:

```plain
    0  1  2
  |---------
0 | 9  8  7
1 | 5  3  2
2 | 6  6  7
```

your code should be able to spit out:

- A list of the rows, reading each row left-to-right while moving
  top-to-bottom across the rows,
- A list of the columns, reading each column top-to-bottom while moving
  from left-to-right.

The rows for our example matrix:

- 9, 8, 7
- 5, 3, 2
- 6, 6, 7

And its columns:

- 9, 5, 6
- 8, 3, 6
- 7, 2, 7

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

Warmup to the `saddle-points` warmup. [view source](http://jumpstartlab.com)
