// Week 3 Project: Number Guessing Game
// A fun game that uses everything you learned in Week 3!

console.log("🎮 Welcome to the Number Guessing Game! 🎮\n");

// Game Configuration
const MIN_NUMBER = 1;
const MAX_NUMBER = 100;
const MAX_ATTEMPTS = 7;

// TODO: Function to generate a random number
function generateRandomNumber(min, max) {
  // Hint: Math.random() gives a number between 0 and 1
  // Math.floor() rounds down to nearest integer
  return Math.floor(Math.random() * (max - min + 1)) + min;
}

// TODO: Function to display welcome message
function displayWelcome() {
  console.log("=".repeat(50));
  console.log("  GUESS THE NUMBER GAME");
  console.log("=".repeat(50));
  console.log(
    `I'm thinking of a number between ${MIN_NUMBER} and ${MAX_NUMBER}`
  );
  console.log(`You have ${MAX_ATTEMPTS} attempts to guess it!`);
  console.log("=".repeat(50) + "\n");
}

// TODO: Function to check if guess is correct
function checkGuess(guess, target) {
  if (guess === target) {
    return "correct";
  } else if (guess < target) {
    return "too low";
  } else {
    return "too high";
  }
}

// TODO: Function to get hint message
function getHint(guess, target) {
  const difference = Math.abs(guess - target);

  if (difference <= 5) {
    return "🔥 Very close!";
  } else if (difference <= 10) {
    return "😊 Getting warm!";
  } else if (difference <= 20) {
    return "🤔 Not too far...";
  } else {
    return "❄️ Way off!";
  }
}

// TODO: Function to display the result
function displayResult(won, attempts, target) {
  console.log("\n" + "=".repeat(50));
  if (won) {
    console.log("🎉 CONGRATULATIONS! YOU WON! 🎉");
    console.log(`You guessed the number ${target} in ${attempts} attempts!`);

    // Give a performance rating
    if (attempts <= 3) {
      console.log("⭐⭐⭐ AMAZING! You're a guessing master!");
    } else if (attempts <= 5) {
      console.log("⭐⭐ Great job!");
    } else {
      console.log("⭐ Good effort!");
    }
  } else {
    console.log("😞 GAME OVER! 😞");
    console.log(`The number was ${target}`);
    console.log("Better luck next time!");
  }
  console.log("=".repeat(50) + "\n");
}

// TODO: Main game function
function playGame() {
  displayWelcome();

  const targetNumber = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);
  let attempts = 0;
  let hasWon = false;

  // Simulate guesses (in a real game, you'd get input from user)
  // For now, let's simulate with random guesses
  console.log("Starting game simulation...\n");

  while (attempts < MAX_ATTEMPTS && !hasWon) {
    attempts++;

    // Simulate a guess (random number)
    // In a real app, you'd get this from user input
    const guess = generateRandomNumber(MIN_NUMBER, MAX_NUMBER);

    console.log(`Attempt ${attempts}/${MAX_ATTEMPTS}: Guessed ${guess}`);

    const result = checkGuess(guess, targetNumber);

    if (result === "correct") {
      hasWon = true;
    } else {
      const hint = getHint(guess, targetNumber);
      console.log(`  → ${result.toUpperCase()} ${hint}\n`);
    }
  }

  displayResult(hasWon, attempts, targetNumber);
}

// TODO: Function to play multiple games
function playMultipleGames(numberOfGames) {
  let wins = 0;
  let totalAttempts = 0;

  for (let game = 1; game <= numberOfGames; game++) {
    console.log(`\n📍 GAME ${game} OF ${numberOfGames}\n`);

    // Play one game and track results
    // You would need to modify playGame to return results
    playGame();

    // In a complete version, you'd track wins and attempts here
  }

  console.log("\n" + "=".repeat(50));
  console.log("  FINAL STATISTICS");
  console.log("=".repeat(50));
  console.log(`Games Played: ${numberOfGames}`);
  // Add more statistics here
  console.log("=".repeat(50));
}

// Run the game
playGame();

// BONUS: Uncomment to play multiple games
// playMultipleGames(3);

/* 
NEXT STEPS TO MAKE THIS A REAL INTERACTIVE GAME:
1. Learn about user input (we'll cover this in later weeks)
2. Add input validation
3. Let user choose difficulty
4. Save high scores
5. Add a proper menu system

For now, this demonstrates all the Week 3 concepts:
✅ Conditionals (if/else)
✅ Loops (while loop)
✅ Functions
✅ Random numbers
✅ Game logic

Great work completing Week 3! 🚀
*/

// Run with: node game.js
