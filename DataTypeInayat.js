// JavaScript Data Types
//JavaScript has different data types that define the kind of values that can be stored and manipulated. Understanding them is crucial for writing efficient and error-free code.

// 1. Primitive Data Types
//These are immutable (cannot be changed) and stored by value.

// 1.1 Number
// Represents both integers and floating-point numbers.

// JavaScript uses 64-bit floating-point format (IEEE 754).

// Special values: Infinity, -Infinity, NaN (Not a Number).

// ✅ Example:

// javascript
// Copy
// Edit
// let num1 = 10;
// let num2 = 3.14;
// console.log(num1 + num2); // 13.14
// console.log(typeof num1);
// console.log(typeof num2); // "number"
// ❌ Avoid:

// Doing mathematical operations on NaN.

// Precision issues with floating points (e.g., 0.1 + 0.2 !== 0.3).

// 2 String
// A sequence of characters enclosed in single ('), double ("), or backticks (``).

// Strings are immutable.

// ✅ Example:

// javascript

// let str1 = "Hello";
// let str2 = 'World';
// let str3 = `JavaScript`; // Template literals allow embedding expressions: `${expression}`
//console.log(str1 + " " + str2); // "Hello World"
// ❌ Avoid:

// Using + for concatenation when template literals (${}) can improve readability.

// Modifying string characters directly (str[0] = "H" won’t work).

// 3 Boolean
// Represents true or false values.

// ✅ Example:

// javascript
// Copy code
// let isActive = true;
// console.log(isActive); // true
// console.log(typeof isActive); // "boolean"
// ❌ Avoid:

// Using non-boolean values in logical conditions without understanding truthy and falsy values.

// 4 Undefined
// A variable is declared but not assigned a value.

// ✅ Example:

// javascript
// Copy code
// let x;
// console.log(x); // undefined
// ❌ Avoid:

// Explicitly assigning undefined, use null instead.

// 5 Null
// Represents an intentional absence of a value.

// ✅ Example:

// javascript
// Copy code
// let y = null;
// console.log(y); // null
// console.log(typeof y); // "object" (JavaScript bug)
// ❌ Avoid:

// Confusing null with undefined.

// Using typeof null, as it mistakenly returns "object".

//--------------------------------------------------------

// 2. Non-Primitive Data Types (Objects)
//These are mutable and stored by reference.
//1 Object
// A collection of key-value pairs.
// example

// let Details = {
//     name:"Inayat",
//     age:25,
//     City:"Bhopal"
// };
// console.log(Details);
// console.log(Details.name);
// console.log(Details.age);
// console.log(Details.City);
// ❌ Avoid:

// Using . to access properties that don’t exist (person.salary returns undefined)

// 2 Array
// A special type of object used to store ordered lists of values.

// // ✅ Example:
// let Arr1 = [1,2,3,"Inayat"];
// console.log(Arr1);
// console.log(Arr1[0]);
// console.log(Arr1[1]);
// console.log(Arr1[2]);
// console.log(Arr1[3]);

// ❌ Avoid:

// Mixing different types unless necessary.

// Using for...in on arrays; use for...of or forEach.

// 3 Function
// Functions are first-class objects in JavaScript.

// // ✅ Example:
// function greet(b){
//     let a = "Hello";
    
//     return a + b;
// };
// console.log(greet(" Inayat"));

// ❌ Avoid:

// Forgetting to return a value when needed.

// 5 Map
// A collection of key-value pairs where keys can be any type.

// ✅ Example:

// let map = new Map();
// map.set("Name","Inayat");
// console.log(map.get("Name"));


// 6 Set
// Stores unique values.

// ✅ Example:

// javascript
// Copy code
// let set = new Set([1, 2, 2, 3]);
// console.log(set); // {1, 2, 3}
// ❌ Avoid:

// Using a Set when duplicate values are needed.

//------------------------------------------------------

// 3. Type Conversion
// 3. Type Conversion
// 3.1 Implicit Conversion (Type Coercion)
// JavaScript automatically converts types in some cases.

// ✅ Example:

// javascript
// Copy code
// console.log("5" - 2); // 3 (string converted to number)
// ❌ Avoid:

// Relying on implicit conversion, as it can cause bugs.

// 3.2 Explicit Conversion
// Use functions like Number(), String(), Boolean().

// ✅ Example:

// javascript
// Copy code
// let str = "123";
// let num = Number(str);
// console.log(num); // 123
// ❌ Avoid:

// Forgetting to convert user input (prompt() always returns a string).


