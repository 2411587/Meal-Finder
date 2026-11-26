function connect () {
var url = "https://jsonplaceholder.typicode.com/users";

fetch (url)
.then (res => res.json()   )
.then (data => console.log(data[2].name )) ;


}

var number1 = 10;
var number2 = 20;

sum (number1 , number2);
var result = multiply (number1, number2);
console.log ("Multiply value of two numbers-", result);

function sum (number1, number2){
    console.log (number1 + number2);
}

function multiply (number1, number2){
    return number1 * number2; 
}