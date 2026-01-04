// Day 2: Functions Practice
// Functions are like mini-programs that do specific jobs

console.log("=== Learning Functions ===");

// Task 1: Create your first function
// TODO: Write a function called 'sayHello' that prints "Hello World!"

// function sayHello() {
//     console.log("Hello World!");
// }

// TODO: Call your function
// sayHello();

// Task 2: Functions with parameters
console.log("\n=== Functions with Parameters ===");

// TODO: Write a function called 'greetPerson' that takes a name parameter
// and says hello to that specific person

// function greetPerson(name) {
//     console.log("Hello, " + name + "!");
// }

// TODO: Call your function with different names
// greetPerson("Alice");
// greetPerson("Bob");
// greetPerson("Charlie");

// Task 3: Functions that return values
console.log("\n=== Functions with Return Values ===");

// TODO: Write a function called 'addNumbers' that takes two numbers
// and returns their sum

// function addNumbers(num1, num2) {
//     return num1 + num2;
// }

// TODO: Call your function and store the result
// const result = addNumbers(5, 3);
// console.log("5 + 3 =", result);

// TODO: Try with different numbers
// console.log("10 + 7 =", addNumbers(10, 7));

// Task 4: Practice with real-world functions
console.log("\n=== Real-world Function Practice ===");

// TODO: Write a function that calculates the area of a rectangle
// Formula: area = length * width

function calculateRectangleArea(length, width) {
  return length * width;
}

// TODO: Test your function
console.log("Rectangle area (5x3):", calculateRectangleArea(5, 3));
console.log("Rectangle area (10x2):", calculateRectangleArea(10, 2));

// BONUS Tasks:
// TODO: Write a function that calculates the area of a circle
// Formula: area = π * radius²
// Hint: Use Math.PI for π and Math.pow(radius, 2) for radius²

function calculateCircleArea(radius) {
  return Math.PI * Math.pow(radius, 2);
}

// TODO: Write a function that checks if a number is even
// Hint: Use the modulo operator (%) - if num % 2 === 0, it's even

function isEven(number) {
  return number % 2 === 0;
}

// TODO: Test your bonus functions
console.log("Circle area (radius 5):", calculateCircleArea(5));
console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

// Run this file with: node day2-functions.js
