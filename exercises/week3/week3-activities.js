// ===================================
// WEEK 3 ACTIVITIES: Conditionals & Loops
// ===================================
// Instructions: Solve each activity. Hints are provided in Tagalog!

// ===================================
// ACTIVITY 1: FizzBuzz
// ===================================
// Create a function that prints numbers 1-100, but:
// - "Fizz" for multiples of 3
// - "Buzz" for multiples of 5
// - "FizzBuzz" for multiples of both 3 and 5
// Hint: Gamitin ang `%` modulo at `for` loop. Check muna kung divisible by both (15).

function fizzBuzz() {
  // Your code here
  // Use a for loop from 1 to 100
}

// Test your function:
// fizzBuzz();

// ===================================
// ACTIVITY 2: Find Even Numbers in Range
// ===================================
// Write a function that finds all even numbers in a range
// Hint: Gamitin ang `for` loop at `num % 2 === 0`.

function findEvenNumbers(start, end) {
  // Your code here
  // Return an array of even numbers
}

// Test your function:
// console.log("Even numbers 1-10:", findEvenNumbers(1, 10));
// console.log("Even numbers 5-20:", findEvenNumbers(5, 20));

// ===================================
// ACTIVITY 3: Grade Calculator
// ===================================
// Create a grade calculator (A, B, C, D, F based on score)
// A = 90-100, B = 80-89, C = 70-79, D = 60-69, F = below 60
// Hint: Gamitin ang `if-else if` chain.

function calculateGrade(score) {
  // Your code here
}

// Test your function:
// console.log("Score 95:", calculateGrade(95));
// console.log("Score 85:", calculateGrade(85));
// console.log("Score 72:", calculateGrade(72));
// console.log("Score 65:", calculateGrade(65));
// console.log("Score 45:", calculateGrade(45));

// ===================================
// ACTIVITY 4: Star Triangle
// ===================================
// Write a function that prints a triangle of stars using loops
// Example for rows=5:
// *
// **
// ***
// ****
// *****
// Hint: Gamitin ang nested loops: outer loop = rows, inner loop = stars per row.

function printTriangle(rows) {
  // Your code here
}

// Test your function:
// printTriangle(5);
// printTriangle(3);

// ===================================
// ACTIVITY 5: Number Guessing Game
// ===================================
// Create a number guessing game function
// Returns "Too high!", "Too low!", or "Correct!"
// Hint: Gamitin ang `if-else` para compare guess vs secret number.

function guessNumber(secretNumber, guess) {
  // Your code here
}

// Test your function:
// const secret = 7;
// console.log("Guess 5:", guessNumber(secret, 5));
// console.log("Guess 9:", guessNumber(secret, 9));
// console.log("Guess 7:", guessNumber(secret, 7));

// ===================================
// ACTIVITY 6: Factorial Calculator
// ===================================
// Write a function that calculates factorial
// Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
// Hint: Gamitin ang `for` loop o `while` loop, multiply from n down to 1.

function factorial(n) {
  // Your code here
}

// Test your function:
// console.log("5! =", factorial(5));  // 120
// console.log("4! =", factorial(4));  // 24
// console.log("3! =", factorial(3));  // 6
// console.log("1! =", factorial(1));  // 1
// console.log("0! =", factorial(0));  // 1 (by definition)

// ===================================
// Run with: node week3-activities.js
// ===================================
console.log("Week 3 Activities - Complete the functions above!");
console.log("Uncomment the test cases to check your answers.");
