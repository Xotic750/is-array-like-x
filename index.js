/**
 * @file
 * <a href="https://travis-ci.org/Xotic750/is-array-like-x"
 * title="Travis status">
 * <img src="https://travis-ci.org/Xotic750/is-array-like-x.svg?branch=master"
 * alt="Travis status" height="18">
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-array-like-x"
 * title="Dependency status">
 * <img src="https://david-dm.org/Xotic750/is-array-like-x.svg"
 * alt="Dependency status" height="18"/>
 * </a>
 * <a href="https://david-dm.org/Xotic750/is-array-like-x#info=devDependencies"
 * title="devDependency status">
 * <img src="https://david-dm.org/Xotic750/is-array-like-x/dev-status.svg"
 * alt="devDependency status" height="18"/>
 * </a>
 * <a href="https://badge.fury.io/js/is-array-like-x" title="npm version">
 * <img src="https://badge.fury.io/js/is-array-like-x.svg"
 * alt="npm version" height="18">
 * </a>
 *
 * ES6 isArrayLike module.
 *
 * @version 1.1.1
 * @author Xotic750 <Xotic750@gmail.com>
 * @copyright  Xotic750
 * @license {@link <https://opensource.org/licenses/MIT> MIT}
 * @module is-array-like-x
 */

/* eslint strict: 1 */

/* global module */

;(function () { // eslint-disable-line no-extra-semi

  'use strict';

  var isNil = require('is-nil-x');
  var isFunction = require('is-function-x');
  var isLength = require('lodash.islength');

  /**
   * Checks if value is array-like. A value is considered array-like if it's
   * not a function and has a `length` that's an integer greater than or
   * equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
   *
   * @param {*} value The object to be tested.
   * @return {boolean} Returns `true` if subject is array-like, else `false`.
   * @example
   * var isArrayLike = require('is-array-like-x');
   *
   * isArrayLike([1, 2, 3]); // true
   * isArrayLike(document.body.children); // true
   * isArrayLike('abc'); // true
   * isArrayLike(_.noop); // false
   */
  module.exports = function isArrayLike(value) {
    return !isNil(value) && !isFunction(value) && isLength(value.length);
  };
}());
