# combination-iterator [![Build Status](https://travis-ci.org/melkir/combination-iterator.svg?branch=master)](https://travis-ci.org/melkir/combination-iterator) [![codecov](https://codecov.io/gh/melkir/combination-iterator/branch/master/graph/badge.svg)](https://codecov.io/gh/melkir/combination-iterator)

> Iterate by combination values in a list

[![Combination][picture]](https://en.wikibooks.org/wiki/Probability/Combinatorics)

## Install

```
$ npm install combination-iterator
```

## Usage

### Array

```js
const combinationIterator = require('combination-iterator');

const it = combinationIterator(['a', 'b', 'c']);

it.next(); // => { value: [ 'a', 'b' ], done: false }
it.next(); // => { value: [ 'a', 'c' ], done: false }
it.next(); // => { value: [ 'b', 'c' ], done: false }
it.next(); // => { value: undefined, done: true }
```

### Object

```js
const it = combinationIterator({
  1: 'a',
  2: 'b',
  3: 'c'
});

// Same bahavior as arrays
it.next(); // => { value: [ 'a', 'b' ], done: false }
```


## License

MIT © Thibaut Vieux

[picture]: https://upload.wikimedia.org/wikipedia/commons/3/3b/Combination.png
