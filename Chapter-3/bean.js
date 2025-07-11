function countBs(line) {
    let string = String(line);
    let count = 0;
    for (i in string) {
        if (string[i] == "B") {
            count++;
        }
    }
    return count;
}

function countChar(line, word) {
    let string2 = String(line);
    let count2 = 0;
    for (k in string2) {
        if (string2[k] == word) {
            count2++;
        }
    }
    return count2;
}

console.log(countBs("BOB"));

console.log(countChar("kakkerlak", "k"));