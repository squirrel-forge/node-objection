/* global require, module */
'use strict';

/**
 * Requires
 */
const mergeArray = require( './mergeArray' );
const cloneObject = require( './cloneObject' );
const isPojo = require( './isPojo' );

/**
 * Merge objects
 *
 * @param {object} target - Base object
 * @param {object} changes - Changes object
 * @param {boolean} extend - Extend the base object
 * @param {boolean} recursive - Recursivly merge
 * @param {boolean} arrayClone - Clone array values
 * @param {boolean} noArray - Do not merge arrays
 *
 * @return {object} - Target object
 */
function mergeObject( target, changes, extend, recursive, arrayClone, noArray ) {
    extend = !!extend;
    recursive = !!recursive;
    arrayClone = !!arrayClone;
    noArray = !!noArray;

    let i,
        to_target,
        to_changes,
        array_target,
        array_changes,
        plain_target,
        plain_changes;

    for ( i in changes ) {
        to_target = typeof target[ i ];
        to_changes = typeof changes[ i ];
        array_target = target[ i ] instanceof Array;
        array_changes = changes[ i ] instanceof Array;
        plain_target = isPojo( target[ i ] );
        plain_changes = isPojo( changes[ i ] );

        // Update value
        if ( Object.prototype.hasOwnProperty.call( target, i ) && Object.prototype.hasOwnProperty.call( changes, i ) ) {
            switch ( to_target + '_' + to_changes ) {
            case 'object_object' :
                if ( recursive ) {
                    if ( !noArray && array_target && array_changes ) {

                        // Array merging
                        target[ i ] = mergeArray( true, arrayClone, target[ i ], changes[ i ] );
                    } else if ( plain_target && plain_changes ) {

                        // Plain object recursive
                        target[ i ] = mergeObject( target[ i ], changes[ i ], extend, recursive, arrayClone, noArray );
                    } else {

                        //
                        target[ i ] = cloneObject( changes[ i ], true );
                    }
                } else {

                    // No instance type checking
                    target[ i ] = changes[ i ];
                }
                break;
            default :

                // Replace if extend, null or both same type
                if ( extend || target[ i ] === null || changes[ i ] === null || to_target === to_changes ) {
                    target[ i ] = changes[ i ];
                }
            }

        // Extend value
        } else if ( extend && to_target === 'undefined' && Object.prototype.hasOwnProperty.call( changes, i ) ) {
            target[ i ] = cloneObject( changes[ i ], true );
        }
    }
    return target;
}

/**
 * Export
 * @type {function(Object, Object, boolean, boolean, boolean, boolean): Object}
 */
module.exports = mergeObject;
