
// - створити функцію яка обчислює та повертає площу прямокутника зі сторонами а і б
let squareRectangle = (a, b) => a * b;
console.log(squareRectangle(2, 4));


// - створити функцію яка обчислює та повертає площу кола з радіусом r
let squareCircle = (radius) => Math.pow(radius, 2) * Math.PI;
console.log(squareCircle(5));


// - створити функцію яка обчислює та повертає площу циліндру висотою h, та радіутом r
let squareCylinder = (height, radius) => 2 * Math.PI * radius * (height + radius);
console.log(squareCylinder(8, 3));

// - створити функцію яка приймає масив та виводить кожен його елемент
let array = [1, 'okten', 2, 'web', 3, 'super'];
let printArray = (array) => {
    for (let arrayElement of array) {
        console.log(arrayElement);
    }
};
printArray(array);


// - створити функцію яка створює параграф з текстом. Текст задати через аргумент
let createParagraph = (text) => document.write(`<p>${text}</p>`);
createParagraph('OKTEN');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий
let createLi = (text) => {
    document.write(`<ul>`);
    for (let i = 0; i < 3; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
createLi('Super');


// - створити функцію яка створює ul з трьома елементами li. Текст li задати через аргумент всім однаковий. Кількість li визначається другим аргументом, який є числовим (тут використовувати цикл)
createLiWithCount = (text, count) =>  {
    document.write(`<ul>`);
    for (let i = 0; i < count; i++) {
        document.write(`<li>${text}</li>`);
    }
    document.write(`</ul>`);
};
createLiWithCount('The best', 6);


// - створити функцію яка приймає масив примітивних елементів (числа,стрінги,булеві), та будує для них список
let list = (array) => {
    document.write(`<ul>`);
    for (let i = 0; i < array.length; i++) {
        document.write(`<li>${array[i]}</li>`);
    }
    document.write(`</ul>`);
};
list([1, 2, 'okten', true, 5, false]);


// - створити функцію яка приймає масив об'єктів з наступними полями id,name,age , та виводить їх в документ. Для кожного об'єкту окремий блок.
let objects = [
    {
        id: 1,
        name: 'Marichka',
        age: 18
    },
    {
        id: 2,
        name: 'Yana',
        age: 17
    },
    {
        id: 3,
        name: 'Nastya',
        age: 17
    }
]
let printObj = (objects) => {
    for (let obj of objects) {
        document.write(`<ul>`);
        for (let objKey in obj) {
            document.write(`<li>${objKey}: ${obj[objKey]}</li>`);
        }
        document.write(`</ul>`);
    }
};
printObj(objects);

// - створити функцію яка повертає найменше число з масиву
let arrayOfNumbers = [2, 3, -100, 4, 22, 88, 1, 0];
let minNum = (array) => {
    if (array !== null && array !== undefined) {
        let min = array[0];
        for (let i = 0; i < array.length; i++) {
            if (array[i] < min)
                min = array[i];
        }
        return min;
    }
    else
        console.log('error');

};
console.log(minNum(arrayOfNumbers));


// - створити функцію sum(arr)яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад sum([1,2,10]) //->13
let sumElementsOfArray = (array) => {
    let sum = 0;
    for (let arrayElement of array) {
        sum += arrayElement;
    }
    return sum;
};
console.log(sumElementsOfArray(arrayOfNumbers));


// - створити функцію swap(arr,index1,index2). Функція міняє місцями заняення у відаовідних індексах
let swap = (array, index1, index2) =>  {
    const tmp = array[index1];
    array[index1] = array[index2];
    array[index2] = tmp;
    return array;
};

console.log('before: ');
printArray(arrayOfNumbers);
console.log('after swap: ')
printArray(swap(arrayOfNumbers, 2, 4));
// Приклад  swap([11,22,33,44],0,1) //=> [22,11,33,44]


// - Написати функцію обміну валюти exchange(sumUAH,currencyValues,exchangeCurrency)
// Приклад exchange(10000,[{currency:'USD',value:40},{currency:'EUR',value:42}],'USD') // => 250
const currencyValues = [{currency: 'USD', value: 40}, {currency:'EUR',value:42}];
let exchange = (sumUAH, currencyValues, exchangeValues) => {
    for (let i = 0; i < currencyValues.length; i++) {
        if (currencyValues[i].currency === exchangeValues) {
            return sumUAH / currencyValues[i].value;
        }
    }
}
console.log(exchange(10000,  [{currency: 'USD', value: 40}, {currency:'EUR',value:42}], 'USD'));
