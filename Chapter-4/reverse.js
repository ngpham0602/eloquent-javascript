function reverseArray(n) {
    let reversed = [];
    for (let i = n.length - 1; i >= 0; i--) {
        reversed.push(n[i]);
    }
    return reversed;
}

function reverseArrayInPlace(n) {
    for (let i = 0; i < n.length / 2; i++) {
        let temp = n[i];
        n[i] = n[n.length - 1 - i];
        n[n.length - 1 - i] = temp;
    }
}

let myArray = ["A", "B", "C"];
console.log(reverseArray(myArray));
// → ["C", "B", "A"];
console.log(myArray);
// → ["A", "B", "C"];
let arrayValue = [1, 2, 3, 4, 5];
reverseArrayInPlace(arrayValue);
console.log(arrayValue);
// → [5, 4, 3, 2, 1]