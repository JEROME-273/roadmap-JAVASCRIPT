// Week 2, Day 1: Function Practice
// Building more complex functions!

console.log("=== Week 2, Day 1: Advanced Functions ===\n");

// Task 1: Functions with Multiple Parameters
console.log("=== Task 1: Multiple Parameters ===");

// TODO: Function to calculate rectangle area
function calculateRectangleArea(length, width) {
  return length * width;
}

console.log("Rectangle 5x3:", calculateRectangleArea(5, 3));
console.log("Rectangle 10x7:", calculateRectangleArea(10, 7));

// TODO: Function with 3 parameters
function calculateTriangleArea(base, height) {
  return (base * height) / 2;
}

console.log("Triangle (base:6, height:4):", calculateTriangleArea(6, 4));

// TODO: Function to create a full name
function createFullName(firstName, middleName, lastName) {
  return `${firstName} ${middleName} ${lastName}`;
}

console.log("Full name:", createFullName("Juan", "Santos", "dela Cruz"));

// Task 2: Default Parameters
console.log("\n=== Task 2: Default Parameters ===");

// TODO: Function with default values
function greet(name = "Guest", greeting = "Hello") {
  return `${greeting}, ${name}!`;
}

console.log(greet("Juan", "Good morning"));
console.log(greet("Maria"));
console.log(greet());

// TODO: Calculate discount with default rate
function calculateDiscount(price, discountPercent = 10) {
  const discount = price * (discountPercent / 100);
  const finalPrice = price - discount;
  return finalPrice;
}

console.log("₱1000 with 20% discount:", calculateDiscount(1000, 20));
console.log("₱1000 with default discount:", calculateDiscount(1000));

// Task 3: Return Objects from Functions
console.log("\n=== Task 3: Returning Objects ===");

// TODO: Function that returns multiple values as object
function getCircleInfo(radius) {
  const area = Math.PI * radius * radius;
  const circumference = 2 * Math.PI * radius;
  const diameter = radius * 2;

  return {
    radius: radius,
    diameter: diameter,
    area: area.toFixed(2),
    circumference: circumference.toFixed(2),
  };
}

const circle = getCircleInfo(5);
console.log("Circle with radius 5:");
console.log(circle);

// TODO: Student grade info
function calculateGradeInfo(score) {
  let letterGrade;
  let passed;

  if (score >= 90) {
    letterGrade = "A";
    passed = true;
  } else if (score >= 80) {
    letterGrade = "B";
    passed = true;
  } else if (score >= 70) {
    letterGrade = "C";
    passed = true;
  } else if (score >= 60) {
    letterGrade = "D";
    passed = true;
  } else {
    letterGrade = "F";
    passed = false;
  }

  return {
    score: score,
    letterGrade: letterGrade,
    passed: passed,
    message: passed ? "Congratulations!" : "Need to study more",
  };
}

console.log("\nScore 85:", calculateGradeInfo(85));
console.log("Score 55:", calculateGradeInfo(55));

// Task 4: Function Composition
console.log("\n=== Task 4: Using Functions Together ===");

// TODO: Multiple small functions working together
function celsiusToFahrenheit(celsius) {
  return (celsius * 9) / 5 + 32;
}

function fahrenheitToCelsius(fahrenheit) {
  return ((fahrenheit - 32) * 5) / 9;
}

function describeTemperature(celsius) {
  if (celsius < 0) return "Freezing!";
  if (celsius < 15) return "Cold";
  if (celsius < 25) return "Comfortable";
  if (celsius < 35) return "Hot";
  return "Very Hot!";
}

// Use functions together
const tempC = 30;
const tempF = celsiusToFahrenheit(tempC);
const description = describeTemperature(tempC);

console.log(`${tempC}°C = ${tempF.toFixed(1)}°F - ${description}`);

// Task 5: Practical Functions
console.log("\n=== Task 5: Practical Functions ===");

// TODO: Calculate age from birth year
function calculateAge(birthYear) {
  const currentYear = new Date().getFullYear();
  return currentYear - birthYear;
}

console.log("Born in 1995, age:", calculateAge(1995));

// TODO: Check if eligible to vote
function canVote(birthYear) {
  const age = calculateAge(birthYear);
  return age >= 18;
}

console.log("Born in 2010, can vote?", canVote(2010));
console.log("Born in 2000, can vote?", canVote(2000));

// TODO: Calculate BMI
function calculateBMI(weightKg, heightM) {
  const bmi = weightKg / (heightM * heightM);
  let category;

  if (bmi < 18.5) category = "Underweight";
  else if (bmi < 25) category = "Normal";
  else if (bmi < 30) category = "Overweight";
  else category = "Obese";

  return {
    bmi: bmi.toFixed(1),
    category: category,
  };
}

console.log("\nBMI (70kg, 1.75m):", calculateBMI(70, 1.75));

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Create a function that calculates the total price with tax
function calculateTotalPrice(price, taxPercent = 12) {
  // Your code here
}

// TODO: Create a function that checks if a person is a teenager (13-19)
function isTeenager(age) {
  // Your code here
}

// TODO: Create a function that converts hours and minutes to total minutes
function toMinutes(hours, minutes) {
  // Your code here
}

// TODO: Create a function that returns the larger of two numbers
function max(a, b) {
  // Your code here
}

// TODO: Create a function for a simple tip calculator
function calculateTip(billAmount, serviceQuality) {
  // serviceQuality: "poor" (5%), "good" (10%), "excellent" (15%)
  // Return object with: bill, tip, total
  // Your code here
}

// Test your functions
// console.log("Total price:", calculateTotalPrice(1000));
// console.log("Is 15 a teenager?", isTeenager(15));
// console.log("2 hours 30 mins:", toMinutes(2, 30));
// console.log("Max of 5 and 8:", max(5, 8));
// console.log("Tip:", calculateTip(500, "excellent"));

console.log("\n✅ Great practice with functions!");
console.log("💡 Functions are the building blocks of programs!");

// Run with: node day1-function-practice.js
