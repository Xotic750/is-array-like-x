import isArrayLike from '../src/is-array-like-x';

describe('basic tests', function() {
  it('should return `true` for array-like values', function() {
    expect.assertions(1);
    (function() {
      const values = [arguments, [1, 2, 3], {0: 1, length: 1}, 'a'];
      const expected = values.map(function() {
        return true;
      });
      const actual = values.map(isArrayLike);
      expect(actual).toStrictEqual(expected);
    })(1, 2, 3);
  });

  it('should return `false` for non-arrays', function() {
    expect.assertions(13);
    const falsey = ['', 0, false, NaN, null, undefined];
    const generator = (function() {
      try {
        return new Function('return function*(){}');
      } catch (ignore) {
        return void 0;
      }
    })();
    const expected = falsey.map(function(value) {
      return value === '';
    });
    const actual = falsey.map(function(value) {
      return isArrayLike(value);
    });
    expect(actual).toStrictEqual(expected);
    expect(isArrayLike(true)).toBe(false);
    expect(isArrayLike(new Date())).toBe(false);
    expect(isArrayLike(new Error())).toBe(false);
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike(generator)).toBe(false);
    expect(isArrayLike(Array.prototype.slice)).toBe(false);
    expect(isArrayLike({a: 1})).toBe(false);
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike(/x/)).toBe(false);

    try {
      const fat = new Function('return () => {return this;}');
      expect(isArrayLike(fat)).toBe(false);
    } catch (ignore) {
      // empty
    }

    try {
      const gen = new Function('return function* idMaker(){}');
      expect(isArrayLike(gen)).toBe(false);
    } catch (ignore) {
      // empty
    }

    try {
      const classes = new Function('"use strict"; return class MyClass {}');
      expect(isArrayLike(classes)).toBe(false);
    } catch (ignore) {
      // empty
    }
  });
});
