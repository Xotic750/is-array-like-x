<a
  href="https://travis-ci.org/Xotic750/is-array-like-x"
  title="Travis status">
<img
  src="https://travis-ci.org/Xotic750/is-array-like-x.svg?branch=master"
  alt="Travis status" height="18">
</a>
<a
  href="https://david-dm.org/Xotic750/is-array-like-x"
  title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-array-like-x/status.svg"
  alt="Dependency status" height="18"/>
</a>
<a
  href="https://david-dm.org/Xotic750/is-array-like-x?type=dev"
  title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-array-like-x/dev-status.svg"
  alt="devDependency status" height="18"/>
</a>
<a
  href="https://badge.fury.io/js/is-array-like-x"
  title="npm version">
<img src="https://badge.fury.io/js/is-array-like-x.svg"
  alt="npm version" height="18">
</a>
<a
  href="https://www.jsdelivr.com/package/npm/is-array-like-x"
  title="jsDelivr hits">
<img src="https://data.jsdelivr.com/v1/package/npm/is-array-like-x/badge?style=rounded"
  alt="jsDelivr hits" height="18">
</a>
<a
  href="https://bettercodehub.com/results/Xotic750/is-array-like-x"
  title="bettercodehub score">
<img src="https://bettercodehub.com/edge/badge/Xotic750/is-array-like-x?branch=master"
  alt="bettercodehub score" height="18">
</a>
<a
  href="https://coveralls.io/github/Xotic750/is-array-like-x?branch=master"
  title="Coverage Status">
<img src="https://coveralls.io/repos/github/Xotic750/is-array-like-x/badge.svg?branch=master"
  alt="Coverage Status" height="18">
</a>

<a name="module_is-array-like-x"></a>

## is-array-like-x

Determine if a value is array like.

<a name="exp_module_is-array-like-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏

Checks if value is array-like. A value is considered array-like if it's
not a function and has a `length` that's an integer greater than or
equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns `true` if subject is array-like, else `false`.

| Param | Type            | Description              |
| ----- | --------------- | ------------------------ |
| value | <code>\*</code> | The object to be tested. |

**Example**

```js
import isArrayLike from 'is-array-like-x';

console.log(isArrayLike([1, 2, 3])); // true
console.log(isArrayLike(document.body.children)); // true
console.log(isArrayLike('abc')); // true
console.log(isArrayLike(isArrayLike)); // false
```
