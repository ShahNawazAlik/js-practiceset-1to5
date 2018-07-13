//3.1:The speed limit of Shahrah-e-Faisal is 60 km/hr.
// Write a program that, given a car's speed, tells whether it is Overspeeding or not.
const speed = 60;
let mySpeed = 40;
if(mySpeed>speed){
	console.log("Overspeeding");
}else{
	console.log("Not")
}
//3.2:
let userName = "Salma";
let isLoggedIn=true;

if (isLoggedIn=true)
{console.log("Welcome , " + userName);
}else{
	console.log("Please log in to continue!");}

//3.3
let temperature = 40;
let currentTemp = 41;

if (currentTemp> temperature)
	{console.log("IMPORTANT ANNOUNCEMENT!!! UIT is closed tomorrow due to heat wave.")}

//3.4
 let millionaire = 1000000 ;
 let person  = 10000;

 if( person >= millionaire)
 	{console.log("You Are A Millionaire");}
 else
 	{console.log("You Are Not A Millionaire");}

 //3.5
 	let isElectric = true;

if (isElectric === true){
	console.log("The car has been manufactured by Tesla");
}else{
	console.log("Not");}
//3.6
	let highScore = 60; // 
	let userScore = 33; 
if (userScore > highScore) {
    console.log("Congratulations!! Your new high score is " + userScore);
}else{
    console.log("Try Again. You just need " + (highScore - userScore + 1) + " points to win!");
}

//3.7

	let numb = 47;
if (numb % 2 === 0){ 
    console.log("EVEN");
} else {
    console.log("ODD");

    //3.8

    let year = 2000; 
if (year % 4 === 0) {
    
    if (year % 100 === 0 && year % 400 !== 0) {
        console.log("This is NOT a Leap year");
    } else {
        console.log("This is a Leap year");
    }
} else {
    console.log("This is NOT a Leap year");
}
//3.9
	const costPerMinute = 1; 
	let userCash = 15; 
if (userCash < costPerMinute) {
    console.log("Moazziz Sarif, aap ka mojooda balance iss call k lye naa kaafi hai. Please re-charge karain");
} else if (userCash <= 10) {
    console.log("Moazziz sarif, aap ka balance khatam honay wala hai");
    console.log("Ring Ring");
} else {
    console.log("Ring Ring");}}

//3.10
	let myAbsents = 1; 
	 if (myAbsents <= 2) {
    	console.log("Congrats! You are eligible for the award");
	}else {
    	console.log("Sorry, but you have been absent too many times. You are ineligible for the awards :( ");
}



//3.11


let totalMarks = 100;
let obtainedMarks = 85;

if (obtainedMarks > 90 && marks <=100)
	{console.log("A+")}
  else if  (obtainedMarks >= 86){
	console.log("A")
}
  else if  (obtainedMarks >= 80){
	console.log("A-")
}
  else if  (obtainedMarks >= 70){
	console.log("B")
}
  else if  (obtainedMarks >= 60){
	console.log("C")
}
  else if  (obtainedMarks >= 50){
	console.log("D")
}
  else if  (obtainedMarks >= 40){
	console.log("E")
}
  else if(obtainedMarks < 39)
  {
	console.log("F")
}
else{
	console.log("Not Cleared")
}

//3.12
const appleCost = 10; 
const mangoCost = 15; 
const bananaCost = 8; 

const aliCash = 100; 
let totalCost;

let noOfApples = 2; 
let noOfMangoes = 7;
let noOfBananas = 5;

totalCost = noOfApples*appleCost + noOfMangoes*mangoCost + noOfBananas*bananaCost;

if (totalCost > 100 ) {
    console.log("Sorry, you do not have enough money");
} else {
    console.log("Hurray! You have enough money to buy all fruits");
}


//3.13
let customerSays = "Is UIT open today?"; 
switch(customerSays) {
    case "Hi":
    case "Hello":
    case "Hey":
    case "Salam":
        console.log("Thank you for calling TechKaro Customer Service. How may I help you?");
        break;
    case "Is UIT open today?":
        console.log("Yes");
        break;
    case "What are the timings of today's class?":
        console.log("1:30 - 5:3");
        break;
    case "Where will the class be conducted?":
        console.log("At CL-1, Usman Institute");
        break;
    default:
        console.log("Sorry, I do not understand your question");
}
//3.14
let myCash = 19000;
let withdrawCash = 18500; 
if (withdrawCash > myCash) {
    console.log("Withdrawal FAILED! Sorry, you do not have sufficient balance.");
} else {
    console.log("Withdrawal SUCCESS! Your new balance is Rs. " + (myCash - withdrawCash));
}
//3.15
let isRaining = true; 
let isSnowing = false;
let windSpeed = 16; 
let isCloudy = true;
//
if (isRaining === false && isSnowing === false && windSpeed < 15 && isCloudy === false) {
    console.log("SUCCESS!! The weather is good for launch!");
} else {
    console.log("FAIL!! The weather is NOT good for launch");
}

//3.16
let math = 10; 
let comp = 18; 
let eng = 30; 
//
if (math > 10 || comp > 20 || eng > 8) {
    console.log("PASSED!");
} else {
    console.log("FAILED");
}


//3.17
 let math1 = 10;
 let comp2 = 18;
 let eng3 = 30; 
 if (math1 > 10 && comp2 > 20 && eng3 > 8) {
     console.log("PASSED!");
 } else {
     console.log("FAILED");
 }

//3.18
let girls = 4;
let boys = 2;
if (girls > boys) {
    console.log('Girls are in majority');
} else if (girls < boys) {
    console.log('Boys are in majority');    
} else {
    console.log('The class has an equal number of girls and boys');        
}

//3.19
let costOfApple = 10;
let costOfMango = 15;
if (costOfApple = costOfMango) {
    console.log('Apple and mango cost the same!');
} else if (costOfMango > costOfApple) {
    console.log("Mango is more expensive");
} else {
    console.log("Apple is more expensive");    
}

//3.20
let maths = 100;
let english = 15;
let computerSkills = 60;
if (maths > 50 && english > 50 && computerSkills > 50) {
    console.log('Congratulations! You have passed the TechKaro Admission Test!');
} else if ((maths > 50 && english > 50) || computerSkills > 80) {
    console.log("You have also qualified!");
} else {
    console.log("Sorry! Please try again next year!");    
}

//3.21
let math$ = 100;
let english$ = 15;
let computerSkills$ = 60;
if (
    (math$ > 50 && english$ > 50 && computerSkills$ > 50) || 
    (math$ === 100 || english$ === 100 || computerSkills$ === 100)
) {
    console.log('Congratulations! You have passed the TechKaro Admission Test!');
} else if ((math$ > 50 && english$ > 50) || computerSkills$ > 80) {
    console.log("You have also qualified!");
} else {
    console.log("Sorry! Please try again next year!");    
}