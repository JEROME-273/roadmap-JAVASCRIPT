// Personal Information Display Project
// This is YOUR first complete JavaScript program!

// Step 1: Store your personal information
// TODO: Create variables for your personal info
const myName = "Paul Jerome A. Martinez"; // Put your name here
const myAge = 22; // Put your age here
const myCity = "Calapan"; // Put your city here
const myHobbies = ["reading", "coding", "gaming"]; // Put your hobbies in an array like ["reading", "coding", "gaming"]
const myFavoriteColor = "menk"; // Put your favorite color here

// Step 2: Create utility functions
// TODO: Function to display a section header
function displayHeader(title) {
  console.log("\n" + "=".repeat(30));
  console.log(title.toUpperCase());
  console.log("=".repeat(30));
}

// TODO: Function to display basic info
function displayBasicInfo() {
  // Use the displayHeader function
  displayHeader("Basic Information");

  // Display your information
  console.log(`Name: ${myName}`);
  console.log(`Age: ${myAge}`);
  console.log(`City: ${myCity}`);
  console.log(`Favorite Color: ${myFavoriteColor}`);
}

// TODO: Function to display hobbies
function displayHobbies() {
  displayHeader("My Hobbies");

  if (myHobbies.length === 0) {
    console.log("No hobbies listed yet!");
  } else {
    console.log(`I have ${myHobbies.length} hobbies:`);
    // Loop through hobbies (you'll learn loops soon!)
    for (let i = 0; i < myHobbies.length; i++) {
      console.log(`${i + 1}. ${myHobbies[i]}`);
    }
  }
}

// Step 3: Create calculation functions
// TODO: Function to calculate birth year
function calculateBirthYear() {
  const currentYear = new Date().getFullYear();
  return currentYear - myAge;
}

// TODO: Function to calculate age in days (approximate)
function calculateAgeInDays() {
  return myAge * 365; // Approximate, not accounting for leap years
}

// TODO: Function to display calculations
function displayCalculations() {
  displayHeader("Interesting Calculations");

  const birthYear = calculateBirthYear();
  const ageInDays = calculateAgeInDays();

  console.log(`You were born in: ${birthYear}`);
  console.log(`You are approximately ${ageInDays} days old!`);

  // Bonus: Days until next birthday (simplified)
  const daysInYear = 365;
  const daysSinceBirthday = Math.floor(Math.random() * 365); // Random for demo
  const daysUntilBirthday = daysInYear - daysSinceBirthday;
  console.log(`Days until next birthday: ~${daysUntilBirthday}`);
}

// Step 4: Main program function
function displayPersonalInfo() {
  // Welcome message
  console.log("🎉 Welcome to My Personal Information Display! 🎉");

  // Call all our functions
  displayBasicInfo();
  displayHobbies();
  displayCalculations();
  displayFavoriteQuote();
  timelivedInHours();

  // Closing message
  console.log("\n" + "=".repeat(30));
  console.log("Thanks for learning about me!");
  console.log("=".repeat(30));
}

// Step 5: Run the program
// TODO: Uncomment the line below after filling in your information
// displayPersonalInfo();

// Instructions to complete this project:
// 1. Fill in your personal information at the top
// 2. Uncomment the displayPersonalInfo() call above
// 3. Run the program with: node script.js
// 4. Celebrate your first complete JavaScript program! 🎉

// BONUS CHALLENGES:
// 1. Add a function to display your favorite quote ggs
// 2. Calculate how many hours you've lived
// 3. Add more personal statistics that interest you
// 4. Create a function that gives a random fact about you

function displayFavoriteQuote() {
  displayHeader("Favorite Quote");
  const myQuote =
    "The only limit to our realization of tomorrow is our doubts of today. - Franklin D. Roosevelt";
  console.log(myQuote);
}

function timelivedInHours() {
  const hoursLived = myAge * 365 * 24;
  console.log(`You have lived approximately ${hoursLived} hours!`);
}
