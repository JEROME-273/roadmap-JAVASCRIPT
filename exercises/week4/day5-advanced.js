// Week 4, Day 5: Advanced Techniques
// Modern JavaScript features that make your code cleaner!

console.log("=== Week 4, Day 5: Advanced Techniques ===\n");

// Task 1: Destructuring Arrays
console.log("=== Task 1: Array Destructuring ===");

const colors = ["red", "green", "blue", "yellow", "purple"];

// Old way
const firstColor = colors[0];
const secondColor = colors[1];

// Modern way with destructuring
const [first, second, third] = colors;
console.log("First:", first);
console.log("Second:", second);
console.log("Third:", third);

// TODO: Skip elements
const [, , thirdColor] = colors;
console.log("Third color (skipping first two):", thirdColor);

// TODO: Rest operator
const [primary, ...otherColors] = colors;
console.log("Primary:", primary);
console.log("Other colors:", otherColors);

// TODO: Swapping values
let a = 1;
let b = 2;
console.log("\nBefore swap: a =", a, ", b =", b);
[a, b] = [b, a];
console.log("After swap: a =", a, ", b =", b);

// Task 2: Destructuring Objects
console.log("\n=== Task 2: Object Destructuring ===");

const person = {
  name: "Juan dela Cruz",
  age: 30,
  city: "Manila",
  job: "Developer",
};

// Old way
const personName = person.name;
const personAge = person.age;

// Modern way
const { name, age, city } = person;
console.log("Name:", name);
console.log("Age:", age);
console.log("City:", city);

// TODO: Rename variables
const { name: fullName, age: years } = person;
console.log("Full name:", fullName);
console.log("Years:", years);

// TODO: Default values
const { name: n, country = "Philippines" } = person;
console.log("Country:", country);

// TODO: Nested destructuring
const user = {
  id: 1,
  profile: {
    username: "juan123",
    email: "juan@email.com",
  },
  settings: {
    theme: "dark",
    notifications: true,
  },
};

const {
  profile: { username, email },
  settings: { theme },
} = user;
console.log("\nUsername:", username);
console.log("Email:", email);
console.log("Theme:", theme);

// Task 3: Spread Operator with Arrays
console.log("\n=== Task 3: Spread Operator (Arrays) ===");

const arr1 = [1, 2, 3];
const arr2 = [4, 5, 6];

// TODO: Combine arrays
const combined = [...arr1, ...arr2];
console.log("Combined:", combined);

// TODO: Add items while spreading
const withExtra = [0, ...arr1, 3.5, ...arr2, 7];
console.log("With extra items:", withExtra);

// TODO: Copy array
const copy = [...arr1];
copy.push(4);
console.log("Original:", arr1);
console.log("Copy:", copy);

// TODO: Convert string to array
const word = "hello";
const letters = [...word];
console.log("Letters:", letters);

// TODO: Find max/min with spread
const numbers = [5, 2, 8, 1, 9, 3];
const max = Math.max(...numbers);
const min = Math.min(...numbers);
console.log("Numbers:", numbers);
console.log("Max:", max, "Min:", min);

// Task 4: Spread Operator with Objects
console.log("\n=== Task 4: Spread Operator (Objects) ===");

const basicInfo = {
  name: "Maria",
  age: 25,
};

const contactInfo = {
  email: "maria@email.com",
  phone: "09123456789",
};

// TODO: Merge objects
const fullInfo = { ...basicInfo, ...contactInfo };
console.log("Full info:", fullInfo);

// TODO: Add/override properties
const updated = {
  ...basicInfo,
  age: 26,
  city: "Cebu",
};
console.log("Updated:", updated);

// TODO: Clone object
const clone = { ...basicInfo };
clone.name = "Ana";
console.log("Original:", basicInfo);
console.log("Clone:", clone);

// Task 5: Object Methods
console.log("\n=== Task 5: Object Methods ===");

const product = {
  id: 1,
  name: "Laptop",
  price: 50000,
  category: "Electronics",
};

// TODO: Object.keys() - get all keys
const keys = Object.keys(product);
console.log("Keys:", keys);

// TODO: Object.values() - get all values
const values = Object.values(product);
console.log("Values:", values);

// TODO: Object.entries() - get key-value pairs
const entries = Object.entries(product);
console.log("Entries:", entries);

// Loop through entries
console.log("\nProduct details:");
Object.entries(product).forEach(([key, value]) => {
  console.log(`  ${key}: ${value}`);
});

// Task 6: Practical Examples
console.log("\n=== Task 6: Practical Examples ===");

// TODO: Function with destructured parameters
function displayUser({ name, age, city = "Unknown" }) {
  console.log(`${name}, ${age} years old, from ${city}`);
}

displayUser({ name: "Pedro", age: 28, city: "Davao" });
displayUser({ name: "Ana", age: 22 });

// TODO: Destructuring in function return
function getCoordinates() {
  return { x: 10, y: 20, z: 30 };
}

const { x, y, z } = getCoordinates();
console.log(`Coordinates: x=${x}, y=${y}, z=${z}`);

// TODO: Array destructuring in loops
const users = [
  { name: "Juan", score: 85 },
  { name: "Maria", score: 92 },
  { name: "Pedro", score: 78 },
];

console.log("\nUser scores:");
users.forEach(({ name, score }) => {
  console.log(`${name}: ${score}`);
});

// Task 7: Combining Techniques
console.log("\n=== Task 7: Combining Techniques ===");

// TODO: Update object with spread and destructuring
const student = {
  id: 1,
  name: "Alice",
  grades: [85, 90, 88],
  info: {
    age: 20,
    year: 3,
  },
};

// Add a new grade and update age
const updatedStudent = {
  ...student,
  grades: [...student.grades, 95],
  info: {
    ...student.info,
    age: 21,
  },
};

console.log("Original student:", student);
console.log("Updated student:", updatedStudent);

// TODO: Filter and map with destructuring
const products = [
  { name: "Phone", price: 20000, inStock: true },
  { name: "Laptop", price: 50000, inStock: false },
  { name: "Tablet", price: 15000, inStock: true },
];

const availableNames = products
  .filter(({ inStock }) => inStock)
  .map(({ name, price }) => `${name} (₱${price})`);

console.log("\nAvailable products:", availableNames);

// Task 8: Advanced Patterns
console.log("\n=== Task 8: Advanced Patterns ===");

// TODO: Dynamic object keys
const key = "username";
const value = "juan123";

const dynamicObj = {
  [key]: value,
  [`${key}Updated`]: new Date().toISOString(),
};

console.log("Dynamic object:", dynamicObj);

// TODO: Conditional properties
const includeEmail = true;
const userProfile = {
  name: "Juan",
  age: 30,
  ...(includeEmail && { email: "juan@email.com" }),
};

console.log("User profile:", userProfile);

// TODO: Removing properties
const { password, ...publicUser } = {
  name: "Maria",
  email: "maria@email.com",
  password: "secret123",
};

console.log("Public user (password removed):", publicUser);

// Task 9: Practical Utility Functions
console.log("\n=== Task 9: Utility Functions ===");

// TODO: Merge multiple objects
function mergeObjects(...objects) {
  return objects.reduce((acc, obj) => ({ ...acc, ...obj }), {});
}

const merged = mergeObjects({ a: 1, b: 2 }, { c: 3, d: 4 }, { e: 5 });
console.log("Merged objects:", merged);

// TODO: Pick specific properties
function pick(object, keys) {
  return keys.reduce((acc, key) => {
    if (key in object) {
      acc[key] = object[key];
    }
    return acc;
  }, {});
}

const fullUser = {
  id: 1,
  name: "Juan",
  email: "juan@email.com",
  password: "secret",
  createdAt: "2026-01-01",
};

const safeUser = pick(fullUser, ["id", "name", "email"]);
console.log("Picked properties:", safeUser);

// TODO: Deep clone (simple version)
function deepClone(obj) {
  return JSON.parse(JSON.stringify(obj));
}

const original = {
  name: "Test",
  nested: { value: 42 },
};

const cloned = deepClone(original);
cloned.nested.value = 100;

console.log("\nOriginal:", original);
console.log("Cloned:", cloned);

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Write a function that extracts first and last names
function extractNames(fullName) {
  // Split name and destructure
  // Your code here
}

// TODO: Write a function that merges user data with defaults
function createUserWithDefaults(userData) {
  const defaults = {
    role: "user",
    active: true,
    notifications: true,
  };
  // Your code here - merge with spread
}

// TODO: Write a function that groups array items by a property
function groupBy(array, property) {
  // Your code here
}

// TODO: Write a function that updates nested object properties
function updateNestedProperty(obj, path, value) {
  // Example: updateNestedProperty(user, "settings.theme", "light")
  // Your code here
}

// Test your functions
// console.log("Names:", extractNames("Juan dela Cruz"));
// console.log("User:", createUserWithDefaults({ name: "Maria", email: "maria@email.com" }));
// console.log("Grouped:", groupBy([{type: 'a', val: 1}, {type: 'b', val: 2}, {type: 'a', val: 3}], 'type'));

console.log("\n🎉 Congratulations! You've completed Week 4!");
console.log("\n✅ You now know:");
console.log("   - Array and object destructuring");
console.log("   - Spread operator for arrays and objects");
console.log("   - Object.keys(), Object.values(), Object.entries()");
console.log("   - Advanced data manipulation patterns");
console.log("\n💪 You're ready to write modern, clean JavaScript!");
console.log("🚀 These techniques are used in professional codebases!");
console.log("\n📦 Next: Build the Week 4 project to practice everything!");

// Run with: node day5-advanced.js
