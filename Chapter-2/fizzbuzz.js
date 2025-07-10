result = 0
for (count = 0; count < 100; count = count + 1) {
    result = result + 1;
    if (result % 3 == 0 && result % 5 == 0) {
        console.log("FizzBuzz");
    } else if (result % 5 == 0) {
        console.log("Buzz");
    } else if (result % 3 == 0) {
        console.log("Fizz");
    } else {
        console.log(result);        
    }
}
// my solution 

for (let n = 1; n <= 100; n++) {
    let output = "";
    if (n % 3 == 0) output += "Fizz";
    if (n % 5 == 0) output += "Buzz";
    console.log(output || n);
}
// book solution
