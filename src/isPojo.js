/* global module */
'use strict';

/**
 * Is a plain object
 *
 * @param {object} obj - Object to test
 *
 * @return {boolean} - True if plain object
 */
function isPojo( obj ) {
    if ( obj === null || typeof obj !== 'object' ) {
        return false;
    }
    return Object.getPrototypeOf( obj ) === Object.prototype;
}

/**
 * Export
 * @type {function(Object): boolean}
 */
module.exports = isPojo;
