// Week 3, Day 4: While Loops & Break/Continue
// Different ways to repeat code and control loop flow

console.log("=== Week 3, Day 4: While Loops ===\n");

// Task 1: Basic While Loop
console.log("=== Task 1: Basic While Loop ===");

// TODO: Count from 1 to 5 with while loop
let count = 1;
while (count <= 5) {
  console.log("Count:", count);
  count++; // Don't forget to increment!
}

// TODO: Countdown with while loop
console.log("\nCountdown:");
let countdown = 5;
while (countdown > 0) {
  console.log(countdown);
  countdown--;
}
console.log("Blast off! 🚀");

// Task 2: While vs For Loop
console.log("\n=== Task 2: When to Use While Loop ===");

// Use WHILE when you don't know how many iterations you need
// Use FOR when you know the exact number of iterations

// Example: Keep rolling dice until you get a 6
function rollUntilSix() {
  let roll = 0;
  let attempts = 0;

  while (roll !== 6) {
    roll = Math.floor(Math.random() * 6) + 1;
    attempts++;
    console.log(`Roll ${attempts}: ${roll}`);
  }

  console.log(`Got a 6 after ${attempts} attempts!`);
}

rollUntilSix();

// Task 3: Do-While Loop
console.log("\n=== Task 3: Do-While Loop ===");

// Do-while always executes at least once!
let number = 10;

console.log("Regular while (won't run):");
while (number < 5) {
  console.log("This won't print");
}

console.log("\nDo-while (runs once):");
do {
  console.log("This will print once, number:", number);
} while (number < 5);

// TODO: Practical example - menu system
function showMenu() {
  let choice = 0;
  let menuShown = 0;

  do {
    menuShown++;
    console.log(`\n--- Menu (shown ${menuShown} time(s)) ---`);
    console.log("1. Start Game");
    console.log("2. Settings");
    console.log("3. Exit");

    // Simulate random choice (in real app, get user input)
    choice = Math.floor(Math.random() * 4);
    console.log(`Selected: ${choice}`);
  } while (choice !== 3 && menuShown < 3);
}

showMenu();

// Task 4: Break Statement
console.log("\n=== Task 4: Break Statement ===");

// Break exits the loop immediately
console.log("Finding first number divisible by 7:");
let i = 1;
while (i <= 100) {
  if (i % 7 === 0) {
    console.log(`Found it: ${i}`);
    break; // Exit the loop
  }
  i++;
}

// TODO: Search for a value in an array
function findInArray(array, target) {
  let index = 0;
  let found = false;

  while (index < array.length) {
    if (array[index] === target) {
      found = true;
      console.log(`Found "${target}" at index ${index}`);
      break;
    }
    index++;
  }

  if (!found) {
    console.log(`"${target}" not found`);
  }
}

const fruits = ["apple", "banana", "orange", "grape"];
findInArray(fruits, "orange");
findInArray(fruits, "mango");

// Task 5: Continue Statement
console.log("\n=== Task 5: Continue Statement ===");

// Continue skips the current iteration and goes to the next one
console.log("Print only odd numbers 1-10:");
let num = 0;
while (num < 10) {
  num++;
  if (num % 2 === 0) {
    continue; // Skip even numbers
  }
  console.log(num);
}

// TODO: Skip multiples of 3
console.log("\nNumbers 1-15, skipping multiples of 3:");
let n = 0;
while (n < 15) {
  n++;
  if (n % 3 === 0) {
    continue;
  }
  console.log(n);
}

// Task 6: Infinite Loop Protection
console.log("\n=== Task 6: Safety with Loops ===");

// Always have a way to exit!
function safeLoop() {
  let iterations = 0;
  const maxIterations = 1000; // Safety limit

  while (true) {
    // Infinite loop!
    iterations++;

    // Safety check
    if (iterations >= maxIterations) {
      console.log("⚠️ Safety limit reached!");
      break;
    }

    // Some condition to exit normally
    if (Math.random() > 0.99) {
      console.log(`✅ Exited normally after ${iterations} iterations`);
      break;
    }
  }
}

safeLoop();

// Task 7: While Loop with Arrays
console.log("\n=== Task 7: Processing Arrays ===");

// TODO: Sum array elements with while
function sumArrayWhile(numbers) {
  let sum = 0;
  let index = 0;

  while (index < numbers.length) {
    sum += numbers[index];
    index++;
  }

  return sum;
}

const numbers = [5, 10, 15, 20, 25];
console.log("Sum:", sumArrayWhile(numbers));

// TODO: Find max value with while
function findMaxWhile(numbers) {
  if (numbers.length === 0) return null;

  let max = numbers[0];
  let index = 1;

  while (index < numbers.length) {
    if (numbers[index] > max) {
      max = numbers[index];
    }
    index++;
  }

  return max;
}

console.log("Max value:", findMaxWhile(numbers));

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Write a function that doubles a number until it exceeds 1000
function doubleUntil1000(start) {
  // Use while loop to keep doubling
  // Your code here
}

// TODO: Write a function to find first negative number in array
function findFirstNegative(numbers) {
  // Use while loop with break
  // Your code here
}

// TODO: Write a function to count down from n to 1, skipping even numbers
function countdownOddOnly(n) {
  // Use while loop with continue
  // Your code here
}

// TODO: Write a password attempt simulator (max 3 attempts)
function attemptPassword(correctPassword) {
  // Simulate checking password with max 3 attempts
  // Use do-while loop
  // Your code here
}

// Test your functions
// console.log("Double from 5:", doubleUntil1000(5));
// console.log("First negative:", findFirstNegative([5, 3, -2, 7, -8]));
// countdownOddOnly(10);
// attemptPassword("secret123");

console.log("\n✅ Excellent! You've mastered while loops!");
console.log("💡 Key takeaways:");
console.log("   - Use WHILE when you don't know iterations in advance");
console.log("   - Use DO-WHILE when you need at least one execution");
console.log("   - Use BREAK to exit early");
console.log("   - Use CONTINUE to skip iterations");
console.log("   - Always ensure loops can exit!");

// Run with: node day4-while-loops.js
