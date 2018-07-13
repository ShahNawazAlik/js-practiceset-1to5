//2.1
let a = 2;
if (a > 4) {
    console.log("Hello Pakistan");
} else {
    console.log("Hello China");
}

//2.2
let firstName = "Ali";
let numb = 4;
if (numb !== 4) {
    console.log("Tesla");
} else {
    console.log("SpaceX");
}

//2.3
let level = 1;
switch (level) {
    case 1:
        console.log("easy");
        break;
    case 2:
        console.log("medium");
        break;
    case 3:
        console.log("hard");
        break;
    default:
        console.log("I am confused!");
}

//2.4
let myCash = 5000;
if (myCash > 10000) {
    console.log("buy a gold ring");
} else if (myCash > 500) {
    console.log("buy chocolates");
} else {
    console.log("bankcrupt!");
}

//2.5
let userQuery = 1;
if (userQuery === 1) {
    console.log("Hello Sir, thank you for using our service. How may I help you?");
} else if (userQuery === 2) {
    console.log("Sorry, the service is down at the moment");
} else {
    console.log("I did not understand your question");
}

//2.6

let computerSecret;
let userGuess;

computerSecret = parseInt(Math.random() * 100);
userGuess = 40; 
if (userGuess === computerSecret) {
    console.log("Congratulations! You win!! You guessed the number!");
} else if (userGuess > computerSecret) {
    console.log("Too high");
} else if (userGuess < computerSecret) {
    console.log("Too low");
}

