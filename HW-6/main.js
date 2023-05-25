// - Знайти та вивести довижину настипних стрінгових значень
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.length);
console.log('lorem ipsum'.length);
console.log('javascript is cool'.length);
console.log('---------------------------------------------------------');


// - Перевести до великого регістру наступні стрінгові значення
// 'hello world', 'lorem ipsum', 'javascript is cool'
console.log('hello world'.toUpperCase());
console.log('lorem ipsum'.toUpperCase());
console.log('javascript is cool'.toUpperCase());
console.log('---------------------------------------------------------');


// - Перевести до нижнього регістру настипні стрінгові значення
// 'HELLO WORLD', 'LOREM IPSUM', 'JAVASCRIPT IS COOL'
console.log('HELLO WORLD'.toLowerCase());
console.log('LOREM IPSUM'.toLowerCase());
console.log('JAVASCRIPT IS COOL'.toLowerCase());
console.log('---------------------------------------------------------');
// - Є "брудна" стрінга let str = ' dirty string   ' . Почистити її від зайвих пробілів.
let str1 = ' dirty string   ';
console.log(str1.trim());
console.log('---------------------------------------------------------');


// - Напишіть функцію stringToarray(str), яка перетворює рядок на масив слів.
// let arr = stringToarray(str); ['Ревуть', 'воли', 'як', 'ясла', 'повні']
let str2 = 'Ревуть воли як ясла повні';
const stringToArray = (str) => {
    return str.split(' ');
}
console.log(stringToArray(str2));
console.log('---------------------------------------------------------');


// - є масив чисел [10,8,-7,55,987,-1011,0,1050,0] . за допомоги map  перетворити всі об'єкти в масиві на стрінгові.
const numbers = [10, 8, -7, 55, 987, -1011, 0, 1050, 0];
console.log(numbers.map(value => value.toString()));
console.log('---------------------------------------------------------');


// - створити функцію sortNums(direction), яка прймає масив чисел, та сортує його від більшого до меньшого, або навпаки в залежності від значення аргументу direction.
//     let nums = [11,21,3];
// sortNums(nums,'ascending') // [3,11,21]
// sortNums(nums,'descending') // [21,11,3]
const sortNums = (arr, direction) => {
    if (direction === 'ascending') {
        return arr.sort((a, b) => a - b);
    } else if (direction === 'descending') {
        return arr.sort((a, b) => b - a);
    }
}
console.log(sortNums([11, 21, 3, -5, 3], 'descending'));
console.log('---------------------------------------------------------');


// ==========================
// - є масив
let coursesAndDurationArray = [
    {title: 'JavaScript Complex', monthDuration: 5},
    {title: 'Java Complex', monthDuration: 6},
    {title: 'Python Complex', monthDuration: 6},
    {title: 'QA Complex', monthDuration: 4},
    {title: 'FullStack', monthDuration: 7},
    {title: 'Frontend', monthDuration: 4}
];
// -- відсортувати його за спаданням за monthDuration
console.log(coursesAndDurationArray.sort((a, b) => b.monthDuration - a.monthDuration));
console.log('---------------------------------------------------------');


// -- відфільтрувати , залишивши тільки курси з тривалістю більше 5 місяців
console.log(coursesAndDurationArray.filter(value => value.monthDuration > 5));
console.log('---------------------------------------------------------');


// -- за допомоги map перетворити кожен елемент на наступний тип {id,title,monthDuration}
let i = 1;
console.log(coursesAndDurationArray.map(value => {
    return {
        id: `${i++}`,
        title: value.title,
        monthDuration: value.monthDuration
    }
}));
console.log('---------------------------------------------------------');


// =========================
//     описати колоду карт (від 6 до туза без джокерів)
let cards = [
    {cardSuit: 'spade', value: '6', color: 'black'},
    {cardSuit: 'diamond', value: '6', color: 'red'},
    {cardSuit: 'heart', value: '6', color: 'red'},
    {cardSuit: 'clubs', value: '6', color: 'black'},
    {cardSuit: 'spade', value: '7', color: 'black'},
    {cardSuit: 'diamond', value: '7', color: 'red'},
    {cardSuit: 'heart', value: '7', color: 'red'},
    {cardSuit: 'clubs', value: '7', color: 'black'},
    {cardSuit: 'spade', value: '8', color: 'black'},
    {cardSuit: 'diamond', value: '8', color: 'red'},
    {cardSuit: 'heart', value: '8', color: 'red'},
    {cardSuit: 'clubs', value: '8', color: 'black'},
    {cardSuit: 'spade', value: '9', color: 'black'},
    {cardSuit: 'diamond', value: '9', color: 'red'},
    {cardSuit: 'heart', value: '9', color: 'red'},
    {cardSuit: 'clubs', value: '9', color: 'black'},
    {cardSuit: 'spade', value: '10', color: 'black'},
    {cardSuit: 'diamond', value: '10', color: 'red'},
    {cardSuit: 'heart', value: '10', color: 'red'},
    {cardSuit: 'clubs', value: '10', color: 'black'},
    {cardSuit: 'spade', value: 'jack', color: 'black'},
    {cardSuit: 'diamond', value: 'jack', color: 'red'},
    {cardSuit: 'heart', value: 'jack', color: 'red'},
    {cardSuit: 'clubs', value: 'jack', color: 'black'},
    {cardSuit: 'spade', value: 'queen', color: 'black'},
    {cardSuit: 'diamond', value: 'queen', color: 'red'},
    {cardSuit: 'heart', value: 'queen', color: 'red'},
    {cardSuit: 'clubs', value: 'queen', color: 'black'},
    {cardSuit: 'spade', value: 'king', color: 'black'},
    {cardSuit: 'diamond', value: 'king', color: 'red'},
    {cardSuit: 'heart', value: 'king', color: 'red'},
    {cardSuit: 'clubs', value: 'king', color: 'black'},
    {cardSuit: 'spade', value: 'ace', color: 'black'},
    {cardSuit: 'diamond', value: 'ace', color: 'red'},
    {cardSuit: 'heart', value: 'ace', color: 'red'},
    {cardSuit: 'clubs', value: 'ace', color: 'black'},
];
// - знайти піковий туз
console.log(cards.filter(value => value.cardSuit === 'spade' && value.value === 'ace'));
console.log('---------------------------------------------------------');


// - всі шістки
console.log(cards.filter(value => value.value === '6'));
console.log('---------------------------------------------------------');


// - всі червоні карти
console.log(cards.filter(value => value.color === 'red'));
console.log('---------------------------------------------------------');


// - всі буби
console.log(cards.filter(value => value.cardSuit === 'diamond'));
console.log('---------------------------------------------------------');


// - всі трефи від 9 та більше
console.log(cards.filter(value => value.value >= '9' || (parseInt(value.value) >= 9)));
console.log('---------------------------------------------------------');


// =========================
//
//     Взяти описану колоду карт, та за допомоги reduce упакувати всі карти по "мастях" в об'єкт
// {
//     spades:[],
//         diamonds:[],
//     hearts:[],
//     clubs:[]
// }
// const spades = cards.filter(value => value.cardSuit === 'spade');
// console.log(spades);
// console.log('---------------------------------------------------------');
const reduceResult = cards.reduce((accumulator, card) =>
    {
        switch (card.cardSuit) {
            case 'spade':
                accumulator.spades.push(card);
                break;
            case 'diamond':
                accumulator.diamonds.push(card);
                break;
            case 'heart':
                accumulator.hearts.push(card);
                break;
            case 'clubs':
                accumulator.clubs.push(card);
                break;
        }
        return accumulator;
    }, {spades: [], diamonds: [], hearts: [], clubs: []});
console.log(reduceResult);


// const diamonds = cards.filter(value => value.cardSuit === 'diamond');
// console.log(diamonds);
// console.log('---------------------------------------------------------');
//
// const hearts = cards.filter(value => value.cardSuit === 'heart');
// console.log(hearts);
// console.log('---------------------------------------------------------');
//
// const clubs = cards.filter(value => value.cardSuit === 'clubs');
// console.log(clubs);
// console.log('---------------------------------------------------------');


// =========================
//     взяти з arrays.js (який лежить в папці 2023 plan) масив coursesArray
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
// --написати пошук всіх об'єктів, в який в modules є sass
let objWithSass = coursesArray.filter(course => {
    for (const item of course.modules) {
        if (item === 'sass')
            return true;
    }
})
console.log(objWithSass);
console.log('---------------------------------------------------------');


// --написати пошук всіх об'єктів, в який в modules є docker
let objWithDocker = coursesArray.filter(course => {
    for (const item of course.modules) {
        if (item === 'docker')
            return true;
    }
})
console.log(objWithDocker);

function removeChar(str) {
    if (str.length !== 2) {
        return str.substring(1, str.length - 1);
        ;
    } else return str;
};
console.log(removeChar('person'));



