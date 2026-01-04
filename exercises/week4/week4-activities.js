// ===================================
// WEEK 4 ACTIVITIES: Arrays & Objects
// ===================================
// Instructions: Solve each activity. Hints are provided in Tagalog!

// ===================================
// ACTIVITY 1: Sum of Array
// ===================================
// Create a function that finds the sum of all numbers in an array
// Hint: Gamitin ang `for` loop o `.reduce()` method.

function sumArray(numbers) {
  // Your code here
}

// Test your function:
// console.log("Sum of [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));
// console.log("Sum of [10,20,30]:", sumArray([10, 20, 30]));
// console.log("Sum of []:", sumArray([]));

// ===================================
// ACTIVITY 2: Remove Duplicates
// ===================================
// Write a function that removes duplicates from an array
// Hint: Gamitin ang `new Set()` o loop na may `.includes()` check.

function removeDuplicates(arr) {
  // Your code here
}

// Test your function:
// console.log("Remove duplicates [1,2,2,3,3,3]:", removeDuplicates([1, 2, 2, 3, 3, 3]));
// console.log("Remove duplicates ['a','b','a','c']:", removeDuplicates(['a', 'b', 'a', 'c']));

// ===================================
// ACTIVITY 3: Find Highest Grade
// ===================================
// Create an array of student objects (name, grade) and find the highest grade
// Hint: Gamitin ang loop para compare grades, o `.sort()` method.

const students = [
  { name: "Juan", grade: 85 },
  { name: "Maria", grade: 92 },
  { name: "Pedro", grade: 78 },
  { name: "Ana", grade: 95 },
  { name: "Jose", grade: 88 },
];

function findTopStudent(studentArray) {
  // Your code here
  // Return the student object with the highest grade
}

// Test your function:
// console.log("Top student:", findTopStudent(students));

// ===================================
// ACTIVITY 4: Filter Products by Price
// ===================================
// Write a function that filters products by price (below a certain amount)
// Hint: Gamitin ang `.filter()` method o loop with if statement.

const products = [
  { name: "Phone", price: 15000 },
  { name: "Laptop", price: 45000 },
  { name: "Headphones", price: 2500 },
  { name: "Mouse", price: 800 },
  { name: "Keyboard", price: 1500 },
];

function filterByPrice(productArray, maxPrice) {
  // Your code here
  // Return products that cost less than maxPrice
}

// Test your function:
// console.log("Products under 5000:", filterByPrice(products, 5000));
// console.log("Products under 20000:", filterByPrice(products, 20000));

// ===================================
// ACTIVITY 5: Simple Todo List
// ===================================
// Create a simple todo list (add, remove, display todos)
// Hint: Gumawa ng array at gamitin ang `.push()`, `.splice()`, at loop para display.

const todos = [];

function addTodo(task) {
  // Your code here - add task to todos array
}

function removeTodo(index) {
  // Your code here - remove task at index from todos array
}

function displayTodos() {
  // Your code here - display all todos with numbers
}

// Test your functions:
// addTodo("Learn JavaScript");
// addTodo("Practice coding");
// addTodo("Build a project");
// displayTodos();
// removeTodo(1);
// console.log("After removing index 1:");
// displayTodos();

// ===================================
// ACTIVITY 6: Merge and Sort Arrays
// ===================================
// Write a function that merges two arrays and sorts them
// Hint: Gamitin ang `[...arr1, ...arr2]` para merge, tapos `.sort()`.

function mergeAndSort(arr1, arr2) {
  // Your code here
}

// Test your function:
// console.log("Merge [3,1,4] and [2,5,0]:", mergeAndSort([3, 1, 4], [2, 5, 0]));
// console.log("Merge ['c','a'] and ['b','d']:", mergeAndSort(['c', 'a'], ['b', 'd']));

// ===================================
// Run with: node week4-activities.js
// ===================================
console.log("Week 4 Activities - Complete the functions above!");
console.log("Uncomment the test cases to check your answers.");
