'use strict';

function* combinationIterator(object) {
  if (isIterable(object)) {
    for (let i = 0; i < object.length; i++) {
      for (let j = i + 1; j < object.length; j++) {
        yield [object[i], object[j]];
      }
    }
  } else if (typeof object === 'object' && object !== null) {
    const keys = Object.keys(object);
    for (let i = 0; i < keys.length; i++) {
      for (let j = i + 1; j < keys.length; j++) {
        yield [object[keys[i]], object[keys[j]]];
      }
    }
  }
}

function isIterable(obj) {
  if (obj == null) {
    return false;
  }
  return typeof obj[Symbol.iterator] === 'function';
}

module.exports = combinationIterator;
