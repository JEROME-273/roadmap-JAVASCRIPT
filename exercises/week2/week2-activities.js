// ===================================
// WEEK 2 ACTIVITIES: Functions & Problem Solving
// ===================================
// Instructions: Solve each activity. Hints are provided in Tagalog!

// ===================================
// ACTIVITY 1: Find the Larger Number
// ===================================
// Create a function that finds the larger of two numbers
// Hint: Gamitin ang `if-else` o `Math.max()`.

function findLarger(num1, num2) {
  // Your code here
}

// Test your function:
// console.log("Larger of 5 and 10:", findLarger(5, 10));
// console.log("Larger of 20 and 15:", findLarger(20, 15));
// console.log("Larger of 7 and 7:", findLarger(7, 7));

// ===================================
// ACTIVITY 2: Reverse a String
// ===================================
// Write a function that reverses a string
// Hint: Gamitin ang `.split("")`, `.reverse()`, at `.join("")`.

function reverseString(str) {
  // Your code here
}

// Test your function:
// console.log("Reverse 'hello':", reverseString("hello"));
// console.log("Reverse 'JavaScript':", reverseString("JavaScript"));
// console.log("Reverse '12345':", reverseString("12345"));

// ===================================
// ACTIVITY 3: Count Vowels
// ===================================
// Create a function that counts vowels in a string
// Hint: Gamitin ang loop at check kung `"aeiou".includes(letter.toLowerCase())`.

function countVowels(str) {
  // Your code here
}

// Test your function:
// console.log("Vowels in 'hello':", countVowels("hello"));
// console.log("Vowels in 'AEIOU':", countVowels("AEIOU"));
// console.log("Vowels in 'rhythm':", countVowels("rhythm"));

// ===================================
// ACTIVITY 4: Random Number Generator
// ===================================
// Write a function that generates a random number between min and max
// Hint: Gamitin ang `Math.random() * (max - min + 1) + min` at `Math.floor()`.

function randomBetween(min, max) {
  // Your code here
}

// Test your function:
// console.log("Random 1-10:", randomBetween(1, 10));
// console.log("Random 50-100:", randomBetween(50, 100));
// console.log("Random 1-6 (dice):", randomBetween(1, 6));

// ===================================
// ACTIVITY 5: Simple Calculator
// ===================================
// Create a simple calculator function (add, subtract, multiply, divide)
// Hint: Gamitin ang `if-else` o `switch` para sa operation.

function calculate(num1, num2, operation) {
  // Your code here
  // operation can be: "add", "subtract", "multiply", "divide"
}

// Test your function:
// console.log("10 + 5 =", calculate(10, 5, "add"));
// console.log("10 - 5 =", calculate(10, 5, "subtract"));
// console.log("10 * 5 =", calculate(10, 5, "multiply"));
// console.log("10 / 5 =", calculate(10, 5, "divide"));

// ===================================
// ACTIVITY 6: Palindrome Checker
// ===================================
// Write a function that checks if a word is a palindrome
// (reads same forwards and backwards: "racecar", "level", "madam")
// Hint: I-reverse ang string tapos compare kung pareho sa original.

function isPalindrome(word) {
  // Your code here - return true if palindrome, false if not
}

// Test your function:
// console.log("Is 'racecar' palindrome?", isPalindrome("racecar"));
// console.log("Is 'hello' palindrome?", isPalindrome("hello"));
// console.log("Is 'level' palindrome?", isPalindrome("level"));
// console.log("Is 'madam' palindrome?", isPalindrome("madam"));

// ===================================
// Run with: node week2-activities.js
// ===================================
console.log("Week 2 Activities - Complete the functions above!");
console.log("Uncomment the test cases to check your answers.");
