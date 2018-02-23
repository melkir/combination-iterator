import test from 'ava';
import iterable from '.';

const output = [['a', 'b'], ['a', 'c'], ['b', 'c']];

test('array', t => {
  const it = iterable(['a', 'b', 'c']);
  t.deepEqual([...it], output);
});

test('string', t => {
  const it = iterable('abc');
  t.deepEqual([...it], output);
});

test('object', t => {
  const it = iterable({ 1: 'a', 2: 'b', 3: 'c' });
  t.deepEqual([...it], output);
});

test('empty array', t => {
  const it = iterable([]);
  t.deepEqual(it.next(), { done: true, value: undefined });
});

test('null', t => {
  const it = iterable(null);
  t.true(it.next().done);
});
