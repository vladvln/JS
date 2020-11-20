'use strict'

// Задание 1

function addEnd(count) {
    let str = 'товар';
    if (count % 100 > 10 && count % 100 < 15) return `${count} ${str + "ов"}`;
    if (count % 10 > 1 && count % 10 < 5) return `${count} ${str + "а"}`;
    if (count % 10 === 1) return `${count} ${str}`;
    return `${count} ${str + "ов"}`
}
let result = addEnd(14);
console.log(result);

// Задание 2

function range(start, end, step = 1) {
    let arr = [];
    for (let i = start; i < end; i += step) {
        arr.push(i);
    }
    return arr; 
}

result = range(2, 12, 2);
console.log(result);

// Задание 3

function getRecursion(num) {
    if (num === 0) return 0;
    return (num % 10) + getRecursion((num - num % 10) / 10);
}

result = getRecursion(9897);
console.log(result);