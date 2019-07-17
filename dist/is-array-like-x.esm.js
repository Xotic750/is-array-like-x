import isNil from 'is-nil-x';
import isFunction from 'is-function-x';
import isLength from 'is-length-x';
/**
 * Checks if value is array-like. A value is considered array-like if it's
 * not a function and has a `length` that's an integer greater than or
 * equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.
 *
 * @param {*} value - The object to be tested.
 */

var isArrayLike = function isArrayLike(value) {
  return isNil(value) === false && isFunction(value, true) === false && isLength(value.length);
};

export default isArrayLike;

//# sourceMappingURL=is-array-like-x.esm.js.map