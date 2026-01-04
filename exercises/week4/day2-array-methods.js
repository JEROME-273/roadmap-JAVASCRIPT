// Week 4, Day 2: Array Methods - Powerful Data Manipulation
// Modern JavaScript has amazing built-in array methods

console.log("=== Week 4, Day 2: Array Methods ===\n");

// Sample data for our exercises
const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const names = ["Alice", "Bob", "Charlie", "Diana", "Eve"];

// Task 1: forEach - Execute code for each item
console.log("=== Task 1: forEach ===");

// TODO: Use forEach to print each number
numbers.forEach(function (num) {
  console.log("Number:", num);
});

// TODO: Use forEach with index
names.forEach(function (name, index) {
  console.log(`${index + 1}. ${name}`);
});

// Task 2: map - Transform each item
console.log("\n=== Task 2: map - Transform Arrays ===");

// TODO: Create an array of squares
const squares = numbers.map(function (num) {
  return num * num;
});
console.log("Squares:", squares);

// TODO: Convert names to uppercase
const upperNames = names.map(function (name) {
  return name.toUpperCase();
});
console.log("Uppercase names:", upperNames);

// TODO: Create a function that doubles all numbers
function doubleNumbers(array) {
  return array.map(function (num) {
    return num * 2;
  });
}
console.log("Doubled:", doubleNumbers([1, 2, 3, 4, 5]));

// Task 3: filter - Keep only items that match a condition
console.log("\n=== Task 3: filter - Select Items ===");

// TODO: Get only even numbers
const evenNumbers = numbers.filter(function (num) {
  return num % 2 === 0;
});
console.log("Even numbers:", evenNumbers);

// TODO: Get names longer than 4 characters
const longNames = names.filter(function (name) {
  return name.length > 4;
});
console.log("Long names:", longNames);

// TODO: Function to filter numbers greater than a value
function filterGreaterThan(array, value) {
  return array.filter(function (num) {
    return num > value;
  });
}
console.log("Numbers > 5:", filterGreaterThan(numbers, 5));

// Task 4: find and findIndex
console.log("\n=== Task 4: find and findIndex ===");

// TODO: Find the first number greater than 5
const firstBigNumber = numbers.find(function (num) {
  return num > 5;
});
console.log("First number > 5:", firstBigNumber);

// TODO: Find the index of "Charlie"
const charlieIndex = names.findIndex(function (name) {
  return name === "Charlie";
});
console.log("Charlie is at index:", charlieIndex);

// Task 5: includes - Check if value exists
console.log("\n=== Task 5: includes ===");

console.log("Does array include 5?", numbers.includes(5));
console.log("Does array include 'Alice'?", names.includes("Alice"));
console.log("Does array include 'Frank'?", names.includes("Frank"));

// Task 6: reduce - Combine all items into one value
console.log("\n=== Task 6: reduce - Powerful Aggregation ===");

// TODO: Sum all numbers
const sum = numbers.reduce(function (total, num) {
  return total + num;
}, 0); // 0 is the starting value
console.log("Sum:", sum);

// TODO: Find the maximum number
const max = numbers.reduce(function (maximum, num) {
  return num > maximum ? num : maximum;
}, numbers[0]);
console.log("Maximum:", max);

// Task 7: Chaining Methods
console.log("\n=== Task 7: Chaining Methods ===");

// TODO: Get sum of squares of even numbers
const sumOfEvenSquares = numbers
  .filter((num) => num % 2 === 0) // Get even numbers
  .map((num) => num * num) // Square them
  .reduce((sum, num) => sum + num, 0); // Sum them

console.log("Sum of squares of even numbers:", sumOfEvenSquares);

// Task 8: sort and reverse
console.log("\n=== Task 8: sort and reverse ===");

const unsorted = [5, 2, 8, 1, 9];
const sorted = [...unsorted].sort((a, b) => a - b);
console.log("Sorted:", sorted);

const reversed = [...numbers].reverse();
console.log("Reversed:", reversed);

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

const products = [
  { name: "Laptop", price: 1000 },
  { name: "Phone", price: 500 },
  { name: "Tablet", price: 300 },
  { name: "Watch", price: 200 },
];

// TODO: Get all product names using map
function getProductNames(products) {
  // Your code here
}

// TODO: Get products cheaper than $400 using filter
function getAffordableProducts(products, maxPrice) {
  // Your code here
}

// TODO: Calculate total price of all products using reduce
function getTotalPrice(products) {
  // Your code here
}

// TODO: Get names of products cheaper than $400
function getAffordableProductNames(products, maxPrice) {
  // Your code here
  // Hint: Use filter then map, or chain them!
}

// Test your functions
// console.log("Product names:", getProductNames(products));
// console.log("Affordable products:", getAffordableProducts(products, 400));
// console.log("Total price:", getTotalPrice(products));
// console.log("Affordable names:", getAffordableProductNames(products, 400));

console.log("\n✅ Amazing! You've mastered array methods!");
console.log("💡 These methods are used constantly in real-world JavaScript!");
console.log("🚀 Next: Learn about objects to organize your data better!");

// Run with: node day2-array-methods.js
