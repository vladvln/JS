'use strict'

let goods = {
    piano: {
        title: "Пианино",
        price: 3000,
        count: 25
    },
    guitar: {
        title: "Гитара",
        price: 1200,
        count: 40
    },
    drum: {
        title: "Барабаны",
        price: 2700,
        count: 12
    },
    flute: {
        title: "Флейта",
        price: 900,
        count: 50
    },
    harp: {
        title: "Арфа",
        price: 3400,
        count: 5
    }
};

// Задание 1
let items = {};

function getGoodsByPrice(from, to, obj) {
    if (!Number.isInteger(from) || !Number.isInteger(to)) return;
    for (let elem in obj) {
        if ((obj[elem].price > from) && (obj[elem].price < to)) {
            items[elem] = obj[elem];
        }
    }
    return items;
}

console.log(getGoodsByPrice(1000, 3000, goods));

// Задание 2

function getByTitle(title, countToCart, obj) {
    for (let elem in obj) {
        if (title.toLowerCase() === obj[elem].title.toLowerCase()) {
            if (obj[elem].count > countToCart) {
                obj[elem].count -= countToCart;
                console.log(`Товара ${obj[elem].title} достаточно на складе`);
            } else  {
                console.log(`Товара ${obj[elem].title} не достаточно на складе`);
            }
            return;
        }
    }
}

getByTitle("флейта", 2, goods);

////////////////////

let books = [
    { author: 'Пушкин', title: 'Пир во время чумы', pageCount: 5},
    { author: 'Гоголь', title: 'Мертвые души', pageCount: 470},
    { author: 'Лермонтов', title: 'Тамань', pageCount: 190},
    { author: 'Гончаров', title: 'Обломов', pageCount: 610},
    { author: 'Лермонтов', title: 'Герой Нашего Времени', pageCount: 191},
    { author: 'Пушкин', title: 'Руслан и Людмила', pageCount: 50},
    { author: 'Лермонтов', title: 'Бородино', pageCount: 2},
];

// Задание 3

function getBooks(author, arr) {
    let newArr = arr.filter(book => book.author.toLowerCase() === author.toLowerCase());
    return newArr;
}

console.log(getBooks("Пушкин", books));

// // Задание 4

// function sortByParam(propertyName, arr) {
//     let compareNumbers = (a, b) => a[propertyName] - b[propertyName];
//     let compareString = (a, b) => a[propertyName].localeCompare(b[propertyName]);
//     if (propertyName === "pageCount") return arr.sort(compareNumbers);
//     return arr.sort(compareString);
// }

// console.log(sortByParam("title", books));
// console.log(sortByParam("pageCount", books));