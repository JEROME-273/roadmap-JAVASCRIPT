// Week 2, Day 5: Mini Calculator Project
// Putting everything together!

console.log("🧮 Simple Calculator 🧮\n");
console.log("=".repeat(50) + "\n");

// Project: Build a calculator with multiple functions
// This combines: functions, conditionals, numbers, and strings

// Basic Operations
function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Error: Cannot divide by zero";
  }
  return a / b;
}

function modulo(a, b) {
  return a % b;
}

function power(base, exponent) {
  return Math.pow(base, exponent);
}

// Advanced Operations
function squareRoot(num) {
  if (num < 0) {
    return "Error: Cannot calculate square root of negative number";
  }
  return Math.sqrt(num);
}

function percentage(value, percent) {
  return (value * percent) / 100;
}

function average(...numbers) {
  const sum = numbers.reduce((total, num) => total + num, 0);
  return sum / numbers.length;
}

// Main Calculator Function
function calculate(operation, ...numbers) {
  switch (operation.toLowerCase()) {
    case "add":
    case "+":
      return add(numbers[0], numbers[1]);

    case "subtract":
    case "-":
      return subtract(numbers[0], numbers[1]);

    case "multiply":
    case "*":
      return multiply(numbers[0], numbers[1]);

    case "divide":
    case "/":
      return divide(numbers[0], numbers[1]);

    case "modulo":
    case "%":
      return modulo(numbers[0], numbers[1]);

    case "power":
    case "^":
      return power(numbers[0], numbers[1]);

    case "sqrt":
      return squareRoot(numbers[0]);

    case "percent":
      return percentage(numbers[0], numbers[1]);

    case "average":
    case "avg":
      return average(...numbers);

    default:
      return "Error: Unknown operation";
  }
}

// Display Function
function displayCalculation(operation, numbers, result) {
  const numStr = numbers.join(", ");
  console.log(`${operation.toUpperCase()}(${numStr}) = ${result}`);
}

// Run Calculations
console.log("📊 Basic Operations\n");

let result = calculate("add", 10, 5);
displayCalculation("Add", [10, 5], result);

result = calculate("subtract", 20, 8);
displayCalculation("Subtract", [20, 8], result);

result = calculate("multiply", 6, 7);
displayCalculation("Multiply", [6, 7], result);

result = calculate("divide", 50, 5);
displayCalculation("Divide", [50, 5], result);

console.log("\n📊 Advanced Operations\n");

result = calculate("power", 2, 8);
displayCalculation("Power", [2, 8], result);

result = calculate("sqrt", 144);
displayCalculation("Square Root", [144], result);

result = calculate("percent", 200, 15);
displayCalculation("Percentage", [200, 15], result);

result = calculate("average", 5, 10, 15, 20);
displayCalculation("Average", [5, 10, 15, 20], result);

// Scientific Calculator Features
console.log("\n🔬 Scientific Features\n");

const scientificCalculator = {
  pi: Math.PI,
  e: Math.E,

  sin(angle) {
    return Math.sin((angle * Math.PI) / 180); // Convert to radians
  },

  cos(angle) {
    return Math.cos((angle * Math.PI) / 180);
  },

  tan(angle) {
    return Math.tan((angle * Math.PI) / 180);
  },

  log(num) {
    return Math.log10(num);
  },

  ln(num) {
    return Math.log(num);
  },

  absolute(num) {
    return Math.abs(num);
  },

  round(num, decimals = 0) {
    const multiplier = Math.pow(10, decimals);
    return Math.round(num * multiplier) / multiplier;
  },
};

console.log("PI:", scientificCalculator.pi);
console.log("e:", scientificCalculator.e);
console.log(
  "sin(30°):",
  scientificCalculator.round(scientificCalculator.sin(30), 4)
);
console.log(
  "cos(60°):",
  scientificCalculator.round(scientificCalculator.cos(60), 4)
);
console.log("log(100):", scientificCalculator.log(100));

// Financial Calculator
console.log("\n💰 Financial Calculator\n");

const financialCalculator = {
  // Simple Interest: I = P × r × t
  simpleInterest(principal, rate, time) {
    return principal * (rate / 100) * time;
  },

  // Compound Interest: A = P(1 + r/n)^(nt)
  compoundInterest(principal, rate, years, compoundsPerYear = 1) {
    const r = rate / 100;
    const amount =
      principal * Math.pow(1 + r / compoundsPerYear, compoundsPerYear * years);
    return amount - principal;
  },

  // Monthly loan payment
  loanPayment(principal, annualRate, months) {
    const monthlyRate = annualRate / 100 / 12;
    const payment =
      (principal * (monthlyRate * Math.pow(1 + monthlyRate, months))) /
      (Math.pow(1 + monthlyRate, months) - 1);
    return payment;
  },

  // Discount calculator
  discount(price, discountPercent) {
    const discountAmount = price * (discountPercent / 100);
    return {
      original: price,
      discount: discountAmount,
      final: price - discountAmount,
      saved: discountPercent + "%",
    };
  },
};

console.log("Simple Interest (₱10000, 5%, 3 years):");
console.log("Interest: ₱" + financialCalculator.simpleInterest(10000, 5, 3));

console.log("\nCompound Interest (₱10000, 5%, 3 years):");
console.log(
  "Interest: ₱" + financialCalculator.compoundInterest(10000, 5, 3).toFixed(2)
);

console.log("\nLoan Payment (₱100000, 10%, 12 months):");
console.log(
  "Monthly: ₱" + financialCalculator.loanPayment(100000, 10, 12).toFixed(2)
);

console.log("\nDiscount (₱5000, 25% off):");
console.log(financialCalculator.discount(5000, 25));

// Unit Converter
console.log("\n📏 Unit Converter\n");

const unitConverter = {
  // Length
  metersToFeet(meters) {
    return meters * 3.28084;
  },

  feetToMeters(feet) {
    return feet / 3.28084;
  },

  // Weight
  kgToPounds(kg) {
    return kg * 2.20462;
  },

  poundsToKg(pounds) {
    return pounds / 2.20462;
  },

  // Temperature (already done in Day 4, but here for completeness)
  celsiusToFahrenheit(c) {
    return (c * 9) / 5 + 32;
  },

  fahrenheitToCelsius(f) {
    return ((f - 32) * 5) / 9;
  },
};

console.log("5 meters =", unitConverter.metersToFeet(5).toFixed(2), "feet");
console.log("70 kg =", unitConverter.kgToPounds(70).toFixed(2), "pounds");
console.log("25°C =", unitConverter.celsiusToFahrenheit(25).toFixed(1), "°F");

// Summary
console.log("\n" + "=".repeat(50));
console.log("\n🎉 Calculator Project Complete! 🎉");
console.log("\n✅ What you built:");
console.log("   - Basic arithmetic calculator");
console.log("   - Scientific calculator");
console.log("   - Financial calculator");
console.log("   - Unit converter");
console.log("\n💡 Skills used:");
console.log("   - Functions and parameters");
console.log("   - Switch statements");
console.log("   - Math operations");
console.log("   - Object methods");
console.log("   - Error handling");
console.log("\n🚀 This is a real, functional program!");
console.log("   You can expand it with more features!");

// Run with: node day5-mini-project.js
