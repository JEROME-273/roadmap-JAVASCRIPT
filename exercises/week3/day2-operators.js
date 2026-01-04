// Week 3, Day 2: Comparison & Logical Operators
// Learn to combine conditions and make complex decisions

console.log("=== Week 3, Day 2: Operators ===\n");

// Task 1: Comparison Operators
console.log("=== Task 1: Comparison Operators ===");

const num1 = 10;
const num2 = 20;
const num3 = 10;

// TODO: Greater than and less than
console.log("10 > 20:", num1 > num2); // false
console.log("10 < 20:", num1 < num2); // true
console.log("20 >= 10:", num2 >= num1); // true
console.log("10 <= 10:", num1 <= num3); // true

// TODO: Equality operators
console.log("\nEquality:");
console.log("10 === 10:", num1 === num3); // true (strict equality)
console.log("10 === '10':", num1 === "10"); // false (different types)
console.log("10 == '10':", num1 == "10"); // true (loose equality)
console.log("10 !== 20:", num1 !== num2); // true (not equal)

// PRO TIP: Always use === and !== instead of == and !=
console.log("\n💡 Always use === (strict equality) in JavaScript!");

// Task 2: Logical Operators
console.log("\n=== Task 2: Logical Operators ===");

const age = 25;
const hasLicense = true;
const hasInsurance = false;

// TODO: AND operator (&&) - both conditions must be true
console.log("Can drive? (age >= 18 AND hasLicense):");
console.log(age >= 18 && hasLicense); // true

console.log("Can rent car? (age >= 21 AND hasLicense AND hasInsurance):");
console.log(age >= 21 && hasLicense && hasInsurance); // false

// TODO: OR operator (||) - at least one condition must be true
const isWeekend = false;
const isHoliday = true;

console.log("\nCan sleep in? (isWeekend OR isHoliday):");
console.log(isWeekend || isHoliday); // true

// TODO: NOT operator (!) - reverses the boolean
console.log("\nNOT operator:");
console.log("hasInsurance:", hasInsurance); // false
console.log("!hasInsurance:", !hasInsurance); // true
console.log("!hasLicense:", !hasLicense); // false

// Task 3: Combining Operators
console.log("\n=== Task 3: Combining Operators ===");

// TODO: Function to check if someone can vote and is eligible for senior discount
function checkVoterStatus(age) {
  const canVote = age >= 18;
  const isSenior = age >= 65;

  if (canVote && !isSenior) {
    return "Regular voter";
  } else if (canVote && isSenior) {
    return "Senior voter";
  } else {
    return "Cannot vote yet";
  }
}

console.log("Age 25:", checkVoterStatus(25));
console.log("Age 70:", checkVoterStatus(70));
console.log("Age 16:", checkVoterStatus(16));

// Task 4: Complex Conditions
console.log("\n=== Task 4: Complex Conditions ===");

// TODO: Function to check if a store is open
function isStoreOpen(hour, day) {
  const isWeekday = day >= 1 && day <= 5;
  const isWeekend = day === 0 || day === 6;

  if (isWeekday && hour >= 9 && hour < 18) {
    return "Store is OPEN (Weekday hours)";
  } else if (isWeekend && hour >= 10 && hour < 16) {
    return "Store is OPEN (Weekend hours)";
  } else {
    return "Store is CLOSED";
  }
}

// Days: 0=Sunday, 1=Monday, ..., 6=Saturday
console.log("Monday 10AM:", isStoreOpen(10, 1));
console.log("Saturday 11AM:", isStoreOpen(11, 6));
console.log("Sunday 8AM:", isStoreOpen(8, 0));

// Task 5: Truthy and Falsy Values
console.log("\n=== Task 5: Truthy and Falsy Values ===");

// Falsy values: false, 0, "", null, undefined, NaN
// Everything else is truthy!

function checkValue(value) {
  if (value) {
    console.log(`"${value}" is TRUTHY`);
  } else {
    console.log(`"${value}" is FALSY`);
  }
}

checkValue(true); // truthy
checkValue(false); // falsy
checkValue(1); // truthy
checkValue(0); // falsy
checkValue("hello"); // truthy
checkValue(""); // falsy
checkValue(null); // falsy
checkValue(undefined); // falsy

// Task 6: Ternary Operator (bonus!)
console.log("\n=== Task 6: Ternary Operator ===");

// Shorthand for simple if/else
const temperature = 30;
const weather = temperature > 25 ? "Hot" : "Cool";
console.log("Weather:", weather);

// TODO: Function using ternary
function getDiscount(age) {
  return age >= 60 ? "20% senior discount" : "No discount";
}

console.log("Age 70:", getDiscount(70));
console.log("Age 30:", getDiscount(30));

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Write a function to check if a number is in range
function isInRange(num, min, max) {
  // Check if num is between min and max (inclusive)
  // Your code here
}

// TODO: Write a function to validate password
function isValidPassword(password) {
  // Password must be:
  // - At least 8 characters long
  // - Contains at least one number
  // Your code here (you can use password.length and check for numbers)
}

// TODO: Write a function to check discount eligibility
function getTicketDiscount(age, isStudent, isMilitary) {
  // Discounts:
  // - Under 12 or over 65: 50% off
  // - Student OR military: 25% off
  // - Otherwise: no discount
  // Your code here
}

// TODO: Write a function to check if a year is a leap year
function isLeapYear(year) {
  // Leap year rules:
  // - Divisible by 4
  // - If divisible by 100, must also be divisible by 400
  // Your code here
}

// Test your functions
// console.log("15 in range 10-20?", isInRange(15, 10, 20));
// console.log("Is 'pass123' valid?", isValidPassword("pass123"));
// console.log("Discount for age 10:", getTicketDiscount(10, false, false));
// console.log("Is 2024 a leap year?", isLeapYear(2024));

console.log("\n✅ Great work with operators!");
console.log("💡 Combining conditions lets you write powerful logic!");
console.log("🚀 Now you can make complex decisions in your code!");

// Run with: node day2-operators.js
