/* JS variables
js is a dynamically typed language like python

Declare variables 4 ways:
Automatically
use var     always has global scope
use let     always has block (of code) scope
use const   always has block scope and must be assigned a value

You can run js in the command line of your browser

When to Use var, let, or const?
1. Always declare variables
2. Always use const if the value should not be changed
3. Always use const if the type should not be changed (Arrays and Objects)
4. Only use let if you can't use const
5. Only use var if you MUST support old browsers.

JavaScript Data Types
JavaScript can handle many types of data, but for now, just think of numbers and strings.
Strings are written inside double or single quotes. Numbers are written without quotes.
If you put a number in quotes, it will be treated as a text string.
*/

// w = "17"
// var x = 10;
// let y = 11;
// const z = "David"

// // Displaying Data

// document.getElementById("display").innerHTML = `
// <p> w = ${w} </p> 
// <p> x = ${x} </p>
// <p> y = ${y} </p>
// <p> z = ${z} </p>
// `;

// console.log(w, x, y, z)

//  A variable declared without a value will have the value undefined.
document.body.innerHTML = "<div id='test'>Hello</div>"
let elem = document.getElementById('test');
elem.innerHTML = 'World';
console.log(document.body.innerHTML);
