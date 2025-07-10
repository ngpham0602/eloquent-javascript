let result = ""

for (let counter = 0; counter < 7; counter = counter + 1) {
    result += "#";
    console.log(result)
}
// my solution

for (let line = "#"; line.length < 8; line += "#")
    console.log(line);
// book solution
