/*
Data Types in JavaScript
1.string
2.number
3.boolean
4.undefined and null
5.object
6.symbol
7.bigint
*/

//String :- is used to represent textual data. It is enclosed in single quotes, double quotes, or backticks.
let myString11 = "Hello";
let myString12 = 'Hello again!';
// Template literals allow embedding expressions within string literals using backticks and ${}.
let myString13 = `${myString11},world!`;
console.log(myString13);


//Number :- is used to represent numeric values. It can be an integer or a floating-point number.
let myNumber = 42;
console.log(myNumber);

//Boolean :- is used to represent logical values, either true or false. system defined values
let myBoolean = true;
console.log(myBoolean);

// object :- is used to store collections of data and more complex entities. Objects are key-value pairs.
//  objects can contain other objects, arrays, functions, and primitive data types.
let myObject = { name: "John", age: 30 };
console.log(myObject);


//Undefined :- represents a variable that has been declared but has not been assigned a value.
let myUndefined;
console.log(myUndefined);

//Null :- represents the intentional absence of any object value.
let myNull = null;
console.log(myNull);

//Symbol :- is used to create unique identifiers for objects.
let mySymbol = Symbol("mySymbol");
console.log(mySymbol);

//BigInt :- is used to represent integers with arbitrary precision.
let myBigInt = 1234567890123456789012345678901234567890n;
console.log(myBigInt);

// Array :- is used to store multiple values in a single variable. Arrays are ordered collections of elements.
let myArray = [1, 2, 3, 4, 5];
console.log(myArray);

//RegExp :- is used to define patterns for matching text.
let myRegExp = /hello/i;
console.log(myRegExp);

//1. Whats use of typeof Operator
// a. to understand a data type of JS components or variables.

// Different ways to use typeof operator
// 1. Literals :- is actual values like numbers, strings, booleans, etc. For example:
   console.log(typeof 42); // "number"
   console.log(typeof "Hello"); // "string"
   console.log(typeof true); // "boolean"
   console.log(typeof undefined); // "undefined"
   console.log(typeof null); // "object" (this is a known quirk in JavaScript)

// 2. Variables :- is used to store data that can be referenced and manipulated later.or hold the any type of data 
// For example:
   let myVar = 42;
   console.log(typeof myVar); // "number"
   myVar = "Hello";
   console.log(typeof myVar); // "string"

// 3. Expressions :- is used to evaluate a combination of variables, literals, and operators. (Evaluate to, mostly using operators or return statements)
// For example:
   console.log(typeof (42 + 8)); // "number"
   console.log(typeof ("Hello" + " World")); // "string"

   function sum(num1, num2) {
       return num1 + num2; // returns the sum of num1 and num2
   }
   console.log(sum(5, 3)); // calling the sum function with arguments 5 and 3
   console.log(typeof sum(5, 3)); // "number"


// dataType conversion in JavaScript

// a. parseInt() :- is used to convert a string into an integer.
 let val1 = "42";
 let val2 = "3.14";

 console.log(`The type of val1: ${typeof val1}`); 
 console.log(`The type of val2: ${typeof val2}`); 

 // Converting string to integer using parseInt()

 numVal1 = parseInt(val1);
 numVal2 = parseInt(val2);

 //Conver a string to number using the previously stored variables

 console.log(`The type of numVal1: ${typeof numVal1}, and the value is ${numVal1}`); 
 console.log(`The type of numVal2: ${typeof numVal2}, and the value is ${numVal2}`); 