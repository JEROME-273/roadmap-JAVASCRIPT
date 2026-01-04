// Week 3, Day 3: For Loops - Repeating Actions Efficiently
// Loops let you repeat code without writing it over and over

console.log("=== Week 3, Day 3: For Loops ===\n");

// Task 1: Basic For Loop
console.log("=== Task 1: Basic For Loop ===");

// TODO: Write a loop that counts from 1 to 5
for (let i = 1; i <= 5; i++) {
  console.log("Count:", i);
}

// TODO: Write a loop that counts from 10 down to 1
console.log("\nCountdown:");
for (let i = 10; i >= 1; i--) {
  console.log(i);
}
console.log("Blast off! 🚀");

// Task 2: Loops with Arrays
console.log("\n=== Task 2: Loops with Arrays ===");

const fruits = ["apple", "banana", "orange", "grape", "mango"];

// TODO: Use a for loop to print each fruit
for (let i = 0; i < fruits.length; i++) {
  console.log(`${i + 1}. ${fruits[i]}`);
}

// TODO: Create a function that prints all items in an array
function printArray(array) {
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);
  }
}

const colors = ["red", "blue", "green"];
console.log("\nColors:");
printArray(colors);

// Task 3: Loops with Calculations
console.log("\n=== Task 3: Loops with Calculations ===");

// TODO: Calculate the sum of numbers 1 to 10
let sum = 0;
for (let i = 1; i <= 10; i++) {
  sum += i; // Same as: sum = sum + i
}
console.log("Sum of 1 to 10:", sum);

// TODO: Function to calculate sum of numbers in an array
function sumArray(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

const nums = [5, 10, 15, 20];
console.log("Sum of array:", sumArray(nums));

// Task 4: Finding Values with Loops
console.log("\n=== Task 4: Finding Values ===");

// TODO: Find the largest number in an array
function findMax(numbers) {
  let max = numbers[0]; // Start with first number
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) {
      max = numbers[i];
    }
  }
  return max;
}

const values = [3, 7, 2, 9, 1, 5];
console.log("Largest number:", findMax(values));

// Task 5: Nested Loops
console.log("\n=== Task 5: Nested Loops ===");

// TODO: Print a multiplication table
console.log("Multiplication Table (1-5):");
for (let i = 1; i <= 5; i++) {
  let row = "";
  for (let j = 1; j <= 5; j++) {
    row += (i * j).toString().padStart(4, " ");
  }
  console.log(row);
}

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Write a function that counts how many even numbers are in an array
function countEvenNumbers(numbers) {
  // Your code here
  let count = 0;
  // Use a for loop to check each number
  // If number % 2 === 0, increment count
  return count;
}

// TODO: Write a function that creates an array of squares
// Example: squares(5) returns [1, 4, 9, 16, 25]
function squares(n) {
  // Your code here
  const result = [];
  // Use a for loop from 1 to n
  // Push i * i to result array
  return result;
}

// TODO: Write a function that reverses an array
function reverseArray(array) {
  // Your code here
  const reversed = [];
  // Loop backwards through the array
  return reversed;
}

// TODO: Write a function to find all numbers divisible by 3 from 1 to n
function divisibleByThree(n) {
  // Your code here
  const result = [];
  // Loop from 1 to n
  // If i % 3 === 0, add to result
  return result;
}

// Test your functions
// console.log("Even numbers in [1,2,3,4,5,6]:", countEvenNumbers([1,2,3,4,5,6]));
// console.log("Squares of 1-5:", squares(5));
// console.log("Reverse [1,2,3,4,5]:", reverseArray([1,2,3,4,5]));
// console.log("Numbers divisible by 3 (1-20):", divisibleByThree(20));

console.log("\n✅ Excellent! You've mastered for loops!");
console.log("💡 Loops are one of the most powerful tools in programming!");

// Run with: node day3-for-loops.js
