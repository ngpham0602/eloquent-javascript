function sum(list) {
    let total = 0;
    for (let number of list) {
        total += number;
    }
    return total;
}

function range(start, end, step) {
    let list = []
    if (step == null) {
        step = 1;
    }
    if (step < 0) {
        while (start >= end) {
            list.push(start);
            start = start + step;
        }        
    } else if (step > 0) {
        while (start <= end) {
            list.push(start);
            start = start + step;
        }      
    }
    return list;
}
console.log(range(1, 10));
console.log(sum(range(1, 10)));