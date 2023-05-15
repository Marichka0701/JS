// 1. Створити пустий масив та :
//     a. заповнити його 50 парними числами за допомоги циклу.
let number1 = 1;
let arr1 =[]
for (let i = 0; i < 50; i++) {
    arr1[i] = number1 * 2;
    number1++;
}
for (const arr1Element of arr1) {
    console.log(arr1Element);
}
console.log('--------------------------------------');


//     b. заповнити його 50 непарними числами за допомоги циклу.
let number2 = 1;
let arr2 =[]
for (let i = 0; i < 50; i++) {
    arr2[i] = number2;
    number2+=2;
}
for (const arr2Element of arr2) {
    console.log(arr2Element);
}
console.log('--------------------------------------');


//     c. Заповнити масив 20ма рандомними числами. (Google: Generate random number JS)
let arr3 = [];
for (let i = 0; i < 20; i++) {
    arr3[i] = Math.floor(Math.random() * 30 );
}
for (const arr3Element of arr3) {
    console.log(arr3Element);
}
console.log('--------------------------------------');


// d. Заповнити масив 20ма рандомними чисалами в діапазоні від 8 до 732 (Google: Generate random number JS)
let arr4 = [];
for (let i = 0; i < 20; i++) {
    arr4[i] = Math.floor(Math.random() * (732 - 8) + 8);
}
for (const arr4Element of arr4) {
    console.log(arr4Element);
}
console.log('--------------------------------------');


// 2. Вивести за допомогою console.log кожен третій елемен
for (let i = 0; i < arr1.length; i+=3) {
    console.log(arr1[i]);
}
console.log('--------------------------------------');
for (let i = 0; i < arr2.length; i+=3) {
    console.log(arr2[i]);
}
console.log('--------------------------------------');
for (let i = 0; i < arr3.length; i+=3) {
    console.log(arr3[i]);
}
console.log('--------------------------------------');
for (let i = 0; i < arr4.length; i+=3) {
    console.log(arr4[i]);
}
console.log('--------------------------------------');


// 3. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним.
for (let i = 0; i < arr1.length; i+=3) {
    if (arr1[i] % 2 ===0) {
        console.log(arr1[i]);
    }
}
console.log('--------------------------------------');
for (let i = 0; i < arr2.length; i+=3) {
    if (arr2[i] % 2 ===0) {
        console.log(arr2[i]);
    }
}
console.log('--------------------------------------');
for (let i = 0; i < arr3.length; i+=3) {
    if (arr3[i] % 2 ===0) {
        console.log(arr3[i]);
    }
}
console.log('--------------------------------------');
for (let i = 0; i < arr4.length; i+=3) {
    if (arr4[i] % 2 ===0) {
        console.log(arr4[i]);
    }
}
console.log('--------------------------------------');
// 4. Вивести за допомогою console.log кожен третій елемен тільки якщо цей елемент є парним та записати їх в новий масив
let arr5 = [];
let j = 0;
for (let i = 0; i < arr1.length; i+=3) {
    if (arr1[i] % 2 ===0) {
        arr5[j++] = arr1[i];
    }
}
for (const arr5Element of arr5) {
    console.log(arr5Element);
}
console.log('--------------------------------------');


// 5. Вивести кожен елемент масиву, сусід справа якого є парним
for (let i = 0; i < arr4.length; i++) {
    if (i !== arr4.length - 1) {
        if (arr4[i + 1] % 2 === 0) {
            console.log(arr4[i]);
        }
    }
}
console.log('--------------------------------------');


// EXAMPLE: [ 1, 2, 3, 5, 7, 9, 56, 8, 67 ] -> Має бути виведено 1, 9, 56
// 6. Є масив з числами [100,250,50,168,120,345,188], Які характеризують вартість окремої покупки. Обрахувати середній чек.
let numbers = [100,250,50,168,120,345,188];
let average;
let sum = 0;
for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
}
console.log((average = sum / numbers.length));
console.log('--------------------------------------');


// 7. Створити масив з рандомними значеннями, помножити всі його елементи на 5 та перемістити їх в інший масив.
let arr6 = [];
for (let i = 0; i < 10; i++) {
    arr6[i] = Math.floor(Math.random() * 20);
    console.log(arr6[i]);
}
console.log('--------------------------------------');
let arr7 = []
for (let i = 0; i < arr6.length; i++) {
    arr7[i] = arr6[i] * 5;
    console.log(arr7[i]);
}
console.log('--------------------------------------');


// 8. Створити масив з будь якими значеннями (стрінги, числа, і тд...). пройтись по ньому, і якщо елемент є числом - додати його в інший масив.
let arr8 = ['okten', 1, false, true, 2, 8, 'haha', undefined, 'js'];
let arr9 = [];
let i = 0;
for (const arr8Element of arr8) {
    if (typeof (arr8Element) === 'number') {
        arr9[i++] = arr8Element;
    }
}
for (const arr9Element of arr9) {
    console.log(arr9Element);
}
console.log('--------------------------------------');
// - Дано 2 масиви з рівною кількістю об'єктів.
// Масиви:
//     let usersWithId = [
//         {id: 1, name: 'vasya', age: 31, status: false},
//         {id: 2, name: 'petya', age: 30, status: true},
//         {id: 3, name: 'kolya', age: 29, status: true},
//         {id: 4, name: 'olya', age: 28, status: false}
//     ];
//
// let citiesWithId = [
//     {user_id: 3, country: 'USA', city: 'Portland'},
//     {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
//     {user_id: 2, country: 'Poland', city: 'Krakow'},
//     {user_id: 4, country: 'USA', city: 'Miami'}
// ];
//
// З'єднати в один об'єкт користувача та місто з відповідними "id" та "user_id" .
//     Записати цей об'єкт в новий масив
// Example:
//     let usersWithCities = [
//         {
//             id: 1, // <===
//             name: 'vasya',
//             age: 31,
//             status: false,
//             address: {
//                 user_id: 1, // <===
//                 country: 'Ukraine',
//                 city: 'Ternopil'
//             }
//         },
//         // TO BE CONTINUED .....
//     ]


let usersWithId = [
    {id: 1, name: 'vasya', age: 31, status: false},
    {id: 2, name: 'petya', age: 30, status: true},
    {id: 3, name: 'kolya', age: 29, status: true},
    {id: 4, name: 'olya', age: 28, status: false}
];

let citiesWithId = [
    {user_id: 3, country: 'USA', city: 'Portland'},
    {user_id: 1, country: 'Ukraine', city: 'Ternopil'},
    {user_id: 2, country: 'Poland', city: 'Krakow'},
    {user_id: 4, country: 'USA', city: 'Miami'}
];

let newArr = [];
usersWithId.forEach(user => {
    const city = citiesWithId.find(city => city.user_id === user.id);
    if (city) {
        const newUser = {
            id: user.id,
            name: user.name,
            age: user.age,
            status: user.status,
            address: {
                user_id: city.user_id,
                country: city.country,
                city: city.city,
            },
        };
        newArr.push(newUser);
    }
});
console.log(newArr);
console.log('--------------------------------------');


// - Взяти масив з 10 чисел або створити його. Вивести в консоль тільки ті елементи, значення яких є парними.
let arr10 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
for (let i = 0; i < arr10.length; i++) {
    if (arr10[i] % 2 === 0) {
        console.log(arr10[i]);
    }
}
console.log('--------------------------------------');


// - Взяти масив з 10 чисел або створити його. Створити 2й порожній масив. За допомогою будь-якого циклу скопіювати значення одного масиву в інший.
let arr11 = [];
for (let i = 0; i < arr10.length; i++) {
    arr11[i] = arr10[i];
    console.log(arr11[i]);
}
console.log('--------------------------------------');


//
// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for зібрати всі букви в слово.
let letters1 = [ 'a', 'b', 'c'];
let word = '';
for (let k = 0; k < letters1.length; k++) {
    word += letters1[k];
}
console.log(word);
console.log('--------------------------------------');


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу while зібрати всі букви в слово.
let index = 0;
word = '';
while (index < letters1.length) {
    word += letters1[index];
    index++;
}
console.log(word);
console.log('--------------------------------------');


// - Дано масив: [ 'a', 'b', 'c'] . За допомогою циклу for of зібрати всі букви в слово.
word = '';
for (const letter of letters1) {
    word += letter;
}
console.log(word);
console.log('--------------------------------------');

