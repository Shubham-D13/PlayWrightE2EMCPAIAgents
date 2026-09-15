//my first variable example
let myVariable = "Hello, world!", secondVariable = "Hello again!";
console.log(myVariable);
console.log(secondVariable);

/*
var, 
let, 
const
*/

// let variable example
let App_KEY = "123456";
console.log("The API key is: " + App_KEY);

// const variable example
const App_URL = "https://example.com";
console.log("The application URL is: " + App_URL);

//let variable example
// let is used to declare block-scoped variables. Unlike var, it is limited to the block, statement, 
// or expression where it is used. Also there is no need initializing it immediately.
let value = 0;
value = 10; 
console.log("The value is: " + value);

let count = 0;

if (true) {
    let count = 10;
    console.log("The count inside the block is: " + count);
}
console.log("The count outside the block is: " + count);