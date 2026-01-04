// Week 3, Day 5: Switch Statements
// A cleaner way to handle multiple conditions

console.log("=== Week 3, Day 5: Switch Statements ===\n");

// Task 1: Basic Switch Statement
console.log("=== Task 1: Basic Switch ===");

const day = 3;

switch (day) {
  case 1:
    console.log("Monday");
    break;
  case 2:
    console.log("Tuesday");
    break;
  case 3:
    console.log("Wednesday");
    break;
  case 4:
    console.log("Thursday");
    break;
  case 5:
    console.log("Friday");
    break;
  case 6:
    console.log("Saturday");
    break;
  case 7:
    console.log("Sunday");
    break;
  default:
    console.log("Invalid day");
}

// Task 2: Switch vs If/Else
console.log("\n=== Task 2: Switch vs If/Else ===");

// This is messy with if/else:
function getGradeMessageIfElse(grade) {
  if (grade === "A") {
    return "Excellent!";
  } else if (grade === "B") {
    return "Good job!";
  } else if (grade === "C") {
    return "Average";
  } else if (grade === "D") {
    return "Needs improvement";
  } else if (grade === "F") {
    return "Failed";
  } else {
    return "Invalid grade";
  }
}

// Much cleaner with switch:
function getGradeMessageSwitch(grade) {
  switch (grade) {
    case "A":
      return "Excellent!";
    case "B":
      return "Good job!";
    case "C":
      return "Average";
    case "D":
      return "Needs improvement";
    case "F":
      return "Failed";
    default:
      return "Invalid grade";
  }
}

console.log("Grade A:", getGradeMessageSwitch("A"));
console.log("Grade C:", getGradeMessageSwitch("C"));
console.log("Grade X:", getGradeMessageSwitch("X"));

// Task 3: Multiple Cases for Same Action
console.log("\n=== Task 3: Grouping Cases ===");

// TODO: Check if a day is a weekday or weekend
function getDayType(day) {
  switch (day) {
    case 1:
    case 2:
    case 3:
    case 4:
    case 5:
      return "Weekday - Time to work! 💼";
    case 6:
    case 7:
      return "Weekend - Time to relax! 🎉";
    default:
      return "Invalid day number";
  }
}

console.log("Day 3:", getDayType(3));
console.log("Day 6:", getDayType(6));

// TODO: Season based on month
function getSeason(month) {
  switch (month) {
    case 12:
    case 1:
    case 2:
      return "Winter ❄️";
    case 3:
    case 4:
    case 5:
      return "Spring 🌸";
    case 6:
    case 7:
    case 8:
      return "Summer ☀️";
    case 9:
    case 10:
    case 11:
      return "Fall 🍂";
    default:
      return "Invalid month";
  }
}

console.log("Month 7:", getSeason(7));
console.log("Month 12:", getSeason(12));

// Task 4: Fall-through Behavior
console.log("\n=== Task 4: Fall-through (No Break) ===");

// Without break, cases fall through!
function demonstrateFallThrough(value) {
  let result = "Started with " + value + " → ";

  switch (value) {
    case 1:
      result += "Hit case 1 → ";
    case 2:
      result += "Hit case 2 → ";
    case 3:
      result += "Hit case 3";
      break;
    default:
      result += "Hit default";
  }

  return result;
}

console.log(demonstrateFallThrough(1)); // Falls through all cases
console.log(demonstrateFallThrough(2)); // Falls through to case 3
console.log(demonstrateFallThrough(3)); // Only case 3

// Task 5: Switch with Strings
console.log("\n=== Task 5: Switch with Strings ===");

// TODO: Command processor
function processCommand(command) {
  switch (command.toLowerCase()) {
    case "start":
      return "🚀 Starting the application...";
    case "stop":
      return "🛑 Stopping the application...";
    case "restart":
      return "🔄 Restarting the application...";
    case "status":
      return "✅ Application is running";
    case "help":
      return "Available commands: start, stop, restart, status, help";
    default:
      return "❌ Unknown command. Type 'help' for available commands.";
  }
}

console.log(processCommand("start"));
console.log(processCommand("STATUS"));
console.log(processCommand("hello"));

// Task 6: Calculator with Switch
console.log("\n=== Task 6: Calculator ===");

function calculate(num1, operator, num2) {
  switch (operator) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      return num2 !== 0 ? num1 / num2 : "Error: Division by zero";
    case "%":
      return num1 % num2;
    case "**":
      return Math.pow(num1, num2);
    default:
      return "Error: Unknown operator";
  }
}

console.log("10 + 5 =", calculate(10, "+", 5));
console.log("10 * 5 =", calculate(10, "*", 5));
console.log("10 / 2 =", calculate(10, "/", 2));
console.log("2 ** 3 =", calculate(2, "**", 3));

// Task 7: Traffic Light Controller
console.log("\n=== Task 7: Traffic Light ===");

function getTrafficAction(color) {
  switch (color.toLowerCase()) {
    case "red":
      return {
        action: "STOP",
        duration: "Wait for green",
        icon: "🔴",
      };
    case "yellow":
      return {
        action: "SLOW DOWN",
        duration: "Prepare to stop",
        icon: "🟡",
      };
    case "green":
      return {
        action: "GO",
        duration: "Proceed with caution",
        icon: "🟢",
      };
    default:
      return {
        action: "UNKNOWN",
        duration: "Check the signal",
        icon: "❓",
      };
  }
}

const redLight = getTrafficAction("red");
console.log(`${redLight.icon} ${redLight.action} - ${redLight.duration}`);

const greenLight = getTrafficAction("green");
console.log(`${greenLight.icon} ${greenLight.action} - ${greenLight.duration}`);

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Write a function that converts number to month name
function getMonthName(monthNumber) {
  // Use switch to return month name (1 = January, etc.)
  // Your code here
}

// TODO: Write a function for a vending machine
function vendingMachine(code) {
  // A1 = Chips ($1.50)
  // A2 = Candy ($1.00)
  // B1 = Soda ($2.00)
  // B2 = Water ($1.50)
  // Return object with item and price
  // Your code here
}

// TODO: Write a function for movie rating advice
function getMovieRating(rating) {
  // G = "Suitable for all ages"
  // PG = "Parental guidance suggested"
  // PG-13 = "Parents strongly cautioned"
  // R = "Restricted - under 17 requires parent"
  // NC-17 = "Adults only"
  // Your code here
}

// TODO: Write a function for size conversion
function getSizeInWords(size) {
  // XS, S, M, L, XL, XXL
  // Return full description
  // Your code here
}

// Test your functions
// console.log("Month 3:", getMonthName(3));
// console.log("Vending A1:", vendingMachine("A1"));
// console.log("Rating PG-13:", getMovieRating("PG-13"));
// console.log("Size L:", getSizeInWords("L"));

console.log("\n✅ Perfect! You've completed Week 3!");
console.log("\n💡 Key Points:");
console.log("   - Use SWITCH for multiple specific values");
console.log("   - Use IF/ELSE for ranges or complex conditions");
console.log("   - Don't forget the BREAK statement!");
console.log("   - Use DEFAULT for unexpected cases");
console.log("\n🎉 Week 3 Complete! Ready for Week 4!");
console.log("📦 Next up: Arrays & Objects - Managing complex data!");

// Run with: node day5-switch.js
