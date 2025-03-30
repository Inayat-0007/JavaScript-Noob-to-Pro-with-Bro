// JavaScript Variables: A Comprehensive Guide
// Definition
// A variable in JavaScript is a named identifier (container) that stores data values. It acts as a reference to a memory location where values can be stored, retrieved, or modified during program execution. Variables enable dynamic data handling and are foundational to programming logic.

// Types of Variables
// JavaScript provides three keywords to declare variables: var, let, and const.



// var
// Function-scoped: Accessible within the function it’s declared in.

// Hoisting: Declarations are moved to the top of their scope during compilation (initialized as undefined).

// Redeclaration: Allowed in the same scope.

// var Inayat = 552000;
// var Saqlain = 551999;
//  console.log(Inayat);
//  console.log(Saqlain);
//  var Inayat = 551999;
//  console.log(Inayat);

// function example(){
//     console.log(a);
//     var a = 10;
//     console.log(a);

// }
//  example();

// ----------------------------------------------
// let (Block-Scoped, Recommended for Reassignment)
// Introduced in ES6, let is block-scoped (only exists within {} block).

// Can be reassigned, but cannot be redeclared in the same scope.

// Hoisting applies, but stays in the Temporal Dead Zone (TDZ) until declaration.


// if (true){
//     let x = 5;
//     console.log(x);

// };
// console.log(x);
//----------------------------------------------------------


// const (Block-Scoped, Immutable Binding)
// Cannot be reassigned (though objects can have mutable properties).

// Block-scoped, like let.

// Hoisted, but stays in the Temporal Dead Zone (TDZ).

// const Inayat = "Pragati";
// Inayat = "No on can replace"

// 3. Hoisting & Temporal Dead Zone (TDZ)
// Hoisting moves declarations to the top of their scope.

// var variables are hoisted and initialized as undefined.

// let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until declared.

// 💡 Example:

// javascript
// Copy
// Edit
// console.log(a); // undefined
// var a = 10;

// console.log(b); // ReferenceError
// let b = 20;


//--------------------------------------------------------------------------------------------------------------------------------------------



// Variable Scope in JavaScript
//scope determine where a variable is can be accessed.

// 1️⃣ Global Scope
// Declared outside of any function or block.

// Accessible anywhere in the script.

// Be careful! Global variables can cause conflicts in large programs.


// let globalVar = "i am global variable";
// function test(){
//     console.log(globalVar);
// }
// test();
// console.log(globalVar);

// [Running] node "c:\Users\moham\Music\JavaScript\variAbleinJS.js"
// i am global variable
// i am global variable

// 2️⃣ Function Scope (var)
// Variables declared with var inside a function are only accessible within that function.

// 💡 Example:

// javascript
// Copy
// Edit
// function test() {
//     var localVar = "I'm local";
//     console.log(localVar); // Works
// }
// console.log(localVar); // Error: localVar is not defined


//------------------------------------------------------

// 3️⃣ Block Scope (let, const)
// // Variables declared with let and const inside {} are only accessible within that block

// if (true){
//     let blockscoped = "I am inayat hussain";
//     console.log(blockscoped);

// }
// console.log(blockscoped);



// 3. Hoisting & Temporal Dead Zone (TDZ)
// Hoisting moves variable declarations to the top of their scope.

// var is hoisted with undefined.

// let and const are hoisted but stay in the Temporal Dead Zone (TDZ) until declared.

// 💡 Example:

// javascript
// Copy
// Edit
// console.log(a); // undefined (hoisting)
// var a = 10;

// console.log(b); // ReferenceError (TDZ)
// let b = 20;



//---------------------------------------------------------------


// Type Coercion & Dynamic Typing
// JavaScript allows variables to change types dynamically.

// let x = 5;
// console.log(x);
// x = "inayat birthdate"
// console.log(x);

// type Coercion
// JavaScript automatically converts types in certain operations.

// console.log(typeof("5"+2)); // string + num -52 string
// console.log(typeof("5"-2));// string - num -3  num
// console.log(5 == "5"); // num == string- true
// console.log(5 === "5");// num === string - false


// 6. Variable Naming Rules
// Must start with a letter, underscore (_), or dollar sign ($).

// Cannot start with a number.

// Case-sensitive (myVar and myvar are different).

// Cannot use reserved keywords like let, const, var, etc.

// 💡 Example:

// javascript
// Copy
// Edit
// let firstName = "John"; // ✅ Valid
// let _id = 123; // ✅ Valid
// let $price = 99.99; // ✅ Valid
// let 1user = "Alice"; // ❌ Invalid (cannot start with a number)


// Best Practices for Using Variables
// ✔️ Use const unless reassignment is needed.
// ✔️ Use let for variables that will change.
// ✔️ Avoid var due to scope and hoisting issues.
// ✔️ Use meaningful names (userAge, isLoggedIn).
// ✔️ Avoid global variables when possible.
// ✔️ Use === for strict comparison to avoid type coercion issues.

