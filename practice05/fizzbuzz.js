function fizzy(){
    for(var i = 1; i <= 100; i++){
        if ( i % 3 === 0 && i % 5 === 0){
            console.log('FizzBuzz');
        }
        else if ( i % 3 === 0){
            console.log('Fizz');
        }
        else if ( i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
}
fizzy();


//TERNARY solution

function fizzBTernary(){
    for (var i = 1; i <= 100; i++){
        var z = i % 3 === 0, b = i % 5 === 0;
        console.log(z ? b ? "FizzBuzz" : "Fizz" : b ? "Buzz" : i);
    }
}
fizzBTernary();




//reference for object oriented FIZZ BUZZ

function FizzBuzzer(numbers) {
    this.numbers = numbers;
    return {
        fizz: function() {
            for(var i = 0; i < numbers.length; i++) {
                if(numbers[i]%3 === 0) {
                    console.log('fizz');
                } else {
                    console.log(numbers[i]);
                }
            }
        },
        buzz: function() {
            for(var i = 0; i < numbers.length; i++) {
                if(numbers[i]%5 ===0) {
                    console.log('buzz');
                } else {
                    console.log(numbers[i]);
                }
            }
        },
        fizzbuzz: function() {
            for(var i = 0; i < numbers.length; i++) {
                if(numbers[i]%5 === 0 && numbers[i]%3 === 0) {
                    console.log('fizzbuzz');
                } else {
                    console.log(numbers[i]);
                }
            }
        }
    };
}

var myFizzBuzzer = new FizzBuzzer([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);

myFizzBuzzer.fizzbuzz();




var fizzerBuzz = function () {

}

fizzerBuzz.prototype = {

    fizzBuzz: function (){
        for(var i = 1; i <= 100; i++){
            if ( i % 3 === 0 && i % 5 === 0){
                console.log('FizzBuzz');
            }
        }
    },
    fizz: function () {
            if ( i % 3 === 0){
            console.log('Fizz');
        }
    },
    buzz: function () {
            if ( i % 5 === 0){
            console.log('Buzz');
        }else{
            console.log(i);
        }
    }
};

fizzerBuzz.fizzy();