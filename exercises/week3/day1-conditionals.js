// Week 3, Day 1: Conditionals - Making Decisions in Code
// Conditionals let your program make choices based on conditions

// console.log("=== Week 3: Control Flow Begins! ===\n");

// // Task 1: Simple If Statements
// console.log("=== Task 1: Simple If Statements ===");

// // TODO: Create a variable for temperature
// const temperature = 25;

// // TODO: Write an if statement that prints "It's warm!" if temp > 20
// if (temperature > 20) {
//   console.log("It's warm!");
// }

// // TODO: Try changing the temperature and see what happens
// const coldTemp = 10;
// if (coldTemp > 20) {
//   console.log("This won't print because 10 is not > 20");
// }

// // Task 2: If/Else Statements
// console.log("\n=== Task 2: If/Else Statements ===");

// // TODO: Create a variable for your age
// const age = 18;

// // TODO: Write if/else to check if you can vote (age >= 18)
// if (age >= 18) {
//   console.log("You can vote!");
// } else {
//   console.log("You cannot vote yet.");
// }

// // TODO: Create a function that checks if a number is positive
// function checkIfPositive(number) {
//   if (number > 0) {
//     return "Positive";
//   } else {
//     return "Not positive";
//   }
// }

// console.log("checkIfPositive(5):", checkIfPositive(5));
// console.log("checkIfPositive(-3):", checkIfPositive(-3));

// // Task 3: Else If Chains
// console.log("\n=== Task 3: Else If Chains ===");

// // TODO: Create a function that grades a score
// function getGrade(score) {
//   if (score >= 90) {
//     return "A - Excellent!";
//   } else if (score >= 80) {
//     return "B - Good!";
//   } else if (score >= 70) {
//     return "C - Average";
//   } else if (score >= 60) {
//     return "D - Needs Improvement";
//   } else {
//     return "F - Failed";
//   }
// }

// // TODO: Test your function with different scores
// console.log("Score 95:", getGrade(95));
// console.log("Score 82:", getGrade(82));
// console.log("Score 55:", getGrade(55));

// // Task 4: Nested Conditionals
// console.log("\n=== Task 4: Nested Conditionals ===");

// // TODO: Function to check if someone can drive
// function canDrive(age, hasLicense) {
//   if (age >= 18) {
//     if (hasLicense) {
//       return "You can drive!";
//     } else {
//       return "You need a license first.";
//     }
//   } else {
//     return "You're too young to drive.";
//   }
// }

// console.log("Age 20, has license:", canDrive(20, true));
// console.log("Age 20, no license:", canDrive(20, false));
// console.log("Age 16, has license:", canDrive(16, true));

// // PRACTICE EXERCISES
// console.log("\n=== Practice Exercises ===");

// // TODO: Write a function that checks if a number is even or odd
// function isEvenOrOdd(number) {
//   // Your code here
//   // Hint: Use the modulo operator (%)
//   if (number % 2 === 0) {
//     return "Even";
//   } else {
//     return "Odd";
//   }
// }

// console.log("isEvenOrOdd(4):", isEvenOrOdd(4));
// // TODO: Write a function that determines ticket price based on age
// // Children (< 12): $5
// // Adults (12-64): $10
// // Seniors (>= 65): $7
// function getTicketPrice(age) {
//   // Your code here
//   if (age < 12) {
//     return "Children is $5";
//   } else if (age >= 13 && age <= 64) {
//     return "adult is $10";
//   } else {
//     return "senios is $7";
//   }
// }
// console.log("for eman", getTicketPrice(99));
// // TODO: Write a function that checks password strength
// // Weak: length < 6
// // Medium: length 6-10
// // Strong: length > 10
// function checkPasswordStrength(password) {
//   // Your code here
//   // Hint: Use password.length
//   if (password.length < 6) {
//     return "Weak";
//   } else if (password.length <= 10) {
//     return "Medium";
//   } else {
//     return "Strong";
//   }
// }
// console.log(
//   "checkPasswordStrength('mypassword'):",
//   checkPasswordStrength("mypassword")
// );

// // Test your functions
// // console.log("Is 7 even or odd?", isEvenOrOdd(7));
// // console.log("Ticket price for age 10:", getTicketPrice(10));
// // console.log("Password 'abc' strength:", checkPasswordStrength("abc"));

// console.log("\n✅ Great job! You've mastered conditionals!");
// console.log(
//   "💡 Remember: If statements let your code make intelligent decisions!"
// );

// // Run with: node day1-conditionals.js

// function checkNumberType(num) {
//   if (num === 0) {
//     return "zero";
//   } else if (num > 0) {
//     return "positive";
//   } else {
//     return "negative";
//   }
// }

// console.log("checkNumberType(0):", checkNumberType(0));

function login(username, password) {
  if (username === "admin") {
    if (password === "1234") {
      return "Login successful";
    } else {
      return "Incorrect password";
    }
  } else {
    return "Incorrect username";
  }
}
console.log(login("admins", "1234"));

function withdraw(balance, amount) {
  if (balance >= amount) {
    return "withdrawal successful";
  } else {
    return "insufficient balance";
  }
}

console.log(withdraw(550, 250));

function checkdaytype(day) {
  if (day === "monday" || day === "friday") {
    return "weekday";
  } else if (day === "saturday" || day === "sunday") {
    return "weekend";
  } else {
    return "invalid day";
  }
}

console.log(checkdaytype("saturday"));

function validatePassword(password) {
  if (password.length === 0) {
    return "no password entered";
  } else if (password.length < 6) {
    return "weak";
  } else if (password.length <= 10) {
    return "medium";
  } else {
    return "strong";
  }
}

console.log(validatePassword("1234567"));
