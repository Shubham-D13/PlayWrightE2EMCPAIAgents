   // Truthy, Falsy and nullish values in JavaScript

//    // what are the falsy values in javascript 
//     a. false
//     b. undefined
//     c. null
//     d. 0
//     e. NaN (Not-a-Number)
//     f. "" (empty string)

//    // what are the truthy values in javascript
//     a. true
//     b. any non-zero number (e.g., 1, -1, 3.14)
//     c. any non-empty string (e.g., "hello")
//     d. any object (e.g., {}, [])
//     e. any function
//     f. any symbol (e.g., Symbol("id"))  

let val = false; // example of a falsy value

if (val) {
    console.log("Truthy value");
} else {
    console.log("Falsy value");
}

let val2 = 5 + undefined; // example of a truthy value

console.log(val2); // will print NaN, which is a falsy value

let val3 = 5 + null; // example of a falsy value

console.log(val3); // will print null, which is a falsy value