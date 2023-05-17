// Всі функції повинні бути описані стрілочним типом!!!!
//     - створити функцію яка приймає три числа та виводить найменьше. (Без Math.min!)
const min = (a, b, c) => {
    let minNumber = a;

    if (b < a)
        minNumber = b;
    else if (c < a)
        minNumber = c;

    return minNumber;
}
console.log(min(-500, -100, -1000));
console.log("------------------------------------------------------");


// - створити функцію яка приймає три числа та виводить найбільше. (Без Math.max!)
const max = (a, b, c) => {
    let maxNumber = a;

    if (b > a)
        maxNumber = b;
    else if (c > a)
        maxNumber = c;

    return maxNumber;
}
console.log(max(-500, -100, -1000));
console.log("------------------------------------------------------");


// - створити функцію яка повертає найбільше число з масиву
const maxInArray = (arr) => {
    let max = arr[0];
    for (const element of arr) {
        if (element > max)
            max = element;
    }
    return max;
}
console.log(maxInArray([1, 2, -100, 500, 2, 10]));
console.log("------------------------------------------------------");


// - створити функцію яка повертає найменьше число з масиву
const minInArray = (arr) => {
    let min = arr[0];
    for (const element of arr) {
        if (element < min)
            min = element;
    }
    return min;
}
console.log(minInArray([1, 2, -100, 500, 2, 10]));
console.log("------------------------------------------------------");


// - створити функцію яка приймає масив чисел, сумує значення елементів масиву та повертає його. Приклад [1,2,10]->13
const sumArr = (arr) => {
    let sum = 0;
    for (const arrElement of arr) {
        sum += arrElement;
    }
    return sum;
}
console.log(sumArr([1, 2, -100, 100, 2, 10]));
console.log("------------------------------------------------------");
// - Дано натуральное число n. Выведите все числа от 1 до n.
const printArr = (n) => {
    let arr = [];
    let number = 1;
    for (let i = 0; i < n; i++) {
        arr[i] = number++;
        console.log(arr[i]);
    }
}
printArr(7);
console.log("------------------------------------------------------");


// - Даны два целых числа A и В . Выведите все числа от A до B включительно, в порядке возрастания, если A < B, или в порядке убывания в противном случае.
const AtoB = (A, B) => {
    let arr = [];
    if (A < B) {
        for (let i = A; i <= B; i++) {
            arr.push(i);
        }
    } else {
        for (let i = A; i >= B; i--) {
            arr.push(i);
        }
    }
    return arr;
}
console.log(AtoB(10, 5));
console.log("------------------------------------------------------");


// -   функція Приймає масив та число "i", та міняє місцями об`єкт який знаходиться в індексі "i" на "i+1"
//   EXAMPLE:
//   foo([9,8,0,4], 0) // ==> [ 8, 9, 0, 4 ]
//   foo([9,8,0,4], 1) // ==> [ 9 ,0, 8, 4 ]
//   foo([9,8,0,4], 2) // ==> [ 9, 8, 4, 0 ]
const swap = (arr, index) => {
    for (let i = 0; i < arr.length; i++) {
        if (i === index && index !== arr.length - 1) {
            let tmp = arr[i];
            arr[i] = arr[i + 1];
            arr[i + 1] = tmp;
        }
    }
    return arr;
}
console.log(swap([9, 8, 0, 4], 0));
console.log("------------------------------------------------------");


// - Сворити функцію яка буде переносити елементи з значенням 0 у кінець маисву. Зберігаючи при цьому порядок не нульових значень.
// Двожина масиву від 2 до 100
// EXAMPLE:
// [1,0,6,0,3] => [1,6,3,0,0]
// [0,1,2,3,4] => [1,2,3,4,0]
// [0,0,1,0]   => [1,0,0,0]
const zeroToEnd = (arr) => {
    let j = 0;
    let newArr = [],
        arrWithZero = [];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] !== 0) {
           newArr[j++] = arr[i];
        }
        else {
            arrWithZero.push(arr[i]);
        }
    }
    return  newArr.concat(arrWithZero);
}
console.log(zeroToEnd([0, 0, 6, 0, 3]));
