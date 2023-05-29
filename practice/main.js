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

// let user = {
//     name: 'vasya',
//     age: 21,
//     skills: ['js', 'java']
// }
//
// let copy = {...user, skills: [...user.skills]};
// console.log(copy);
// console.log(user.skills === copy.skills);
//
// function boolToWord( bool ){
//     return bool === 'true' ? 'Yes' : 'No'
// }
//
// console.log(boolToWord('true'));
// function sumMix(x){
//     let sum = 0;
//     for (let i = 0; i < x.length; i++) {
//         sum += parseInt(x[i]);
//     }
//     return sum;
// }
//
// console.log(sumMix(['5', '0', 9, 3, 2, 1, '9', 6, 7]));
//
// function enough(cap, on, wait) {
//     if (cap - on >= wait)
//         return 0;
//     else {
//         return on - wait;
//     }
// }
//
// function points(games) {
//     let points = 0;
//     for (let i = 0; i < games.length; i++) {
//         let value = games[i].split(":");
//         let x = parseInt( value[0]);
//         let y = parseInt(value[1]);
//         if (x > y) {
//             points += 3;
//         } else if (x === y) {
//             points += 1;
//         } else {
//             points += 0;
//         }
//     }
//     return points;
// }
//
// console.log(points(["1:0", "2:0", "3:0", "4:0", "2:1", "3:1", "4:1", "3:2", "4:2", "4:3"]));
//
// function solution(str){
//     let arr = str.split("");
//     arr = arr.reverse();
//     return arr.join("");
// }
//
// console.log(solution('world'));
//
// // Sum Numbers
// function sum (numbers) {
//     "use strict";
//     if (numbers.length === 0)
//         return 0;
//     else {
//         let sum = 0;
//         for (const number of numbers) {
//             sum += number;
//         }
//         return sum;
//     }
// }
//
// console.log(sum([1, 5.2, 4, 0, -1]));
//
// function getCount(str) {
//     let count = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i] === 'a' || str[i] === 'e' || str[i] === 'i' || str[i] === 'o' || str[i] === 'u')
//             count++;
//     }
//     return count;
// }
//
// console.log(getCount('abrakadabra'));
//
// function highAndLow(numbers){
//     let arr = numbers.split(' ');
//     for (let i = 0; i < arr.length; i++) {
//         arr[i] = parseInt(arr[i])        ;
//     }
//     return Math.max(...arr) + " " +Math.min(...arr);
// }
//
// console.log(highAndLow('1 2 3 4 5'));
//
// const users = [
//     {name: 'marichka', age: 13, status: false},
//     {name: 'petya', age: 32, status: true},
//     {name: 'yana', age: 18, status: false},
//     {name: 'vasya', age: 46, status: true},
//     {name: 'roman', age: 53, status: true},
//     {name: 'anton', age: 11, status: false},
//     {name: 'sashko', age: 7, status: false},
//     {name: 'pupkin', age: 73, status: true},
//     {name: 'vika', age: 33, status: false}
// ]
// for (const user of users) {
//     let div = document.createElement('div');
//     let ul = document.createElement('ul');
//     for (const key in user) {
//         let li = document.createElement('li');
//         li.innerText = `${key} - ${user[key]}`;
//         ul.appendChild(li);
//     }
//     div.appendChild(ul);
//     document.body.appendChild(div);
// }

// function reverseWords(str) {
//     let arrWords = str.split(' ');
//     let result = "";
//     for (let i = 0; i < arrWords.length; i++) {
//         let arrChar = arrWords[i].split("");
//         arrChar = arrChar.reverse();
//         let word = arrChar.join("");
//         if (i !== 0) {
//             result += " ";
//         }
//         result += word;
//     }
//     return result;
// }
// function reverseWords(str) {
//     // Go for it
//     //split words into seperate arrays
//     let action1 =  str.split("").reverse();
//     let action2 = action1.join("").split(" ");
//     let action3 = action2.reverse().join(" ");
//     return action3;
// }
// let result = reverseWords('The quick brown fox jumps over the lazy dog.');
// console.log(result);

// function disemvowel(str) {
//     let newStr = '';
//     let j = 0;
//     for (let i = 0; i < str.length; i++) {
//         if (str[i].toLowerCase() !== "i" && str[i].toLowerCase() !== "o" && str[i].toLowerCase() !== "a" && str[i].toLowerCase() !== "e") {
//             newStr += str[i];
//         }
//     }
//     return newStr;
// }
// function disemvowel(str) {
//     return  str.replaceAll("e", "")
//         .replaceAll("o", "")
//         .replaceAll("a", "")
//         .replaceAll("i", "")
//         .replaceAll("u", "");
// }
// console.log(disemvowel('This website is for losers LOL!'));

// function digitize(n) {
    // let arr = n.toString().split("");
    // for (let i = 0; i < arr.length; i++) {
    //     arr[i] = parseInt(arr[i]);
    // }
    // return arr.reverse();
    // return n.toString().split("").map(value => parseInt(value)).reverse()
// }

// console.log(digitize(35231));

// function past(h, m, s){
//     if (0 <= h <= 23 && 0 <= m <= 59 && 0 <= s <= 59) {
//         return h * 60 * 60 * 1000 + m * 60 * 1000 + s * 1000;
//     }
// }
//
// console.log(past(0, 1, 1));

// function longest(s1, s2) {
//     let arrS2 = s2.split('');
//     let clearS1 = s1.split('').filter(value => !value.includes(arrS2));
//     console.log(clearS1);
// }
//
// console.log(longest("aretheyhere", "yestheyarehere"));
let arr = [];
let coursesArray = [
    {
        title: 'JavaScript Complex',
        monthDuration: 5,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'node.js']
    },
    {
        title: 'Java Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'git',
            'java core',
            'java advanced']
    },
    {
        title: 'Python Complex',
        monthDuration: 6,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'angular',
            'aws',
            'docker',
            'python core',
            'python advanced']
    },
    {
        title: 'QA Complex',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'git', 'QA/QC']
    },
    {
        title: 'FullStack',
        monthDuration: 7,
        hourDuration: 909,
        modules: ['html',
            'css',
            'js',
            'mysql',
            'mongodb',
            'react',
            'angular',
            'aws',
            'docker',
            'git',
            'node.js',
            'python',
            'java']
    },
    {
        title: 'Frontend',
        monthDuration: 4,
        hourDuration: 909,
        modules: ['html', 'css', 'js', 'mysql', 'mongodb', 'react', 'angular', 'aws', 'docker', 'git', 'sass']
    }
];
for (const coursesArrayElement of coursesArray) {
    coursesArrayElement.modules.map(value => arr.push(value));
}
