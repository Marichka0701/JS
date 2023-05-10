// --створити масив з:
//     - з 5 числових значень
// - та вивести його в консоль
const arr1 = [1, 2, 3, 4, 5];
for (let i = 0; i < arr1.length; i++) {
    console.log(arr1[i]);
}
console.log('--------------------------------------');


// - з 5 стічкових значень
// - та вивести його в консоль
const arr2 = ['a', 'b', 'c', 'd', 'e'];
for (let i = 0; i < arr2.length; i++) {
    console.log(arr2[i]);
}
console.log('--------------------------------------');


// - з 5 значень стрічкового, числового та булевого типу
// - та вивести його в консоль
const arr3 = ['a', 1, true, 'd', false];
for (let i = 0; i < arr3.length; i++) {
    console.log(arr3[i]);
}
console.log('--------------------------------------');


// -- Створити пустий масив. Наповнити його будь-якими значеннями звертаючись до конкретного індексу. Вивести в консоль
let arr4 = [ ];
let num = 1;
for (let i = 0; i < 5; i++) {
    arr4[i] = num++;
    console.log(arr4[i]);
}
console.log('--------------------------------------');


// - є масив [2,17,13,6,22,31,45,66,100,-18] :
// 1. перебрати його циклом while
let arr5 = [2,17,13,6,22,31,45,66,100,-18];
let i = 0;
while (i < arr5.length)
{
    console.log(arr5[i]);
    i++;
}
console.log('--------------------------------------');


//     2. перебрати його циклом for
for (let j = 0; j < arr5.length; j++) {
    console.log(arr5[j]);
}
console.log('--------------------------------------');


//     3. перебрати циклом while та вивести  числа тільки з непарним індексом
i = 0;
while (i < arr5.length)
{
    if (i%2 === 1) {
        console.log(arr5[i]);
    }
    i++;
}
console.log('--------------------------------------');


// 4. перебрати циклом for та вивести  числа тільки з непарним індексом
for (let j = 0; j < arr5.length; j++) {
    if (j % 2 === 1) {
        console.log(arr5[j]);
    }
}
console.log('--------------------------------------');


// 5. перебрати циклом while та вивести  числа тільки парні  значення
i = 0;
while (i < arr5.length)
{
    if (arr5[i] % 2 === 0)
    {
        console.log(arr5[i]);
    }
    i++;
}
console.log('--------------------------------------');


// 6. перебрати циклом for та вивести  числа тільки парні  значення
for (let j = 0; j < arr5.length; j++) {
    if (arr5[j] % 2 === 0) {
        console.log(arr5[j]);
    }
}
console.log('--------------------------------------');


// 7. замінити кожне число кратне 3 на слово "okten"
let replaceArr = [2,17,13,6,22,31,45,66,100,-18];
for (let j = 0; j < replaceArr.length; j++) {
    if (replaceArr[j] % 3 === 0) {
        replaceArr[j] = 'okten';
        console.log(replaceArr[j]);
    }
    else
        console.log(replaceArr[j]);
}
console.log('--------------------------------------');


// 8. вивести масив в зворотньому порядку.
for (let j = arr5.length - 1; j >= 0; j--) {
    console.log(arr5[j]);
}
console.log('--------------------------------------');


// 9. всі попередні завдання (окрім 8), але в зворотньому циклі (с заду на перед)
for (let i = arr1.length - 1; i >= 0; i--) {
    console.log(arr1[i]);
}
console.log('--------------------------------------');



for (let i = arr2.length - 1; i >=0; i--) {
    console.log(arr2[i]);
}
console.log('--------------------------------------');



for (let i = arr3.length - 1; i >= 0; i--) {
    console.log(arr3[i]);
}
console.log('--------------------------------------');



num = 5;
for (let i = arr4.length - 1; i >= 0; i--) {
    arr4[i] = num--;
    console.log(arr4[i]);
}
console.log('--------------------------------------');



i = arr5.length - 1;
while (i >=0)
{
    console.log(arr5[i]);
    i--;
}
console.log('--------------------------------------');



for (let j = arr5.length - 1; j >= 0; j--) {
    console.log(arr5[j]);
}
console.log('--------------------------------------');



i= arr5.length - 1;
while (i >= 0)
{
    if (i%2 === 1) {
        console.log(arr5[i]);
    }
    i--;
}
console.log('--------------------------------------');



for (let j = arr5.length - 1; j >= 0; j--) {
    if (j % 2 === 1) {
        console.log(arr5[j]);
    }
}
console.log('--------------------------------------');



for (let j = arr5.length - 1; j >= 0 ; j--) {
    if (arr5[j] % 2 === 0) {
        console.log(arr5[j]);
    }
}
console.log('--------------------------------------');



for (let j = replaceArr.length - 1; j >= 0; j--) {
    if (replaceArr[j] % 3 === 0) {
        replaceArr[j] = 'okten';
        console.log(replaceArr[j]);
    }
    else
        console.log(replaceArr[j]);
}
console.log('--------------------------------------');


// - Створити масив з 10 числових елементів. Вивести в консоль всі його елементи в циклі.
let arr6 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let j = 0; j < arr6.length; j++) {
    console.log(arr6[j]);
}
console.log('--------------------------------------');


// - Створити масив з 10 строкрових елементів. Вивести в консоль всі його елементи в циклі.
let arr7 = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'x', 'z', 'y'];
for (let j = 0; j < arr7.length; j++) {
    console.log(arr7[j]);
}
console.log('--------------------------------------');


// - Створити масив з 10 елементів будь-якого типу. Вивести в консоль всі його елементи в циклі.
let arr8 = ['a', false, null, undefined, true, 'f', 'g', 1, 'z', -3];
for (let j = 0; j < arr8.length; j++) {
    console.log(arr8[j]);
}
console.log('--------------------------------------');



// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки булеві елементи
let arr9 = ['a', false, 1, 'd', true, 'f', 'g', 1, 'z', -3];
for (let j = 0; j < arr9.length; j++) {
    if (typeof(arr9[j]) === 'boolean') {
        console.log(arr9[j]);
    }
}
console.log('--------------------------------------');


// - Створити масив з 10 елементів числового, стірчкового і булевого типу. За допомогою if та typeof вивести тільки числові елементи
for (let j = 0; j < arr9.length; j++) {
    if (typeof(arr9[j]) === 'number') {
        console.log(arr9[j]);
    }
}
console.log('--------------------------------------');


// - Створити масив з 10 елементів числового, стрічкового і булевого типу. За допомогою if та typeof вивести тільки рядкові елементи
for (let j = 0; j < arr9.length; j++) {
    if (typeof(arr9[j]) === 'string') {
        console.log(arr9[j]);
    }
}
console.log('--------------------------------------');


// - Створити порожній масив. Наповнити його 10 елементами (різними за типами) через звернення до конкретних індексів. Вивести в консоль всі його елементи в циклі.
let arr10 = [];
arr10[0] = 'okten';
arr10[1] = 'web';
arr10[2] = null;
arr10[3] = 'okten';
arr10[4] = undefined;
arr10[5] = 1;
arr10[6] = true;
arr10[7] = 'js';
arr10[8] = -10;
arr10[9] = 'web';



// - Створити цикл for на 10  ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 10; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
document.write(`<div>--------------------------------------</div>`);
console.log('--------------------------------------');


// - Створити цикл for на 100 ітерацій з кроком 1. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j++) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
document.write(`<div>--------------------------------------</div>`);
console.log('--------------------------------------');


// - Створити цикл for на 100 ітерацій з кроком 2. Вивести поточний номер кроку через console.log та document.write
for (let j = 0; j < 100; j+=2) {
    console.log(j);
    document.write(`<div>${j}</div>`);
}
document.write(`<div>--------------------------------------</div>`);
console.log('--------------------------------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки парні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2 ===0) {
        console.log(j);
        document.write(`<div>${j}</div>`);
    }
}
document.write(`<div>--------------------------------------</div>`);
console.log('--------------------------------------');

// - Створити цикл for на 100 ітерацій. Вивести тільки непарні кроки. через console.log + document.write
for (let j = 0; j < 100; j++) {
    if (j%2 !==0) {
        console.log(j);
        document.write(`<div>${j}</div>`);
    }
}
document.write(`<div>--------------------------------------</div>`);
console.log('--------------------------------------');

//
// стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.
// - знайти книжку/ки з найбільшою кількістю жанрів
// - знайти книжку/ки з найдовшою назвою
// - знайти книжку/ки які писали 2 автори
// - знайти книжку/ки які писав 1 автор
const  books = [
    {
        title: 'A COUNTESS BELOW STAIRS',
        pageCount: 1000,
        genre: ['Romance', 'Comedy'],
        authors: [{name: 'Serg', age: 18}, {name: 'Sasha', age: 18}]
    },
    {
        title: 'A PRISONER OF BIRTH',
        pageCount: 219,
        genre: ['Romance', 'Comedy', 'Mystery', 'Smth', 'Smth'],
        authors: [{name: 'Abdur', age: 43}]
    },
    {
        title: 'A SHORT STAY IN HELL',
        pageCount: 300,
        genre: ['Science fiction'],
        authors: [{name: 'King', age: 25}]
    },
    {
        title: 'Some book',
        pageCount: 400,
        genre: ['Romance', 'Comedy', 'Mystery', 'Smth'],
        authors: [{name: 'King', age: 25}, {name: 'Royal', age: 42}]
    },
]

let maxCountPage = 0;
let indexCountPage = 0;

let maxCountGenre = 0;
let indexCountGenre = 0;

let maxCountTitle = 0;
let indexCountTitle = 0;

for (let j = 0; j < books.length; j++) {
    // 1
    if (books[j].pageCount >= maxCountPage) {
        maxCountPage = books[j].pageCount;
        indexCountPage = j;
    }
    // 2
    if (books[j].genre.length >= maxCountGenre) {
        maxCountGenre= books[j].genre.length;
        indexCountGenre = j;
    }
    // 3
    if (books[j].title.length >= maxCountTitle) {
        maxCountTitle= books[j].title.length;
        indexCountTitle = j;
    }
    // 4
    if (books[j].authors.length === 2) {
        console.log(`books written by 2 authors: ${books[j].title}`);
    }
    // 5
    if (books[j].authors.length === 1) {
        console.log(`books written by 1 authors: ${books[j].title}`);
    }

}
console.log(books[indexCountPage].title);
console.log(books[indexCountGenre].title);
console.log(books[indexCountTitle].title);

