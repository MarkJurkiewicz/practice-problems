/** LONGER CODE
 * Calculates Fibonacci numbers based on the input parameter of "num" "user enters a number and function will perform calculation
 * @param {number} max - How many numbers you want
 * @return {array} fibArray = []; The Fibonacci numbers
 */
function fiboSpiral (number){
    var numOne = 0;
    var numTwo = 1;
    var numFib;
    var fibArray = [0, 1]; // placed numbers 0 and 1 into array to begin Fibonacci sequence

    // loop fibonacci number iterations
    // next fibonacci number = previous + one before previous (the Fibonacci Sequence)

    for (var i = 2; i < number; i++) {
        numFib = numOne + numTwo;
        numOne = numTwo;
        numTwo = numFib;

        fibArray.push(numFib);
    }
    return fibArray;
}
console.log(fiboSpiral(12));

/** SIMPLIFIED
 * Calculates Fibonacci numbers based on the input parameter of "num" "user enters a number and function will perform calculation
 * @param {number} max - How many numbers you want
 * @return {array} fibArray = []; The Fibonacci numbers
 */

function fibSpiral(num) {
    var fibArray = [0, 1];  // placed numbers 0 and 1 into array to begin Fibonacci sequence

    for (var i = 2; i < num; i++) {  //set i to 2 here because 0 and 1 are already in array
        fibArray.push( fibArray[i - 1] + fibArray[i - 2] )  // perform math directly in array here while utilizing the push method
    }
    return fibArray;
}
console.log(fibSpiral(12));