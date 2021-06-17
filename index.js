/* global require, module */
'use strict';

/**
 * Export
 * @type {{mergeObject: (function(Object, Object, boolean, boolean, boolean, boolean): Object), cloneObject: (function((Object|Array), boolean): (Object|Array)), isPojo: (function(Object): boolean), strCreate: (function(string, *, (Object|Array), boolean=, boolean=, Object=): (Object|Array)), strAccess: (function(String, Object, Boolean=, Object=): (null|*)), mergeArray: (function(...[*]): Array)}}
 */
module.exports = {
    cloneObject : require( './src/cloneObject' ),
    isPojo : require( './src/isPojo' ),
    mergeArray : require( './src/mergeArray' ),
    mergeObject : require( './src/mergeObject' ),
    strAccess : require( './src/strAccess' ),
    strCreate : require( './src/strCreate' ),
};
