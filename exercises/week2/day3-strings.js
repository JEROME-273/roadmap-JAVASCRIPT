// Week 2, Day 3: String Manipulation
// Working with text data in JavaScript

console.log("=== Week 2, Day 3: Strings ===\n");

// Task 1: String Basics
console.log("=== Task 1: String Basics ===");

const message = "Hello, World!";
const name = "Juan dela Cruz";

console.log("Message:", message);
console.log("Length:", message.length);
console.log("First character:", message[0]);
console.log("Last character:", message[message.length - 1]);

// Task 2: String Methods
console.log("\n=== Task 2: String Methods ===");

const text = "JavaScript is Awesome";

// TODO: Change case
console.log("Uppercase:", text.toUpperCase());
console.log("Lowercase:", text.toLowerCase());

// TODO: Check if string contains something
console.log("Includes 'Java':", text.includes("Java"));
console.log("Includes 'Python':", text.includes("Python"));

// TODO: Find position
console.log("Index of 'is':", text.indexOf("is"));
console.log("Index of 'xyz':", text.indexOf("xyz")); // Returns -1 if not found

// TODO: Extract parts
console.log("First 10 chars:", text.substring(0, 10));
console.log("From index 11:", text.substring(11));
console.log("Slice (0, 10):", text.slice(0, 10));

// Task 3: Template Literals
console.log("\n=== Task 3: Template Literals ===");

const firstName = "Maria";
const age = 25;
const city = "Manila";

// Old way
const oldWay = "My name is " + firstName + " and I am " + age + " years old.";
console.log("Old way:", oldWay);

// Modern way
const modernWay = `My name is ${firstName} and I am ${age} years old.`;
console.log("Modern way:", modernWay);

// Multi-line strings
const poem = `
    Roses are red,
    Violets are blue,
    JavaScript is great,
    And so are you!
`;
console.log("Poem:", poem);

// TODO: Expressions in template literals
const a = 5;
const b = 10;
console.log(`${a} + ${b} = ${a + b}`);

// Task 4: String Manipulation Functions
console.log("\n=== Task 4: String Functions ===");

// TODO: Trim whitespace
const messyString = "   Hello World   ";
console.log("Original:", `'${messyString}'`);
console.log("Trimmed:", `'${messyString.trim()}'`);

// TODO: Replace text
const sentence = "I love cats. Cats are great!";
console.log("Original:", sentence);
console.log("Replace first:", sentence.replace("cats", "dogs"));
console.log("Replace all:", sentence.replace(/cats/gi, "dogs"));

// TODO: Split string into array
const fruits = "apple,banana,orange,grape";
const fruitArray = fruits.split(",");
console.log("Split by comma:", fruitArray);

const words = "Hello World JavaScript";
const wordArray = words.split(" ");
console.log("Split by space:", wordArray);

// TODO: Join array into string
const joined = wordArray.join("-");
console.log("Joined with dash:", joined);

// Task 5: Practical String Functions
console.log("\n=== Task 5: Practical Functions ===");

// TODO: Create username from full name
function createUsername(fullName) {
  return fullName.toLowerCase().replace(/ /g, "_");
}

console.log("Username:", createUsername("Juan dela Cruz"));

// TODO: Count words in a sentence
function countWords(sentence) {
  return sentence.trim().split(/\s+/).length;
}

console.log("Word count:", countWords("This is a simple sentence"));

// TODO: Capitalize first letter
function capitalize(word) {
  return word[0].toUpperCase() + word.slice(1).toLowerCase();
}

console.log("Capitalized:", capitalize("javascript"));

// TODO: Title case (capitalize each word)
function titleCase(sentence) {
  return sentence
    .split(" ")
    .map((word) => capitalize(word))
    .join(" ");
}

console.log("Title case:", titleCase("hello world from javascript"));

// TODO: Check if palindrome
function isPalindrome(word) {
  const cleaned = word.toLowerCase().replace(/[^a-z]/g, "");
  const reversed = cleaned.split("").reverse().join("");
  return cleaned === reversed;
}

console.log("Is 'racecar' palindrome?", isPalindrome("racecar"));
console.log("Is 'hello' palindrome?", isPalindrome("hello"));

// TODO: Extract initials
function getInitials(fullName) {
  return fullName
    .split(" ")
    .map((word) => word[0].toUpperCase())
    .join("");
}

console.log("Initials:", getInitials("Juan Santos dela Cruz"));

// TODO: Mask email
function maskEmail(email) {
  const [username, domain] = email.split("@");
  const masked = username[0] + "***" + username[username.length - 1];
  return masked + "@" + domain;
}

console.log("Masked:", maskEmail("juan@email.com"));

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Count vowels in a string
function countVowels(str) {
  // Your code here
}

// TODO: Reverse a string
function reverseString(str) {
  // Your code here
}

// TODO: Check if string starts with a specific word
function startsWith(str, word) {
  // Your code here (or use built-in startsWith)
}

// TODO: Remove all spaces from a string
function removeSpaces(str) {
  // Your code here
}

// TODO: Truncate string to specific length and add "..."
function truncate(str, maxLength) {
  // Your code here
}

// TODO: Count occurrences of a character
function countChar(str, char) {
  // Your code here
}

// Test your functions
// console.log("Vowels in 'hello':", countVowels("hello"));
// console.log("Reversed:", reverseString("hello"));
// console.log("Starts with 'Hello':", startsWith("Hello World", "Hello"));
// console.log("No spaces:", removeSpaces("Hello World"));
// console.log("Truncated:", truncate("This is a long sentence", 10));
// console.log("Count 'l' in 'hello':", countChar("hello", "l"));

console.log("\n✅ Excellent! You can manipulate strings!");
console.log("💡 String manipulation is used everywhere in programming!");

// Run with: node day3-strings.js
