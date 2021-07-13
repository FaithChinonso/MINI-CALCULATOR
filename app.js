// function addTwoNumbers (num1, num2) {

//     let sum = num1 + num2;
//     console.log(sum);
// }
// function greet (typeOfGreeting) {
//     alert(typeOfGreeting);
// }
// let btn1 = document.querySelector("#btn1");
// let greet_btn = document.querySelector("#greetbtn");

// btn1.addEventListener('click', function() {
//     addTwoNumbers(5, 10);
// });
// greet_btn.addEventListener('click', function() {
//     greet("Good Afternoon");
// });

// let num1 = document.querySelector("#num1");
// let num2 = document.querySelector("#num2");
// let add_btn = document.querySelector("#add");
// let minus_btn = document.querySelector("#minus");
// let multiply_btn = document.querySelector("#multiply");
// let divide_btn = document.querySelector("#divide");
// let display = document.querySelector("#displaybox");
// let displayResult = document.querySelector("#displayresult");

// function addTwoNumbers (a, b) {
//     let sum = a + b;
//     return sum;
// };
// function subtractTwoNumbers (a, b) {
//     let diff = a - b;
//     return diff;
// };
// function multiplyTwoNumbers (a, b) {
//     let product = a * b;
//     return product;
// };
// function divideTwoNumbers (a, b) {
//     let quotient = a / b;
//     return quotient;
// };

// add_btn.addEventListener('click', function(){
//     let num_one = parseInt(num1.value);
//     let num_two = parseInt(num2.value);
//     let result = addTwoNumbers (num_one, num_two);

//     displayResult.innerHTML = result;
    
// });
// minus_btn.addEventListener('click', function(){
//     let num_one = parseInt(num1.value);
//     let num_two = parseInt(num2.value);
//     let result = subtractTwoNumbers (num_one, num_two);

//     displayResult.innerHTML = result;
    
// });
// multiply_btn.addEventListener('click', function(){
//     let num_one = parseInt(num1.value);
//     let num_two = parseInt(num2.value);
//     let result = multiplyTwoNumbers (num_one, num_two);

//     displayResult.innerHTML = result;
    
// });
// divide_btn.addEventListener('click', function(){
//     let num_one = parseInt(num1.value);
//     let num_two = parseInt(num2.value);
//     let result = divideTwoNumbers (num_one, num_two);

//     displayResult.innerHTML = result;
    
// });




let num_1 = document.querySelector("#num1");
let num_2 = document.querySelector("#num2");
let addBtn = document.querySelector("#add");
let subtractBtn = document.querySelector("#minus");
let multiplyBtn = document.querySelector("#multiply");
let divideBtn = document.querySelector("#divide");
let display = document.querySelector("#displaybox");
let displayResult = document.querySelector("#displayresult");

function addTwoNumbers (a, b) {
   let sum = a + b;
    return sum;
    
}
function subtractTwoNumbers (a, b) {
   let diff = a - b;
    return diff;
}
function multiplyTwoNumbers (a, b) {
   let product = a * b;
    return product;
}
function divideTwoNumbers (a, b) {
   let quotient = a / b;
    return quotient;
}


addBtn.addEventListener('click', function () {
    var numOne = parseInt(num_1.value);
    var numTwo = parseInt(num_2.value); 
    let result = addTwoNumbers(numOne, numTwo);
    displayResult.innerHTML = result;
});
subtractBtn.addEventListener('click', function () {
    var numOne = parseInt(num_1.value);
    var numTwo = parseInt(num_2.value); 
    let result = subtractTwoNumbers(numOne, numTwo);
    displayResult.innerHTML = result;
});
multiplyBtn.addEventListener('click', function () {
    var numOne = parseInt(num_1.value);
    var numTwo = parseInt(num_2.value); 
    let result = multiplyTwoNumbers(numOne, numTwo);
    displayResult.innerHTML = result;
    
});
divideBtn.addEventListener('click', function () {
    var numOne = parseInt(num_1.value);
    var numTwo = parseInt(num_2.value); 
    let result = divideTwoNumbers(numOne, numTwo);
    displayResult.innerHTML = result;
});







