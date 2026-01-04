// Week 2, Day 4: Working with Numbers
// Math operations and number formatting

console.log("=== Week 2, Day 4: Numbers ===\n");

// Task 1: Basic Math Operations
console.log("=== Task 1: Math Operations ===");

const a = 15;
const b = 4;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);
console.log("Modulo (remainder):", a % b);
console.log("Exponentiation:", a ** 2); // 15 squared

// TODO: Order of operations
console.log("\nOrder of operations:");
console.log("5 + 3 * 2 =", 5 + 3 * 2); // 11 (multiplication first)
console.log("(5 + 3) * 2 =", (5 + 3) * 2); // 16 (parentheses first)

// Task 2: Math Object
console.log("\n=== Task 2: Math Object ===");

// TODO: Rounding numbers
console.log("Math.round(4.7):", Math.round(4.7)); // 5
console.log("Math.round(4.4):", Math.round(4.4)); // 4
console.log("Math.floor(4.9):", Math.floor(4.9)); // 4 (always down)
console.log("Math.ceil(4.1):", Math.ceil(4.1)); // 5 (always up)

// TODO: Min and Max
console.log("\nMin and Max:");
console.log("Math.min(5, 2, 8, 1):", Math.min(5, 2, 8, 1));
console.log("Math.max(5, 2, 8, 1):", Math.max(5, 2, 8, 1));

// TODO: Absolute value
console.log("\nAbsolute value:");
console.log("Math.abs(-5):", Math.abs(-5));
console.log("Math.abs(5):", Math.abs(5));

// TODO: Power and Square Root
console.log("\nPower and Roots:");
console.log("Math.pow(2, 3):", Math.pow(2, 3)); // 2^3 = 8
console.log("Math.sqrt(16):", Math.sqrt(16)); // 4
console.log("Math.sqrt(2):", Math.sqrt(2).toFixed(4));

// TODO: Random numbers
console.log("\nRandom numbers:");
console.log("Random 0-1:", Math.random());
console.log("Random 0-10:", Math.floor(Math.random() * 10));
console.log("Random 1-100:", Math.floor(Math.random() * 100) + 1);

// Task 3: Number Formatting
console.log("\n=== Task 3: Number Formatting ===");

const pi = Math.PI;
console.log("Pi:", pi);
console.log("Pi (2 decimals):", pi.toFixed(2));
console.log("Pi (4 decimals):", pi.toFixed(4));

const price = 1234567.89;
console.log("\nPrice:", price);
console.log("With commas:", price.toLocaleString());
console.log("Currency:", "₱" + price.toLocaleString());

// Task 4: Practical Number Functions
console.log("\n=== Task 4: Practical Functions ===");

// TODO: Generate random number in range
function randomRange(min, max) {
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

console.log("Random 1-6 (dice):", randomRange(1, 6));
console.log("Random 1-100:", randomRange(1, 100));

// TODO: Calculate percentage
function calculatePercentage(value, total) {
  return ((value / total) * 100).toFixed(2) + "%";
}

console.log("30 out of 50:", calculatePercentage(30, 50));

// TODO: Round to decimal places
function roundTo(number, decimals) {
  const multiplier = Math.pow(10, decimals);
  return Math.round(number * multiplier) / multiplier;
}

console.log("3.14159 to 2 decimals:", roundTo(3.14159, 2));

// TODO: Calculate average
function average(...numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

console.log("Average of 5, 10, 15:", average(5, 10, 15));

// TODO: Check if even or odd
function isEven(number) {
  return number % 2 === 0;
}

console.log("Is 8 even?", isEven(8));
console.log("Is 7 even?", isEven(7));

// TODO: Calculate factorial
function factorial(n) {
  if (n <= 1) return 1;
  let result = 1;
  for (let i = 2; i <= n; i++) {
    result *= i;
  }
  return result;
}

console.log("Factorial of 5:", factorial(5)); // 120

// TODO: Convert temperature
function convertTemperature(value, unit) {
  if (unit.toLowerCase() === "c") {
    const fahrenheit = (value * 9) / 5 + 32;
    return {
      celsius: value,
      fahrenheit: roundTo(fahrenheit, 1),
      kelvin: roundTo(value + 273.15, 1),
    };
  } else {
    const celsius = ((value - 32) * 5) / 9;
    return {
      fahrenheit: value,
      celsius: roundTo(celsius, 1),
      kelvin: roundTo(celsius + 273.15, 1),
    };
  }
}

console.log("\n30°C converted:", convertTemperature(30, "C"));

// Task 5: Financial Calculations
console.log("\n=== Task 5: Money Calculations ===");

// TODO: Calculate discount
function calculateDiscount(originalPrice, discountPercent) {
  const discount = originalPrice * (discountPercent / 100);
  const finalPrice = originalPrice - discount;

  return {
    original: originalPrice,
    discount: roundTo(discount, 2),
    final: roundTo(finalPrice, 2),
    saved: roundTo(discount, 2),
  };
}

const sale = calculateDiscount(1000, 25);
console.log("25% off ₱1000:");
console.log(sale);

// TODO: Calculate compound interest
function compoundInterest(principal, rate, years) {
  const amount = principal * Math.pow(1 + rate / 100, years);
  const interest = amount - principal;

  return {
    principal: principal,
    years: years,
    rate: rate + "%",
    totalAmount: roundTo(amount, 2),
    interestEarned: roundTo(interest, 2),
  };
}

console.log("\n₱10000 at 5% for 3 years:");
console.log(compoundInterest(10000, 5, 3));

// TODO: Split bill
function splitBill(totalAmount, numberOfPeople, tipPercent = 0) {
  const tipAmount = totalAmount * (tipPercent / 100);
  const totalWithTip = totalAmount + tipAmount;
  const perPerson = totalWithTip / numberOfPeople;

  return {
    bill: totalAmount,
    tip: roundTo(tipAmount, 2),
    total: roundTo(totalWithTip, 2),
    people: numberOfPeople,
    perPerson: roundTo(perPerson, 2),
  };
}

console.log("\nSplit ₱500 among 4 people with 10% tip:");
console.log(splitBill(500, 4, 10));

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Check if a number is prime
function isPrime(number) {
  // Your code here
}

// TODO: Calculate distance between two points
function distance(x1, y1, x2, y2) {
  // Use: sqrt((x2-x1)² + (y2-y1)²)
  // Your code here
}

// TODO: Convert minutes to hours and minutes
function minutesToHours(minutes) {
  // Return object with hours and remaining minutes
  // Your code here
}

// TODO: Calculate loan payment
function calculateLoanPayment(principal, annualRate, months) {
  // Monthly payment formula
  // Your code here
}

// TODO: Generate random color (RGB)
function randomColor() {
  // Return object with r, g, b (0-255)
  // Your code here
}

// Test your functions
// console.log("Is 17 prime?", isPrime(17));
// console.log("Distance (0,0) to (3,4):", distance(0, 0, 3, 4));
// console.log("125 minutes:", minutesToHours(125));
// console.log("Random color:", randomColor());

console.log("\n✅ Perfect! You can work with numbers!");
console.log("💡 Math is essential for calculations in programming!");

// Run with: node day4-numbers.js
