// Week 2, Day 2: Problem Solving
// Learning to break down problems and solve them step by step

console.log("=== Week 2, Day 2: Problem Solving ===\n");

// LESSON: How to Approach Any Programming Problem
// 1. Understand the problem
// 2. Break it into smaller steps (pseudocode)
// 3. Write code for each step
// 4. Test and debug

// Example 1: Find the largest number in three numbers
console.log("=== Example 1: Find Largest of Three ===");

// Step 1: Understand - We need to compare 3 numbers and return the biggest
// Step 2: Pseudocode:
//   - Compare first two numbers, keep the larger one
//   - Compare that with the third number
//   - Return the largest

// Step 3: Write the code
function findLargest(a, b, c) {
  let largest = a; // Assume first is largest

  if (b > largest) {
    largest = b;
  }

  if (c > largest) {
    largest = c;
  }

  return largest;
}

// Step 4: Test
console.log("Largest of 5, 12, 8:", findLargest(5, 12, 8));
console.log("Largest of 15, 3, 9:", findLargest(15, 3, 9));

// Example 2: Check if a year is a leap year
console.log("\n=== Example 2: Leap Year Checker ===");

// Step 1: Understand the rules:
//   - Divisible by 4 = leap year
//   - UNLESS divisible by 100 = NOT leap year
//   - UNLESS divisible by 400 = leap year

// Step 2: Pseudocode:
//   - If divisible by 400 → leap year
//   - Else if divisible by 100 → NOT leap year
//   - Else if divisible by 4 → leap year
//   - Else → NOT leap year

// Step 3: Write code
function isLeapYear(year) {
  if (year % 400 === 0) {
    return true;
  } else if (year % 100 === 0) {
    return false;
  } else if (year % 4 === 0) {
    return true;
  } else {
    return false;
  }
}

// Step 4: Test
console.log("2024:", isLeapYear(2024)); // true
console.log("1900:", isLeapYear(1900)); // false
console.log("2000:", isLeapYear(2000)); // true
console.log("2023:", isLeapYear(2023)); // false

// Example 3: Count down from a number
console.log("\n=== Example 3: Countdown ===");

// Step 1: Understand - Print numbers from n down to 1
// Step 2: Pseudocode:
//   - Start with n
//   - While number > 0, print it and decrease by 1

// Step 3: Write code
function countdown(n) {
  const result = [];
  for (let i = n; i >= 1; i--) {
    result.push(i);
  }
  return result.join(", ");
}

// Step 4: Test
console.log("Countdown from 5:", countdown(5));

// PRACTICE PROBLEMS - Now you try!
console.log("\n=== Practice Problems ===");

// Problem 1: FizzBuzz (Classic!)
// Print numbers 1 to n, but:
// - If divisible by 3, print "Fizz"
// - If divisible by 5, print "Buzz"
// - If divisible by both, print "FizzBuzz"
// - Otherwise, print the number

function fizzBuzz(n) {
  // Step 1: Understand ✅
  // Step 2: Your pseudocode here (write as comments!)

  // Step 3: Your code here
  for (let i = 1; i <= n; i++) {
    if (i % 15 === 0) {
      console.log("FizzBuzz");
    } else if (i % 3 === 0) {
      console.log("Fizz");
    } else if (i % 5 === 0) {
      console.log("Buzz");
    } else {
      console.log(i);
    }
  }
}

console.log("\nFizzBuzz to 15:");
fizzBuzz(15);

// Problem 2: Sum of array
// Calculate the sum of all numbers in an array
function sumArray(numbers) {
  // Pseudocode:
  // - Start with sum = 0
  // - Go through each number
  // - Add it to sum
  // - Return sum

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}

console.log("\nSum of [1,2,3,4,5]:", sumArray([1, 2, 3, 4, 5]));

// Problem 3: Find minimum in array
function findMin(numbers) {
  // Your pseudocode:
  //

  // Your code:
  if (numbers.length === 0) return null;

  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) {
      min = numbers[i];
    }
  }
  return min;
}

console.log("Min of [5, 2, 8, 1, 9]:", findMin([5, 2, 8, 1, 9]));

// Problem 4: Count vowels in a string
function countVowels(str) {
  // Pseudocode:
  // - Set count to 0
  // - Check each letter
  // - If it's a vowel (a,e,i,o,u), add 1 to count
  // - Return count

  const vowels = "aeiouAEIOU";
  let count = 0;

  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) {
      count++;
    }
  }

  return count;
}

console.log("\nVowels in 'hello world':", countVowels("hello world"));

// Problem 5: Reverse a string
function reverseString(str) {
  // Your pseudocode:
  //

  // Your code:
  let reversed = "";
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}

console.log("Reverse 'hello':", reverseString("hello"));

// YOUR TURN - Solve these yourself!
console.log("\n=== Your Turn to Solve ===");

// TODO: Problem 6 - Check if number is prime
function isPrime(num) {
  // Pseudocode:
  // - A prime number is only divisible by 1 and itself
  // - Check if num is less than 2 (not prime)
  // - Check from 2 to num-1, if any divides evenly, it's not prime
  // - If none divide evenly, it's prime
  // Your code here:
}

// TODO: Problem 7 - Get factorial
function factorial(n) {
  // Pseudocode:
  // - Factorial of n = n × (n-1) × (n-2) × ... × 1
  // - Example: 5! = 5 × 4 × 3 × 2 × 1 = 120
  // Your code here:
}

// TODO: Problem 8 - Convert array to object
function arrayToObject(keys, values) {
  // Pseudocode:
  // - keys = ["name", "age", "city"]
  // - values = ["Juan", 25, "Manila"]
  // - Create object: { name: "Juan", age: 25, city: "Manila" }
  // Your code here:
}

// TODO: Problem 9 - Remove duplicates from array
function removeDuplicates(arr) {
  // Pseudocode:
  // - Create empty result array
  // - For each item, check if it's already in result
  // - If not, add it
  // - Return result
  // Your code here:
}

// TODO: Problem 10 - Find second largest number
function findSecondLargest(numbers) {
  // Pseudocode:
  // - Find the largest number
  // - Find the largest number that's not equal to the first largest
  // Your code here:
}

// Test your solutions (uncomment when ready):
// console.log("\nIs 17 prime?", isPrime(17));
// console.log("Is 10 prime?", isPrime(10));
// console.log("5! =", factorial(5));
// console.log("Array to object:", arrayToObject(["name", "age"], ["Juan", 25]));
// console.log("Remove duplicates:", removeDuplicates([1, 2, 2, 3, 4, 4, 5]));
// console.log("Second largest:", findSecondLargest([5, 2, 8, 1, 9]));

console.log("\n✅ Problem solving is a skill that improves with practice!");
console.log("💡 Remember the steps:");
console.log("   1. Understand the problem");
console.log("   2. Break it down (pseudocode)");
console.log("   3. Write the code");
console.log("   4. Test and debug");
console.log("\n🎯 These same steps work for ANY programming problem!");

// Run with: node day2-problem-solving.js
