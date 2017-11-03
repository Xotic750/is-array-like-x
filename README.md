<a href="https://travis-ci.org/Xotic750/is-array-like-x"
   title="Travis status">
<img
   src="https://travis-ci.org/Xotic750/is-array-like-x.svg?branch=master"
   alt="Travis status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-array-like-x"
   title="Dependency status">
<img src="https://david-dm.org/Xotic750/is-array-like-x.svg"
   alt="Dependency status" height="18"/>
</a>
<a href="https://david-dm.org/Xotic750/is-array-like-x#info=devDependencies"
   title="devDependency status">
<img src="https://david-dm.org/Xotic750/is-array-like-x/dev-status.svg"
   alt="devDependency status" height="18"/>
</a>
<a href="https://badge.fury.io/js/is-array-like-x" title="npm version">
<img src="https://badge.fury.io/js/is-array-like-x.svg"
   alt="npm version" height="18"/>
</a>
<a name="module_is-array-like-x"></a>

## is-array-like-x
Determine if a value is array like.

**Version**: 1.8.0  
**Author**: Xotic750 <Xotic750@gmail.com>  
**License**: [MIT](&lt;https://opensource.org/licenses/MIT&gt;)  
**Copyright**: Xotic750  
<a name="exp_module_is-array-like-x--module.exports"></a>

### `module.exports(value)` ⇒ <code>boolean</code> ⏏
Checks if value is array-like. A value is considered array-like if it's
not a function and has a `length` that's an integer greater than or
equal to 0 and less than or equal to `Number.MAX_SAFE_INTEGER`.

**Kind**: Exported function  
**Returns**: <code>boolean</code> - Returns `true` if subject is array-like, else `false`.  

| Param | Type | Description |
| --- | --- | --- |
| value | <code>\*</code> | The object to be tested. |

**Example**  
```js
var isArrayLike = require('is-array-like-x');

isArrayLike([1, 2, 3]); // true
isArrayLike(document.body.children); // true
isArrayLike('abc'); // true
isArrayLike(_.noop); // false
```
