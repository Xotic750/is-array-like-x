'use strict';

var isArrayLike;
if (typeof module === 'object' && module.exports) {
  require('es5-shim');
  require('es5-shim/es5-sham');
  if (typeof JSON === 'undefined') {
    JSON = {};
  }
  require('json3').runInContext(null, JSON);
  require('es6-shim');
  var es7 = require('es7-shim');
  Object.keys(es7).forEach(function (key) {
    var obj = es7[key];
    if (typeof obj.shim === 'function') {
      obj.shim();
    }
  });
  isArrayLike = require('../../index.js');
} else {
  isArrayLike = returnExports;
}

describe('Basic tests', function () {
  it('should return `true` for array-like values', function () {
    (function () {
      var values = [
        arguments,
        [
          1,
          2,
          3
        ],
        { 0: 1, length: 1 },
        'a'
      ];
      var expected = values.map(function () {
        return true;
      });
      var actual = values.map(isArrayLike);
      expect(actual).toEqual(expected);
    }(1, 2, 3));
  });

  it('should return `false` for non-arrays', function () {
    var falsey = [
      '',
      0,
      false,
      NaN,
      null,
      undefined
    ];
    var generator = (function () {
      try {
        // eslint-disable-next-line no-new-func
        return new Function('return function*(){}');
      } catch (ignore) {
        return void 0;
      }
    }());
    var expected = falsey.map(function (value) {
      return value === '';
    });
    var actual = falsey.map(function (value) {
      return isArrayLike(value);
    });
    expect(actual).toEqual(expected);
    expect(isArrayLike(true)).toBe(false);
    expect(isArrayLike(new Date())).toBe(false);
    expect(isArrayLike(new Error())).toBe(false);
    expect(isArrayLike({})).toBe(false);
    expect(isArrayLike(generator)).toBe(false);
    expect(isArrayLike(Array.prototype.slice)).toBe(false);
    expect(isArrayLike({ a: 1 })).toBe(false);
    expect(isArrayLike(1)).toBe(false);
    expect(isArrayLike(/x/)).toBe(false);

    try {
      // eslint-disable-next-line no-new-func
      var fat = new Function('return () => {return this;}');
      expect(isArrayLike(fat)).toBe(false);
    } catch (ignore) {}

    try {
      // eslint-disable-next-line no-new-func
      var gen = new Function('return function* idMaker(){}');
      expect(isArrayLike(gen)).toBe(false);
    } catch (ignore) {}

    try {
      // eslint-disable-next-line no-new-func
      var classes = new Function('"use strict"; return class MyClass {}');
      expect(isArrayLike(classes)).toBe(false);
    } catch (ignore) {}
  });
});
