# Week 3 Project: Number Guessing Game

## Project Overview

Build an interactive number guessing game that uses conditionals, loops, and functions. This project combines all Week 3 concepts!

## Game Features

1. Computer picks a random number between 1-100
2. Player has 7 attempts to guess the number
3. After each guess, provide hints (too high/too low)
4. Track number of attempts used
5. Celebrate when player wins
6. Offer to play again

## Learning Objectives

- Use random number generation
- Implement game loop with while
- Use conditionals for game logic
- Track game state with variables
- Create functions for game actions

## Implementation Guide

### Step 1: Plan Your Functions

- `generateRandomNumber()` - Pick random number
- `checkGuess(guess, target)` - Compare guess to answer
- `playGame()` - Main game loop
- `displayWelcome()` - Show instructions
- `displayResult(won, attempts)` - Show final message

### Step 2: Implement Core Logic

See `game.js` for starter code

### Step 3: Add Enhancements

- Input validation
- Difficulty levels (change number range)
- Score tracking across games
- Best score (fewest attempts)

## Starter Code

The `game.js` file has the basic structure. Your job is to fill in the logic!

## Success Criteria

✅ Game generates random numbers
✅ Accepts player guesses
✅ Provides correct hints
✅ Tracks attempts correctly
✅ Detects win/loss conditions
✅ Code is organized with functions

## Bonus Challenges

🌟 Add difficulty levels (Easy: 1-50, Hard: 1-200)
🌟 Track high score across multiple games
🌟 Add a "Give up" option
🌟 Show a progress bar of attempts remaining
🌟 Add ASCII art for wins/losses

This is your first real game! Have fun building it! 🎮
