// Week 1, Day 3: Data Types Deep Dive
// Understanding all JavaScript data types in detail

console.log("=== Week 1, Day 3: Data Types ===\n");

// JavaScript has 7 primitive data types + Objects

// 1. STRING - Text data
console.log("=== 1. STRING ===");
const name = "Juan dela Cruz";
const city = "Manila";
const message = `Hello, ${name}!`; // Template literal

console.log("Name:", name);
console.log("Type:", typeof name);
console.log("Length:", name.length);

// 2. NUMBER - Both integers and decimals
console.log("\n=== 2. NUMBER ===");
const age = 25;
const price = 99.99;
const negative = -10;

console.log("Age:", age, "- Type:", typeof age);
console.log("Price:", price, "- Type:", typeof price);
console.log("Negative:", negative, "- Type:", typeof negative);

// Special numeric values
console.log("Infinity:", Infinity);
console.log("Not a Number:", NaN);

// 3. BOOLEAN - True or False
console.log("\n=== 3. BOOLEAN ===");
const isStudent = true;
const hasLicense = false;

console.log("Is student:", isStudent, "- Type:", typeof isStudent);
console.log("Has license:", hasLicense, "- Type:", typeof hasLicense);

// 4. UNDEFINED - Variable declared but not assigned
console.log("\n=== 4. UNDEFINED ===");
let notYetAssigned;
console.log("Value:", notYetAssigned);
console.log("Type:", typeof notYetAssigned);

// 5. NULL - Intentionally empty
console.log("\n=== 5. NULL ===");
const emptyValue = null;
console.log("Value:", emptyValue);
console.log("Type:", typeof emptyValue); // Shows "object" (JavaScript quirk!)

// 6. SYMBOL - Unique identifier (advanced)
console.log("\n=== 6. SYMBOL ===");
const sym1 = Symbol("id");
const sym2 = Symbol("id");
console.log("Symbols are unique:", sym1 === sym2); // false

// 7. BIGINT - Very large integers
console.log("\n=== 7. BIGINT ===");
const bigNumber = 1234567890123456789012345678901234567890n;
console.log("Big number:", bigNumber);
console.log("Type:", typeof bigNumber);

// OBJECTS - Complex data type
console.log("\n=== OBJECTS ===");
const person = {
  name: "Maria",
  age: 30,
  city: "Cebu",
};
console.log("Person:", person);
console.log("Type:", typeof person);

const numbers = [1, 2, 3, 4, 5];
console.log("Array:", numbers);
console.log("Type:", typeof numbers); // Arrays are objects!

// TYPE CHECKING
console.log("\n=== Type Checking ===");

function checkType(value) {
  console.log(`Value: ${value}, Type: ${typeof value}`);
}

checkType("hello");
checkType(42);
checkType(true);
checkType(undefined);
checkType(null);
checkType([1, 2, 3]);
checkType({ name: "Juan" });

// TYPE CONVERSION
console.log("\n=== Type Conversion ===");

// String to Number
const strNum = "123";
console.log("String '123':", strNum, typeof strNum);
const converted = Number(strNum);
console.log("Converted:", converted, typeof converted);

// Number to String
const num = 456;
const strFromNum = String(num);
console.log("Number to string:", strFromNum, typeof strFromNum);

// Boolean conversion
console.log("\nBoolean conversions:");
console.log("Boolean(1):", Boolean(1)); // true
console.log("Boolean(0):", Boolean(0)); // false
console.log("Boolean('hi'):", Boolean("hi")); // true
console.log("Boolean(''):", Boolean("")); // false

// TRUTHY and FALSY values
console.log("\n=== Truthy and Falsy ===");

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy!

function isTruthy(value) {
  if (value) {
    console.log(`${value} is truthy`);
  } else {
    console.log(`${value} is falsy`);
  }
}

isTruthy(true);
isTruthy(false);
isTruthy(1);
isTruthy(0);
isTruthy("hello");
isTruthy("");
isTruthy(null);
isTruthy(undefined);

// PRACTICE EXERCISES
console.log("\n=== Practice ===");

// TODO: Create variables of each type
const myString = "Your text here";
const myNumber = 42;
const myBoolean = true;
let myUndefined;
const myNull = null;
const myObject = { key: "value" };
const myArray = [1, 2, 3];

// TODO: Function to check if value is a number
function isNumber(value) {
  return typeof value === "number" && !isNaN(value);
}

console.log("Is 42 a number?", isNumber(42));
console.log("Is '42' a number?", isNumber("42"));
console.log("Is NaN a number?", isNumber(NaN));

// TODO: Function to safely convert to number
function toNumber(value) {
  const num = Number(value);
  return isNaN(num) ? 0 : num;
}

console.log("Convert '123':", toNumber("123"));
console.log("Convert 'abc':", toNumber("abc"));

console.log("\n✅ You understand JavaScript data types!");
console.log("💡 Knowing data types helps prevent bugs!");

// Run with: node day3-data-types.js
