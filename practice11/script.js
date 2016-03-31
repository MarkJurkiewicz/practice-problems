var evenodd = [2,5,1,6,8,2,20,'cat',13,3];

function evenOdd(param1){
    var evenArray = [];
    var oddArray =[];
    for(var i in param1){
        if(!isNaN(param1[i])){
            if(param1[i] % 2 === 0){
                evenArray.push(param1[i]);
            }
            else{
                oddArray.push(param1[i]);
            }
        }
    }
}
console.log(evenArray);
console.log(oddArray);
evenOdd();

//
//## Even Odds
//
//Build a function that takes one array and then sorts it into odd and even numbers
//
//- Write a function that takes one parameter
//- Parameter 1 - an array of anything
//- The function should return an object with 2 arrays in it:
//- odd: an array of all the odd numbers in the array
//- even: an array of all the even numbers in the array
//- all non-number entities should be ignored
//- repeated numbers should not be added twice
//- Example:
//- `evenodd([2,5,1,6,8,2,20,'cat',13,3]);`
//- Output - {
//    odd: [5, 1, 13, 3],
//    even: [2, 6, 8, 20]
//}
