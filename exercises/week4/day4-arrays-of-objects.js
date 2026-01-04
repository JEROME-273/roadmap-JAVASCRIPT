// Week 4, Day 4: Arrays of Objects
// Working with real-world data structures!

console.log("=== Week 4, Day 4: Arrays of Objects ===\n");

// Task 1: Understanding Arrays of Objects
console.log("=== Task 1: Arrays of Objects ===");

// This is how real applications store data!
const users = [
  { id: 1, name: "Juan", age: 25, city: "Manila" },
  { id: 2, name: "Maria", age: 30, city: "Cebu" },
  { id: 3, name: "Pedro", age: 22, city: "Davao" },
  { id: 4, name: "Ana", age: 28, city: "Manila" },
];

console.log("Users data:");
console.log(users);

// Accessing data
console.log("\nFirst user:", users[0]);
console.log("First user's name:", users[0].name);

// Task 2: Looping Through Objects
console.log("\n=== Task 2: Looping Through Objects ===");

// TODO: Traditional for loop
console.log("All users:");
for (let i = 0; i < users.length; i++) {
  console.log(
    `${i + 1}. ${users[i].name} (${users[i].age}) from ${users[i].city}`
  );
}

// TODO: forEach method
console.log("\nUsing forEach:");
users.forEach((user) => {
  console.log(`- ${user.name}: ${user.age} years old`);
});

// Task 3: Filtering Objects
console.log("\n=== Task 3: Filtering Objects ===");

// TODO: Get users from Manila
const manilaUsers = users.filter((user) => user.city === "Manila");
console.log("Users from Manila:");
console.log(manilaUsers);

// TODO: Get users older than 25
const olderUsers = users.filter((user) => user.age > 25);
console.log("\nUsers older than 25:");
olderUsers.forEach((user) => console.log(`- ${user.name}: ${user.age}`));

// TODO: Complex filtering function
function filterUsers(users, criteria) {
  return users.filter((user) => {
    if (criteria.minAge && user.age < criteria.minAge) return false;
    if (criteria.maxAge && user.age > criteria.maxAge) return false;
    if (criteria.city && user.city !== criteria.city) return false;
    return true;
  });
}

const filtered = filterUsers(users, { minAge: 23, city: "Manila" });
console.log("\nFiltered users (age > 23, Manila):");
console.log(filtered);

// Task 4: Mapping Objects
console.log("\n=== Task 4: Mapping Objects ===");

// TODO: Get just the names
const names = users.map((user) => user.name);
console.log("All names:", names);

// TODO: Get names and ages
const nameAge = users.map((user) => `${user.name} (${user.age})`);
console.log("Names with ages:", nameAge);

// TODO: Transform objects
const userSummaries = users.map((user) => ({
  fullInfo: `${user.name} from ${user.city}`,
  isAdult: user.age >= 18,
  yearBorn: 2026 - user.age,
}));

console.log("\nUser summaries:");
console.log(userSummaries);

// Task 5: Finding Objects
console.log("\n=== Task 5: Finding Objects ===");

// TODO: Find user by name
const maria = users.find((user) => user.name === "Maria");
console.log("Found Maria:", maria);

// TODO: Find user by ID
function findUserById(users, id) {
  return users.find((user) => user.id === id);
}

console.log("User with ID 3:", findUserById(users, 3));

// TODO: Find index of user
const pedroIndex = users.findIndex((user) => user.name === "Pedro");
console.log("Pedro is at index:", pedroIndex);

// Task 6: Sorting Objects
console.log("\n=== Task 6: Sorting Objects ===");

// TODO: Sort by age
const byAge = [...users].sort((a, b) => a.age - b.age);
console.log("Sorted by age (youngest first):");
byAge.forEach((user) => console.log(`${user.name}: ${user.age}`));

// TODO: Sort by name
const byName = [...users].sort((a, b) => a.name.localeCompare(b.name));
console.log("\nSorted by name:");
byName.forEach((user) => console.log(user.name));

// Task 7: Grouping Objects
console.log("\n=== Task 7: Grouping Objects ===");

// TODO: Group users by city
function groupByCity(users) {
  const grouped = {};

  users.forEach((user) => {
    if (!grouped[user.city]) {
      grouped[user.city] = [];
    }
    grouped[user.city].push(user);
  });

  return grouped;
}

const byCity = groupByCity(users);
console.log("Users grouped by city:");
console.log(byCity);

// Task 8: Real-World Example - Products
console.log("\n=== Task 8: Product Management ===");

const products = [
  { id: 1, name: "Laptop", price: 50000, category: "Electronics", stock: 5 },
  { id: 2, name: "Phone", price: 20000, category: "Electronics", stock: 10 },
  { id: 3, name: "Shirt", price: 500, category: "Clothing", stock: 20 },
  { id: 4, name: "Shoes", price: 2000, category: "Clothing", stock: 0 },
  { id: 5, name: "Watch", price: 5000, category: "Accessories", stock: 3 },
];

// TODO: Get expensive products (price > 3000)
const expensive = products.filter((p) => p.price > 3000);
console.log("Expensive products:");
expensive.forEach((p) => console.log(`- ${p.name}: ₱${p.price}`));

// TODO: Get out of stock items
const outOfStock = products.filter((p) => p.stock === 0);
console.log("\nOut of stock:");
console.log(outOfStock);

// TODO: Calculate total inventory value
const totalValue = products.reduce((total, product) => {
  return total + product.price * product.stock;
}, 0);
console.log("\nTotal inventory value: ₱" + totalValue.toLocaleString());

// TODO: Get products by category
function getByCategory(products, category) {
  return products.filter((p) => p.category === category);
}

console.log("\nElectronics:");
getByCategory(products, "Electronics").forEach((p) =>
  console.log(`- ${p.name}`)
);

// Task 9: Updating Objects in Arrays
console.log("\n=== Task 9: Updating Objects ===");

const inventory = [...products];

// TODO: Update stock for a product
function updateStock(products, productId, newStock) {
  return products.map((product) => {
    if (product.id === productId) {
      return { ...product, stock: newStock };
    }
    return product;
  });
}

const updated = updateStock(inventory, 4, 15);
console.log("Updated shoes stock:");
console.log(updated.find((p) => p.id === 4));

// TODO: Apply discount to category
function applyDiscount(products, category, discountPercent) {
  return products.map((product) => {
    if (product.category === category) {
      return {
        ...product,
        price: product.price * (1 - discountPercent / 100),
        onSale: true,
      };
    }
    return product;
  });
}

const saleItems = applyDiscount(products, "Clothing", 20);
console.log("\n20% off on Clothing:");
saleItems
  .filter((p) => p.onSale)
  .forEach((p) => {
    console.log(`- ${p.name}: ₱${p.price.toFixed(2)}`);
  });

// Task 10: Complex Operations
console.log("\n=== Task 10: Complex Queries ===");

// TODO: Get most expensive product in each category
function getMostExpensiveByCategory(products) {
  const categories = [...new Set(products.map((p) => p.category))];

  return categories.map((category) => {
    const categoryProducts = products.filter((p) => p.category === category);
    const mostExpensive = categoryProducts.reduce((max, product) =>
      product.price > max.price ? product : max
    );
    return { category, product: mostExpensive };
  });
}

console.log("Most expensive in each category:");
getMostExpensiveByCategory(products).forEach((item) => {
  console.log(
    `${item.category}: ${item.product.name} (₱${item.product.price})`
  );
});

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

const students = [
  { id: 1, name: "Alice", grade: 85, subject: "Math" },
  { id: 2, name: "Bob", grade: 92, subject: "Science" },
  { id: 3, name: "Charlie", grade: 78, subject: "Math" },
  { id: 4, name: "Diana", grade: 88, subject: "Science" },
];

// TODO: Get all students with grade > 80
function getHighGrades(students) {
  // Your code here
}

// TODO: Get average grade
function getAverageGrade(students) {
  // Your code here
}

// TODO: Group students by subject
function groupBySubject(students) {
  // Your code here
}

// TODO: Find top student
function getTopStudent(students) {
  // Your code here
}

// TODO: Add bonus points to all students
function addBonus(students, bonus) {
  // Your code here
}

// Test your functions
// console.log("High grades:", getHighGrades(students));
// console.log("Average:", getAverageGrade(students));
// console.log("By subject:", groupBySubject(students));
// console.log("Top student:", getTopStudent(students));
// console.log("With bonus:", addBonus(students, 5));

console.log("\n✅ Fantastic! You can now work with real-world data!");
console.log("💡 Arrays of objects are how most applications store data!");
console.log("🚀 You're ready to build database-like operations in JavaScript!");

// Run with: node day4-arrays-of-objects.js
