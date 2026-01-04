// Week 4, Day 3: Objects - Organizing Related Data
// Objects let you store related information together

console.log("=== Week 4, Day 3: Objects ===\n");

// Task 1: Creating Objects
console.log("=== Task 1: Creating Objects ===");

// TODO: Create a person object
const person = {
  name: "John Doe",
  age: 30,
  city: "New York",
  isStudent: false,
};

console.log("Person:", person);

// TODO: Access object properties
console.log("Name:", person.name);
console.log("Age:", person.age);
console.log("City:", person["city"]); // Alternative syntax

// Task 2: Modifying Objects
console.log("\n=== Task 2: Modifying Objects ===");

// TODO: Change a property
person.age = 31;
console.log("Updated age:", person.age);

// TODO: Add a new property
person.country = "USA";
console.log("Added country:", person.country);

// TODO: Delete a property
delete person.isStudent;
console.log("After deleting isStudent:", person);

// Task 3: Object Methods
console.log("\n=== Task 3: Object Methods ===");

// TODO: Create an object with methods
const calculator = {
  add: function (a, b) {
    return a + b;
  },
  subtract: function (a, b) {
    return a - b;
  },
  multiply: function (a, b) {
    return a * b;
  },
  divide: function (a, b) {
    return b !== 0 ? a / b : "Cannot divide by zero";
  },
};

console.log("5 + 3 =", calculator.add(5, 3));
console.log("10 - 4 =", calculator.subtract(10, 4));
console.log("6 * 7 =", calculator.multiply(6, 7));
console.log("15 / 3 =", calculator.divide(15, 3));

// Task 4: Objects with this keyword
console.log("\n=== Task 4: Using 'this' ===");

const car = {
  brand: "Toyota",
  model: "Camry",
  year: 2022,
  getInfo: function () {
    return `${this.year} ${this.brand} ${this.model}`;
  },
  age: function () {
    const currentYear = new Date().getFullYear();
    return currentYear - this.year;
  },
};

console.log(car.getInfo());
console.log("Car age:", car.age(), "years");

// Task 5: Creating Multiple Objects
console.log("\n=== Task 5: Multiple Objects ===");

// TODO: Create a function that creates person objects
function createPerson(name, age, occupation) {
  return {
    name: name,
    age: age,
    occupation: occupation,
    introduce: function () {
      return `Hi, I'm ${this.name}, ${this.age} years old, and I work as a ${this.occupation}.`;
    },
  };
}

const person1 = createPerson("Alice", 28, "Developer");
const person2 = createPerson("Bob", 35, "Designer");

console.log(person1.introduce());
console.log(person2.introduce());

// Task 6: Nested Objects
console.log("\n=== Task 6: Nested Objects ===");

const company = {
  name: "Tech Corp",
  founded: 2010,
  address: {
    street: "123 Main St",
    city: "San Francisco",
    state: "CA",
    zip: "94102",
  },
  employees: 500,
  getFullAddress: function () {
    return `${this.address.street}, ${this.address.city}, ${this.address.state} ${this.address.zip}`;
  },
};

console.log("Company:", company.name);
console.log("City:", company.address.city);
console.log("Full address:", company.getFullAddress());

// Task 7: Object.keys(), Object.values(), Object.entries()
console.log("\n=== Task 7: Object Utilities ===");

const student = {
  name: "Emma",
  grade: "A",
  score: 95,
  subject: "Math",
};

console.log("Keys:", Object.keys(student));
console.log("Values:", Object.values(student));
console.log("Entries:", Object.entries(student));

// Loop through object properties
console.log("\nLooping through object:");
for (let key in student) {
  console.log(`${key}: ${student[key]}`);
}

// PRACTICE EXERCISES
console.log("\n=== Practice Exercises ===");

// TODO: Create a book object with title, author, pages, and read status
function createBook(title, author, pages, hasRead) {
  // Your code here
  // Include a method to get book info
}

// TODO: Create a bank account object
function createBankAccount(owner, balance) {
  // Your code here
  // Include methods: deposit, withdraw, getBalance
}

// TODO: Create a product object with discount calculation
function createProduct(name, price, discountPercent) {
  // Your code here
  // Include a method to calculate final price after discount
}

// TODO: Create a rectangle object with area and perimeter methods
function createRectangle(length, width) {
  // Your code here
  // Methods: getArea(), getPerimeter()
}

// Test your functions
// const myBook = createBook("1984", "George Orwell", 328, true);
// console.log(myBook);

// const account = createBankAccount("John", 1000);
// account.deposit(500);
// account.withdraw(200);
// console.log("Balance:", account.getBalance());

console.log("\n✅ Fantastic! You understand objects!");
console.log("💡 Objects are perfect for organizing related data!");
console.log(
  "🚀 Next: Combine arrays and objects for powerful data structures!"
);

// Run with: node day3-objects.js
