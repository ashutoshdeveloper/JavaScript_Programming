// type a code to print try again untill the user type the correct number

// Define the correct number
const correctNumber = 7;
let userInput;

// Keep prompting the user until they guess the correct number
do {
    userInput = parseInt(prompt("Guess the correct number: "));
    if (userInput !== correctNumber) {
        console.log("Try again!");
    }
} while (userInput !== correctNumber);

console.log("Congratulations! You guessed the correct number.");