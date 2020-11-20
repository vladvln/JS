'use strict'
// Циклы
// Задание 1
let n = 1;
 for (let i = 0; i <= 20; i++) {
    n *= 2;
    console.log(n);
 }

//  Задание 2
let num = 90;
while (num >= 0) {
    console.log(num);
    num -= 5;
}

// Задание 3
let detergent = 3;
let plate = 10;
while ((detergent > 0) && (plate > 0)) {
    detergent -= 0.5;
    plate--;
}
if (detergent === 0) {
    console.log(`Количество оставшихся тарелок ${plate}`);
} else if (plate === 0){
    console.log(`Количество оставшегося средства ${detergent}`);
}

// Массивы
// Задание 1
let arr = [];
for (let i = 0; i < 10; i++) {
    arr[i] = Math.floor(Math.random()*100);    
}

console.log(arr);
let randomIndex = Math.floor(Math.random()*10);
console.log(`Индекс ${randomIndex}, элемент ${arr[randomIndex]}`);

let sum = 0, aveSum = 0;
for (let i = 0;i < arr.length; i++) {
    sum += arr[i];
    aveSum = sum / arr.length;
}
console.log(`Среднее арифметическое элементов: ${aveSum}`);

// Задание 2
let array = [3, 5, 4, 6, 8, 7, 9, 1];
console.log(array);
for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++)
    if ((array[i] + array[j]) === 7) {
        console.log(`Индекс: ${i} - элемент: ${array[i]} и индекс: ${j} - элемент: ${array[j]}`);
    }
}

// Задание 3
let newSum = 0;
let newArr = [
    [23, 56, 78, 12, -900],
    [0, 0, 67, -3, 621],
    [89, 67, 12],
    [23, 56, 78, 12, -900, 89, 33, 21]
 ];
 console.log(newArr);
 for (let i = 0; i < newArr.length; i++) {
     for (let j = 0; j < newArr[i].length; j++) {
         newArr[i][j] += 10;
         newSum += newArr[i][j];
     }
 }
 console.log(`Сумма элементов: ${newSum}`);

//  Доп. задание 

alert('Загадайте число от 1 до 100');
let min  = 1;
let max = 100;
let number = Math.floor(Math.random()*max) + min;
let result = prompt(`Это число равно ${number}?(ДА, НЕТ, ВЫХОД)`);
while (result !== 'ВЫХОД') {
    if (result === 'ДА') {
        alert(`Ура. Ваше число ${number}`);
    } else if (result === 'НЕТ') {
        while (result === 'ДА') {
            let check1 = prompt(`Число больше?`);
            let check2 = prompt(`Число меньше?`);
            if (check1 === 'ДА') {
                min = number;
                newNumber = Math.floor(Math.random()*max) + min;
            } else if (check2 === 'ДА') {
                
            }
        }
    }


}
