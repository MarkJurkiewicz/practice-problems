function bubbleSort(array) {


    for (var i = 0; i < array.length; i++) {
        for (var j = 1; j < array.length - i; j++) {
            if (array[j-1] > array[j]) {
                var swap = array[j-1];
                array[j-1] = array[j];
                array[j] = swap;
            }
        }
    }
    return array;
}


// Numbers to sort
var array = ['schweppes', 'mouse', 'cat', 'dog', 'human', 'zack','mark'];

// Print initial
console.log("Initial:");
console.log(array.join(" "));

// Execute Bubble Sort
bubbleSort(array);

// Print result
console.log("Result:");
console.log(array.join(" "));