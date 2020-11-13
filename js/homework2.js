'use strict';

// Задание 1
let sum = 7000;

if (sum < 1000) {
    console.log('Сумма до 1000 - скидка не предусмотрена');
    console.log(`Сумма покупок ${sum}.`);
} else if ((sum => 1000) && (sum < 2000)) {
    console.log('Сумма от 1000 до 2000 - скидка 5%');
    let discount = 5;
    let result = sum-(sum / 100 * discount);
    console.log(`Сумма покупок ${sum}. Сумма со скидкой ${result}`);
} else if ((sum => 2000) && (sum < 3000)) {
    console.log('Сумма от 1000 до 2000 - скидка 10%');
    let discount = 10;
    let result = sum-(sum / 100 * discount);
    console.log(`Сумма покупок ${sum}. Сумма со скидкой ${result}`);
} else if (sum > 3000) {
    console.log('Cумма от 3000 - скидка 10% + подарок');
    let discount = 10;
    let result = sum-(sum / 100 * discount);
    console.log(`Сумма покупок ${sum}. Сумма со скидкой ${result}`);
}

// Задание 2

let lang = 'javascript';
let salary = 90000;

if (lang === 'javascript') {
    if (salary > 100000) {
        let result = 'Преглашаем вас на собеседование.';
        console.log(result);
    } else {
        let result = 'Мы перезвоним Вам в ближайшее время.';
        console.log(result);
    }
}

// Задание 3

let month = 'декабрь';
let season;
switch (month) {
    case 'декабрь':
    case 'январь':
    case 'февраль':
        season = 'зима'
        break;
    case 'март':
    case 'апрель':
    case 'май':
        season = 'весна'
        break;
    case 'июнь':
    case 'июль':
    case 'август':
        season = 'лето'
        break;
    case 'сентябрь':
    case 'октябрь':
    case 'ноябрь':
        season = 'осень'
        break;
}

console.log(season);