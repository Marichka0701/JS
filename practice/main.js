// let user = {
//     name: 'Igor',
//     surname: 'Tanechnyk',
//     age: 26,
//     wife: {
//         name: 'Yulia',
//         surname: 'Shylo',
//         age: 25,
//         skills: ['js', 'java', 'db']
//     }
// }
//
// const {name, surname, age, wife, wife: {name: wifeName, surname: wifeSurname, age: wifeAge, skills} } = user;
// console.log(name);
// console.log(surname);
// console.log(age);
// console.log(wife);
// console.log(wifeName);
// console.log(wifeSurname);
// console.log(wifeAge);
// console.log(skills);
//


// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Ділення на нуль неможливе.");
//     }
//     return a / b;
// }
//
// try {
//     var result = divide(10, 0);
//     console.log("Результат ділення:", result);
// } catch (error) {
//     console.log("Виникла помилка:", error.message);
// }

let user = {
    name: 'vasya',
    age: 21,
    skills: ['js', 'java']
}

let copy = {...user, skills: [...user.skills]};
console.log(copy);
console.log(user.skills === copy.skills);

function boolToWord( bool ){
    return bool === 'true' ? 'Yes' : 'No'
}

console.log(boolToWord('true'));
function sumMix(x){
    let sum = 0;
    for (let i = 0; i < x.length; i++) {
        sum += parseInt(x[i]);
    }
    return sum;
}

console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));

function enough(cap, on, wait) {
    if (cap - on >= wait)
        return 0;
    else {
        return on - wait;
    }
}

function points(games) {
    let points = 0;
    for (let i = 0; i < games.length; i++) {
        let value = games[i].split(":");
        let x = parseInt( value[0]);
        let y = parseInt(value[1]);
        if (x > y) {
            points += 3;
        } else if (x === y) {
            points += 1;
        } else {
            points += 0;
        }
    }
    return points;
}

console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));

function solution(str){
    let arr = str.split("");
    arr = arr.reverse();
    return arr.join("");
}

console.log(solution('world'));

// Sum Numbers
function sum (numbers) {
    "use strict";
    if (numbers.length === 0)
        return 0;
    else {
        let sum = 0;
        for (const number of numbers) {
            sum += number;
        }
        return sum;
    }
}

console.log(sum([1, 5.2, 4, 0, -1]));

function getCount(str) {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
            count++;
    }
    return count;
}

console.log(getCount('abrakadabra'));

function highAndLow(numbers){
    let arr = numbers.split(' ');
    for (let i = 0; i < arr.length; i++) {
        arr[i] = parseInt(arr[i])        ;
    }
    return Math.max(...arr) + " " +Math.min(...arr);
}

console.log(highAndLow('1 2 3 4 5'));