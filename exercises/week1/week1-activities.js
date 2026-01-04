// ===================================
// WEEK 1 ACTIVITIES: Variables, Functions, Data Types
// ===================================
// Instructions: Solve each activity. Hints are provided in Tagalog!

// ===================================
// ACTIVITY 1: Celsius to Fahrenheit Converter
// ===================================
// Create a function that converts Celsius to Fahrenheit
// Hint: Formula: (celsius * 9/5) + 32. Gamitin ang `return` para ibalik ang result.

function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

// Test your function:
console.log("25°C =", celsiusToFahrenheit(25), "°F");
console.log("0°C =", celsiusToFahrenheit(0), "°F");
console.log("100°C =", celsiusToFahrenheit(100), "°F");

// ===================================
// ACTIVITY 2: Age in Seconds Calculator
// ===================================
// Write a function that calculates your age in seconds
// Hint: Multiply: age × 365 × 24 × 60 × 60. Gamitin ang `*` operator.

function ageInSeconds(age) {
  return age * 365 * 24 * 60 * 60;
}

// Test your function:
console.log("Age 20 in seconds:", ageInSeconds(20));
console.log("Age 25 in seconds:", ageInSeconds(25));

// ===================================
// ACTIVITY 3: Product Total Cost
// ===================================
// Create variables for a product (name, price, quantity) and calculate total cost
// Hint: Gumawa ng 3 variables, tapos `price * quantity` para sa total.

// Your code here:
// const productName = ???
// const productPrice = ???
// const productQuantity = ???
const productName = "Acer";
const productPrice = 42;
const productQuantity = 4;

function calcuTotalCost(price, quantity) {
  return price * quantity;
}

const totalcost = calcuTotalCost(productPrice, productQuantity);

console.log(totalcost);

// Test your function:
// console.log("Product:", productName);
// console.log("Total cost:", calculateTotalCost(productPrice, productQuantity));

// ===================================
// ACTIVITY 4: Full Name Generator
// ===================================
// Write a function that takes first name and last name, returns full name
// Hint: Gamitin ang `+` para pagdugtungin ang strings, o template literal `${first} ${last}`.

function getFullName(firstName, lastName) {
  return firstName + lastName;
}

console.log(getFullName("Jerome", " Martinez"));

// Test your function:
// console.log("Full name:", getFullName("Juan", "Dela Cruz"));
// console.log("Full name:", getFullName("Maria", "Santos"));

// ===================================
// ACTIVITY 5: Empty String Checker
// ===================================
// Create a function that checks if a string is empty or not
// Hint: Gamitin ang `string.length === 0` o `string === ""`.

function isEmptyString(str) {
  // Your code here - return true if empty, false if not
  if (str.length === 0) {
    return true;
  } else {
    return false;
  }
}

// Test your function:
console.log("Is '' empty?", isEmptyString(""));
console.log("Is 'hello' empty?", isEmptyString("hello"));
console.log("Is ' ' empty?", isEmptyString(" "));

// ===================================
// ACTIVITY 6: Data Type Checker
// ===================================
// Write a function that returns the data type of any value
// Hint: Gamitin ang `typeof` keyword.

function getDataType(value) {
  // Your code here
  return typeof value;
}

// Test your function:
console.log("Type of 42:", getDataType(42));
console.log("Type of 'hello':", getDataType("hello"));
console.log("Type of true:", getDataType(true));
console.log("Type of undefined:", getDataType(undefined));
console.log("Type of null:", getDataType(null));
console.log("Type of []:", getDataType([]));

// ===================================
// Run with: node week1-activities.js
// ===================================
console.log("Week 1 Activities - Complete the functions above!");
console.log("Uncomment the test cases to check your answers.");
