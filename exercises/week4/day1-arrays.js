// Week 4, Day 1: Array Fundamentals
// Arrays store lists of data - super important in JavaScript!

console.log("=== Week 4, Day 1: Arrays ===\n");

// Task 1: Creating Arrays
console.log("=== Task 1: Creating Arrays ===");

// TODO: Different ways to create arrays
const fruits = ["apple", "banana", "orange"];
const numbers = [1, 2, 3, 4, 5];
const mixed = [1, "hello", true, null, { name: "John" }];
const empty = [];

console.log("Fruits:", fruits);
console.log("Numbers:", numbers);
console.log("Mixed types:", mixed);
console.log("Empty array:", empty);

// Task 2: Accessing Array Elements
console.log("\n=== Task 2: Accessing Elements ===");

// Arrays use zero-based indexing!
console.log("First fruit:", fruits[0]); // "apple"
console.log("Second fruit:", fruits[1]); // "banana"
console.log("Last fruit:", fruits[2]); // "orange"

// TODO: Access from the end using negative index trick
console.log("Last item:", fruits[fruits.length - 1]);
console.log("Second to last:", fruits[fruits.length - 2]);

// Task 3: Array Length
console.log("\n=== Task 3: Array Length ===");

console.log("Fruits length:", fruits.length);
console.log("Numbers length:", numbers.length);

// TODO: Check if array is empty
function isEmpty(array) {
  return array.length === 0;
}

console.log("Is fruits empty?", isEmpty(fruits));
console.log("Is empty empty?", isEmpty(empty));

// Task 4: Adding Elements
console.log("\n=== Task 4: Adding Elements ===");

const colors = ["red", "green"];
console.log("Original:", colors);

// TODO: Add to the end with push()
colors.push("blue");
console.log("After push:", colors);

// TODO: Add to the beginning with unshift()
colors.unshift("yellow");
console.log("After unshift:", colors);

// TODO: Add multiple items
colors.push("purple", "orange");
console.log("After multiple push:", colors);

// Task 5: Removing Elements
console.log("\n=== Task 5: Removing Elements ===");

const animals = ["dog", "cat", "bird", "fish", "rabbit"];
console.log("Original:", animals);

// TODO: Remove from end with pop()
const lastAnimal = animals.pop();
console.log("Popped:", lastAnimal);
console.log("After pop:", animals);

// TODO: Remove from beginning with shift()
const firstAnimal = animals.shift();
console.log("Shifted:", firstAnimal);
console.log("After shift:", animals);

// Task 6: Finding Elements
console.log("\n=== Task 6: Finding Elements ===");

const cities = ["Manila", "Cebu", "Davao", "Makati", "Quezon City"];

// TODO: Find index of an element
const cIndex = cities.indexOf("Davao");
console.log("Index of Davao:", cIndex);

// TODO: Check if element exists
const hasManila = cities.indexOf("Manila") !== -1;
const hasBaguio = cities.indexOf("Baguio") !== -1;
console.log("Has Manila?", hasManila);
console.log("Has Baguio?", hasBaguio);

// Better way: use includes()
console.log("Has Cebu?", cities.includes("Cebu"));
console.log("Has Baguio?", cities.includes("Baguio"));

// Task 7: Modifying Elements
console.log("\n=== Task 7: Modifying Elements ===");

const scores = [85, 90, 75, 88, 92];
console.log("Original scores:", scores);

// TODO: Change a specific element
scores[2] = 80; // Change 75 to 80
console.log("After modifying index 2:", scores);

// TODO: Increment all scores by 5
function addBonusPoints(scores, bonus) {
  for (let i = 0; i < scores.length; i++) {
    scores[i] += bonus;
  }
}

addBonusPoints(scores, 5);
console.log("After adding 5 bonus points:", scores);

// Task 8: Slicing Arrays
console.log("\n=== Task 8: Slicing Arrays ===");

const letters = ["A", "B", "C", "D", "E", "F"];

// TODO: slice(start, end) - doesn't modify original
const middle = letters.slice(2, 5); // Get index 2,3,4
console.log("Original:", letters);
console.log("Slice(2,5):", middle);

const firstThree = letters.slice(0, 3);
console.log("First three:", firstThree);

const lastTwo = letters.slice(-2);
console.log("Last two:", lastTwo);

// Task 9: Splicing Arrays
console.log("\n=== Task 9: Splicing Arrays ===");

const months = ["Jan", "Feb", "Mar", "May", "Jun"];
console.log("Original:", months);

// TODO: splice(start, deleteCount, items...) - MODIFIES original
// Insert "Apr" at index 3
months.splice(3, 0, "Apr");
console.log("After inserting Apr:", months);

// Remove 2 items starting at index 4
const removed = months.splice(4, 2);
console.log("Removed:", removed);
console.log("After removing:", months);

// Replace items
months.splice(2, 1, "March");
console.log("After replacing:", months);

// Task 10: Combining Arrays
console.log("\n=== Task 10: Combining Arrays ===");

const array1 = [1, 2, 3];
const array2 = [4, 5, 6];

// TODO: Using concat()
const combined = array1.concat(array2);
console.log("Array1:", array1);
console.log("Array2:", array2);
console.log("Combined:", combined);

// TODO: Using spread operator (modern way)
const combined2 = [...array1, ...array2];
console.log("Combined with spread:", combined2);

// Add items in between
const combined3 = [...array1, "middle", ...array2];
console.log("With middle item:", combined3);

// Task 11: Converting Arrays
console.log("\n=== Task 11: Converting Arrays ===");

// TODO: Array to string with join()
const words = ["Hello", "World", "from", "JavaScript"];
const sentence = words.join(" ");
console.log("Array:", words);
console.log("Joined:", sentence);

const csv = words.join(",");
console.log("CSV format:", csv);

// TODO: String to array with split()
const text = "apple,banana,orange";
const fruitsArray = text.split(",");
console.log("String:", text);
console.log("Split array:", fruitsArray);

// Task 12: Copying Arrays
console.log("\n=== Task 12: Copying Arrays ===");

const original = [1, 2, 3];

// WRONG way (this is a reference, not a copy!)
const notACopy = original;
notACopy.push(4);
console.log("Original:", original); // Also changed!

// RIGHT ways to copy
const copy1 = [...original];
const copy2 = original.slice();
const copy3 = Array.from(original);

copy1.push(5);
console.log("Original:", original);
console.log("Copy1:", copy1);

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Create a shopping cart array and add/remove items
function createShoppingCart() {
  const cart = [];

  // Add items
  cart.push("Milk", "Bread", "Eggs");
  console.log("Cart:", cart);

  // Remove last item
  cart.pop();
  console.log("After removing:", cart);

  // Add more items
  cart.push("Cheese", "Butter");
  console.log("Final cart:", cart);

  return cart;
}

createShoppingCart();

// TODO: Write a function to get first N items from array
function getFirstN(array, n) {
  // Your code here
  return array.slice(0, n);
}

console.log(
  "\nFirst 3 numbers:",
  getFirstN([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 3)
);

// TODO: Write a function to remove item by value
function removeItem(array, item) {
  // Your code here
  const index = array.indexOf(item);
  if (index !== -1) {
    array.splice(index, 1);
  }
  return array;
}

const testArray = ["a", "b", "c", "d"];
console.log("\nRemove 'c':", removeItem([...testArray], "c"));

// TODO: Write a function to insert item at specific position
function insertAt(array, index, item) {
  // Your code here
  array.splice(index, 0, item);
  return array;
}

console.log("\nInsert 'X' at index 2:", insertAt([1, 2, 3, 4], 2, "X"));

// TODO: Write a function to reverse an array without using reverse()
function reverseArray(array) {
  // Your code here
  const result = [];
  for (let i = array.length - 1; i >= 0; i--) {
    result.push(array[i]);
  }
  return result;
}

console.log("\nReversed:", reverseArray([1, 2, 3, 4, 5]));

console.log("\n✅ Awesome! You've mastered array fundamentals!");
console.log(
  "💡 Arrays are one of the most used data structures in JavaScript!"
);
console.log(
  "🚀 Next: Learn powerful array methods that make your life easier!"
);

// Run with: node day1-arrays.js
