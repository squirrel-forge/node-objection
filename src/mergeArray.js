/**
 * Requires
 */
const cloneObject = require( './cloneObject' );

/**
 * Marge 2 or more arrays and return new array
 * @param {boolean} unique - Only unique values, optional, default : true
 * @param {boolean} clone - Clone values, optional, default : false
 * @param {Array} array1,array2,... - Any number of arrays to merge
 * @return {Array} - Merged array
 */
module.exports = function mergeArray( ...params ) {
    let argsset = 0,
        unique = true,
        clone = false;
    const merged = [];
    for ( let i = 0; i < params.length; i++ ) {
        if ( params[ i ] instanceof Array ) {
            params[ i ].forEach( ( value ) => {
                if ( !unique || unique && !merged.includes( value ) ) {
                    merged.push( clone ? cloneObject( value ) : value );
                }
            } );

        // Parse first two non array arguments as booleans
        } else if ( argsset < 2 ) {
            if ( argsset === 0 ) {
                unique = !!params[ i ];
            } else if ( argsset === 1 ) {
                clone = !!params[ i ];
            }
            argsset++;
        }
    }
    return merged;
};
