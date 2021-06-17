/* global require, module */
'use strict';

/**
 * Requires
 */
const isPojo = require( './isPojo' );

/**
 * Clone object or array
 *
 * @param {Object|Array} source - Source to clone
 * @param {boolean} recursive - Recursive mode
 *
 * @returns {Object|Array} - Cloned object
 */
function cloneObject( source, recursive = false ) {
    recursive = !!recursive;
    const is_array = source instanceof Array;
    const is_plain = isPojo( source );
    const cloned = is_array ? [] : {};

    if ( is_array || is_plain ) {
        for ( const i in source ) {
            if ( Object.prototype.hasOwnProperty.call( source, i ) ) {
                if ( source[ i ] === null || typeof source[ i ] !== 'object' || !recursive ) {
                    cloned[ i ] = source[ i ];
                } else {
                    cloned[ i ] = cloneObject( source[ i ], recursive );
                }
            }
        }
        return cloned;
    }
    return source;
}

/**
 * Export
 * @type {function((Object|Array), boolean): (Object|Array)}
 */
module.exports = cloneObject;
