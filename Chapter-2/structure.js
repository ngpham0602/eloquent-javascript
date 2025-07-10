let mood = "light";
console.log(mood);
// light

mood = "dark";
console.log(mood);
// dark


let luigisDebt = 140;
luigisDebt = luigisDebt - 35;
console.log(luigisDebt);
// 105

let one = 1, two = 2;
console.log(one + two);
// 3

var name = "Ayda";
const greeting = "Hello "
console.log(greeting + name)
// Helllo Ayda


let x = 30 
console.log("The value of x is", x)
// the value of x is 30 

console.log(Math.max(2, 4))
// 4

console.log(Math.min(2, 4) + 100)
//102

let theNumber = Number(prompt("Pick a number: "))
if (!Number.isNaN(theNumber)) {
    console.log("Your number is the square root of " + 
        theNumber * theNumber
    )
} else {
    console.log("Hey, why didn't you give me a number?")
}

let num = Number(prompt("Pick a number"))

if (num < 10) {
    console.log("Small")
} else if (num < 100) {
    console.log("Medium")
} else {
    console.log("Large")
}


let number = 0
while (number <= 12) {
    console.log(number);
    number = number + 2;
}

let result = 1;
let counter = 0;
while (counter < 10) {
    result = result * 2;
    counter = counter + 1;
}
console.log(result)
// 1024

let yourName;
do {
    yourName = prompt("Who are you?")
} while (!yourName);
console.log("Hello " + yourName)

if (false != true) {
    console.log("That makes sense")
    if (1 < 2) {
        console.log("No suprise there.")
    }
}

for (let number = 0; number <= 12; number = number + 2) {
    console.log(number);
}
// 0
// 2

for (let counter = 0; counter < 10; counter = counter + 1) {
    result = result * 2;
}
console.log(result)

for (let current = 20; ; current = current + 1) {
    if (current & 7 == 0) {
        console.log(current);
        break;
    }
}
// 21

switch (promp("What's the weather like?")) {
    case "rainy":
        console.log("Remember to bring an umbrella");
        break;
    case "sunny":
        console.log("Dress lightly")
    case "cloudy":
        console.log("Go outside");
        break;
    default:
        console.log("Unknown weather type!");
        break;
}

let accountBalance = calculateBalance(account);
// It's a green hollow where a river sings
accountBalance.adjust();
// Madly catching white tatters in the grass
let report = new Report();
// Where the sun on the proud mountain rings
addToReport(accountBalance, report);
// It's a little valley, foaming like light in a glass
