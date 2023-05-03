// - Створити масив, наповнити його 10 елементами будь-якого типу, вивести кожен елемент в консоль
let numbers = [1, 2, 'var', 4, 'Marichka', 6, 'owu', 8, 9, 10];
console.log(numbers[0]);
console.log(numbers[1]);
console.log(numbers[2]);
console.log(numbers[3]);
console.log(numbers[4]);
console.log(numbers[5]);
console.log(numbers[6]);
console.log(numbers[7]);
console.log(numbers[8]);
console.log(numbers[9]);

//- Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre.
let book1 = {
    title: 'A COUNTESS BELOW STAIRS',
    pageCount: 102,
    genre: 'Romance'
}
let book2 = {
    title: 'A PRISONER OF BIRTH',
    pageCount: 219,
    genre: 'Mystery'
}
let book3 = {
    title: 'A SHORT STAY IN HELL',
    pageCount: 102,
    genre: 'Science fiction'
}

// - Створити 3 об'єкти які описують книги. Поля об'єкту : title ,pageCount, genre, authors. Поле "автори" - являється  масивом. Кожен автор має поля name та age.
let book4 = {
    title: 'A COUNTESS BELOW STAIRS',
    pageCount: 102,
    genre: 'Romance',
    authors: [{name: 'Serg', age: 18}]
}
let book5 = {
    title: 'A PRISONER OF BIRTH',
    pageCount: 219,
    genre: 'Mystery',
    authors: [{name: 'Abdur', age: 43}]
}
let book6 = {
    title: 'A SHORT STAY IN HELL',
    pageCount: 102,
    genre: 'Science fiction',
    authors: [{name: 'King', age: 25}]
}

//- Створити масив з 10 об'єктами які описують сутніть "користувач". Поля: name, username,password. Вивести в консоль пароль кожного користувача
let users = [
    {
        name: 'Marichka',
        username: 'user1',
        password: 'marichka0701'
    },
    {
        name: 'Yana',
        username: 'user2',
        password: '20052005'
    },
    {
        name: 'Nastia',
        username: 'user3',
        password: '678901'
    },
    {
        name: 'Oksana',
        username: 'user4',
        password: '234567'
    },
    {
        name: 'Vasia',
        username: 'user5',
        password: '123456'
    },
    {
        name: 'Ivan',
        username: 'user6',
        password: '123123'
    },
    {
        name: 'Lilia',
        username: 'user7',
        password: '32551'
    },
    {
        name: 'Kapets',
        username: 'user8',
        password: '09742'
    },
    {
        name: 'Sasha',
        username: 'user9',
        password: 'haha'
    },
    {
        name: 'Nazar',
        username: 'user10',
        password: '123321'
    }
]
console.log(users[0].password);
console.log(users[1].password);
console.log(users[2].password);
console.log(users[3].password);
console.log(users[4].password);
console.log(users[5].password);
console.log(users[6].password);
console.log(users[7].password);
console.log(users[8].password);
console.log(users[9].password);

// Є змінна х, якій ви надаєте довільне числове значення. Якщо змінна x не дорівнює нулю, виведіть 'Вірно', інакше виведіть 'Невірно'. Перевірте  скрипт при a, що дорівнює 1, 0, -3
let x = 0;
if (x !== 0)
    console.log("Правильно");
else
    console.log("Неправильно");

// Дано змінну time яка рівна числу від 0 до 59. Потрібно написати код, який перевірить, до якої четверті години попадає число
// (в першу, другу, третю или четверту частину години).
let time = +prompt('Enter time (0 to 59): ');
if (time >= 0 && time < 15) {
    console.log('перша четверть години');
} else if (time >= 15 && time < 30) {
    console.log('друга четверть години');
} else if (time >= 30 && time < 45) {
    console.log('третя четверть години');
} else if (time >= 45 && time <= 60) {
    console.log('четверта четверть години');
}

// - У змінній day дано якесь число від 1 до 31. Потрібно визначити, у яку половину(декаду) місяця потрапляє це число (у першу, другу чи третю).
let day = prompt('Enter day(0 to 31): ');
if (day >= 0 && day < 10) {
    console.log('перша половина місяця');
} else if (day >= 10 && day < 20) {
    console.log('друга половина місяця');
} else if (day >= 20 && day <= 31) {
    console.log('третя половина місяця');
}

//- Скласти розклад на тиждень за домопоги switch. Користувач вводить порядковий номер дня тижня і на екрані відображається інфа що заплановано на цей день (можна замість плану на день, назву дня англійською).
let schedule = +prompt('Enter a number for your schedule(1 to 7): ')
switch (schedule) {
    case 1:
        console.log('Monday');
        break;
    case 2:
        console.log('Tuesday');
        break;
    case 3:
        console.log('Wednesday');
        break;
    case 4:
        console.log('Thursday');
        break;
    case 5:
        console.log('Friday');
        break;
    case 6:
        console.log('Saturday');
        break;
    case 7:
        console.log('Sunday');
        break;
}

//- Користувач вводить або має два числа.
// Потрібно знайти та вивести максимальне число з тих двох .
// Також потрібно врахувати коли введені рівні числа.

let number1 = 5;
let number2 = -3;
let max;

if (number1 !== number2) {
    if (number1 > number2)
        max = number1;
    else
        max = number2;
    console.log(`Max is: ${max}`);
} else
    console.log(`${number1} and ${number2} are equal`);

// - є змінна хxx, яка може прийняти будь-яке значення (стрінг, число, undefined, null  і тд включно). Напишіть код який,
// за допомоги  оператора || буде присвоювати змінній х значення "default"  якщо значення змінної х являється falsy (хибноподібні, тобто приводиться до false)
let xxx = 2;
if (!!xxx === false || +xxx === 0 || xxx === false)
    console.log(xxx='default');


// - з файлу arrays.js (лежить в папці 2023 plan ) взяти масив coursesAndDurationArray. За допомоги іф перевірити кожен його елемент на тривалість навчання. У випадку якщо тривалість довша за 5 місяців вивести в консоль "Супер".
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];

if (coursesAndDurationArray[0].monthDuration >= 5)
    console.log("Супер");
if (coursesAndDurationArray[1].monthDuration >= 5)
    console.log("Супер");
if (coursesAndDurationArray[2].monthDuration >= 5)
    console.log("Супер");
if (coursesAndDurationArray[3].monthDuration >= 5)
    console.log("Супер");
if (coursesAndDurationArray[4].monthDuration >= 5)
    console.log("Супер");
if (coursesAndDurationArray[5].monthDuration >= 5)
    console.log("Супер");
