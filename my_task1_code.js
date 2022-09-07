// Instructions
// - Given the following 6 empty functions, add the right return statement to each of them to complete the activity
// Please do not change any of the function names

const arr = [10, 10, 16, 12];

function returnFirst(arr) {
    return arr[0];
}
console.log('Result: ' + returnFirst(arr));

function returnLast(arr) {
    return arr[3];
}
console.log('Result: ' + returnLast(arr));

function getArrayLength(arr) {
    return arr.length;
    console.log('Result: ' + getArrayLength(arr));
}

function incrementByOne(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i] + 1;
        return arr;
    }
    console.log('Result: ' + incrementByOne(arr));

    function addItemToArray( arr, item ) {
        arr.push ( item );
        return arr;
    }
    console.log ( 'Result: ' + addItemToArray(arr));

    function addItemToFront( arr, item ) {
        arr.unshift ( item );
        return arr;
        console.log ( 'Result: ' + addItemToFront(arr) );
    }

//uncomment these lines to check results in browser console
    console.log ( "returnFirst result:" + returnFirst ( arr ) )
    console.log ( "returnLast result:" + returnLast ( arr ) )
    console.log ( "getArrayLength result:" + getArrayLength ( arr ) )
    console.log ( "incrementByOne result:" + incrementByOne ( arr ) )
    console.log ( "addItemToArray result:" + addItemToArray ( arr, 10 ) )
    console.log ( "addItemToFront result:" + addItemToFront ( arr, 10 ) )

//////////////////////////////////
//don't change this line
    if (typeof module !== 'undefined') {
        module.exports = {
            returnFirst,
            returnLast,
            getArrayLength,
            incrementByOne,
            addItemToArray,
            addItemToFront,
        };
    }
}
