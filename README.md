# node-objection

Advanced plain object handling, manipulation and extraction.

## Install

```
# npm i @squirrel-forge/node-objection
```

## Usage

Get the module reference.
```javascript
const objm = require( '@squirrel-forge/node-objection' );
```

Following methods/functions are available:
```javascript
objm.cloneObject( source, recursive = false ) : Object
objm.isPojo( obj ) : boolean
objm.mergeArray( [ unique, clone,] array1, array2[, ...] ) : Array
objm.mergeObject( target, changes, extend = false, recursive = false, arrayClone = false, noArray = false ) : Object
objm.strAccess( strpath, subject, exact = true, debug = console ) : *
objm.strCreate( strpath, value, target, replace = false, any = false, debug = console ) : Object
```
