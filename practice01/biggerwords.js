var str = 'eagle';
var array = ['cat', 'walrus', 'eggplant', 'bug'];

function biggerWords (str, array){
    for(var i = 0 ; i < array.length ; i++){
        if (array[i].length > str.length){
            console.log(array[i]+' is longer than ' + str);
        } else {
            console.log(array[i]+' is shorter than ' + str);
        }
    } return str, array;
}
biggerWords(str, array);
console.log(array);