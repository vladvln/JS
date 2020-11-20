'use strict'
// Задание 1

let str1 = "дом домик домой одомашненный";
let str2 = "дом";
let count = 0;

let indexOf = str1.indexOf(str2);
while (indexOf > -1) {
    count++;
    indexOf = str1.indexOf(str2, (indexOf + 1));
}
console.log(count);

// Задание 2

str1 = "а роза упала на лапу Азора";
str2 = str1.split(' ').reverse().join('').toLowerCase();
let result = str2 === str2.split(' ').reverse().join('').toLowerCase() ? 'Полиндром' : 'Не полиндром';
console.log(result);

// Задание 3

str1 = "hELLo";
str2 = str1.slice(0, 1).toUpperCase() + str1.slice(1).toLowerCase();
console.log(str2);

// Задание 4

str1 = "в предложении все слова разной длины";
let arrFromText = str1.split(' ');
let word = "";
for (let elem of arrFromText) {
    if (elem.length > word.length) {
        word = elem;
    }
}
console.log(word);