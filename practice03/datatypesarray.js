var arr = ['wigglers', 33, true, 'budweiser', false, 'silver', 'lantern', 29, '30'];

function sortDataType(arr){
    var dataTypeArray = [];
    var strings = [];
    var numbers = [];
    var booleans = [];
    for (var i = 0; i < arr.length; i++){
        if(typeof arr[i] === 'string'){
            strings.push(arr[i]);
        }
    }
    console.log(strings);
    for (var n = 0; n < arr.length; n++){
        if(typeof arr[n] === 'number'){
            numbers.push(arr[n]);
        }
    }
    console.log(numbers);
    for (var b = 0; b < arr.length; b++){
        if(typeof arr[b] === "boolean"){
            booleans.push(arr[b]);
        }
    }
    console.log(booleans);
    dataTypeArray.push(strings, numbers, booleans);

    console.log(dataTypeArray);
}
sortDataType(arr);