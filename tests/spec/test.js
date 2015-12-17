/*jslint maxlen:80, es6:false, white:true */

/*jshint bitwise:true, camelcase:true, curly:true, eqeqeq:true, forin:true,
  freeze:true, futurehostile:true, latedef:true, newcap:true, nocomma:true,
  nonbsp:true, singleGroups:true, strict:true, undef:true, unused:true,
  es3:true, esnext:false, plusplus:true, maxparams:2, maxdepth:2,
  maxstatements:11, maxcomplexity:3 */

/*global JSON:true, expect, module, require, describe, it, returnExports */

(function () {
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
    isArrayLike = require('../../index.js');
  } else {
    isArrayLike = returnExports;
  }

  describe('Basic tests', function () {
    it('should return `true` for array-like values', function () {
      (function () {
        var values = [arguments, [1, 2, 3], { '0': 1, 'length': 1 }, 'a'],
            expected = values.map(function () {
              return true;
            }),
                       actual = values.map(isArrayLike);
        expect(actual).toEqual(expected);
      }(1, 2, 3));
    });
    it('should return `false` for non-arrays', function () {
      /*jshint elision:true */
      var falsey = [, '', 0, false, NaN, null, undefined],
        generator = (function () {
          try {
            /*jshint evil:true */
            return new Function('return function*(){}');
          } catch (ignore) {}
        }()),
        expected = falsey.map(function (value) {
          return value === '';
        }),
        actual = falsey.map(function (value, index) {
          return index ? isArrayLike(value) : isArrayLike();
        });
      expect(actual).toEqual(expected);
      expect(isArrayLike(true)).toBe(false);
      expect(isArrayLike(new Date())).toBe(false);
      expect(isArrayLike(new Error())).toBe(false);
      expect(isArrayLike({})).toBe(false);
      expect(isArrayLike(generator)).toBe(false);
      expect(isArrayLike(Array.prototype.slice)).toBe(false);
      expect(isArrayLike({ 'a': 1 })).toBe(false);
      expect(isArrayLike(1)).toBe(false);
      expect(isArrayLike(/x/)).toBe(false);
    });
  });
}());
