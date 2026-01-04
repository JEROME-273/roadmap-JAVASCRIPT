// Day 1: Variables and Data Types Practice
// Complete the TODOs below step by step

// Task 1: Create variables for personal information
// TODO: Declare a variable for your name (use let or const)
// Example: const myName = "Your Name";

const myName = "Paul Jerome A. Martinez";
// TODO: Declare a variable for your age
// Example: let myAge = 25;
let myAge = 25;

// TODO: Declare a variable for whether you like programming (true/false)
// Example: const likesProgramming = true;
const willingTolearn = true;

console.log("=== Personal Information ===");
// TODO: Use console.log to display your variables
console.log("Name:", myName);
console.log("Age:", myAge);
console.log("Willing to Learn Programming:", willingTolearn);

// Task 2: Practice with different data types
console.log("\n=== Data Types Practice ===");

// TODO: Create examples of each data type:
// String example
const exampleString = "Hello World";

// Number example
const exampleNumber = 42;

// Boolean example
const exampleBoolean = false;

// Undefined example (declare but don't assign)
let exampleUndefined;

// Null example
const exampleNull = null;

// TODO: Use typeof operator to check data types
console.log("String type:", typeof exampleString);
console.log("Number type:", typeof exampleNumber);
console.log("Boolean type:", typeof exampleBoolean);
console.log("Undefined type:", typeof exampleUndefined);
console.log("Null type:", typeof exampleNull); // Note: this will return 'object' due to a quirk in JavaScripts
// Add console.log for other types...

// Task 3: Simple calculations
console.log("\n=== Math Operations ===");

// TODO: Create two numbers
const num1 = 10;
const num2 = 5;

// TODO: Perform and display basic math operations
console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);

// Task 4: String operations
console.log("\n=== String Operations ===");

// TODO: Create a greeting message using your name variable
const greeting = "Hello, my name is " + myName + "!";
console.log(greeting);

// TODO: Try template literals (modern way)
const modernGreeting = `Hello, my name is ${myName} and I am ${myAge} years old!`;
console.log(modernGreeting);

// BONUS: Try to run this file and see the output!
// In terminal, type: node day1-variables.js
