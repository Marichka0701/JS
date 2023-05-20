// - Напишите функцию cutString(str, n), которая делит строку на подстроки, состоящие из n символов.
// document.writeln(cutString('наслаждение',3)) // [нас,лаж,ден,ие]
cutString = (str, n) => {
    let arr = [];
    let lastPosition = 0;
    let newPosition = n;
    for (let i = 0; newPosition < str.length; i++) {
        if (newPosition < str.length) {
            arr.push(str.slice(lastPosition, newPosition));
            if (newPosition + n < str.length){
                newPosition += n;
                lastPosition += n;
            } else break;
        }
    }
    if (newPosition < str.length) {
        arr.push(str.slice(newPosition, str.length));
    }
    return arr;
}
console.log(cutString('насолода', 4));
console.log('********************************************');


// - Напишіть функцію delete_characters(str, length), яка повертає підрядок, що складається із зазначеної кількості символів.
//     let str = 'Каждый охотник желает знать';
// document.writeln(delete_characters(str, 7)); // Каждый
deleteCharacters = (str, length) => {
    return str.substring(0, length);
}
console.log(deleteCharacters('Кожен мисливець повинен знати', 7));
console.log('********************************************');


// - Напишіть функцію insert_dash(str), яка приймає рядок str як аргумент і вставляє тире (-) між словами. При цьому всі символи рядка необхідно перевести у верхній регістр.
//     let str = "HTML JavaScript PHP";
insertDash = (str) => {
    return str.replaceAll(' ', '-')
        .toUpperCase();
}
console.log(insertDash('HTML JavaScript PHP'));
console.log('********************************************');


// document.writeln(insert_dash(str)); // 'HTML-JAVASCRIPT-PHP'
//
// - Напишіть функцію, яка приймає рядок як аргумент і перетворює регістр першого символу рядка з нижнього регістру у верхній.
capitalizeFirstChar = (str) => {
    let firstLetter = str.charAt(0);
    let strWithoutFirstLetter = str.slice(1);
    firstLetter = firstLetter.toUpperCase();

    return firstLetter + strWithoutFirstLetter;
}
console.log(capitalizeFirstChar('hello'));
console.log('********************************************');


// ВОНО ТРОШКИ ПРАЦЮЄ НЕДОСКОНАЛО - НЕМА ПРОБІЛУ МІЖ СЛОВАМИ + ПЕРШІ СИМВОЛИ МОЖУТЬ БУТИ НЕ ЛІТЕРАМИ
// - Дано список імен.
//     let n1 = 'Harry..Potter'
// let n2 = 'Ron---Whisley'
// let n3 = 'Hermione__Granger'
// Написати функцію, яка приймає будь яке не валідне імя, та нормалізує його в наступнйи вигляд
// let n1 = 'Harry Potter'
// let n2 = 'Ron Whisley'
// let n3 = 'Hermione Granger'
toValidName = (str) => {
    let index = 0;
    for (let i = 2; i < str.length; i++) {
        if (str[i] >= 'A' && str[i] <= 'Z') {
            index = i;
        }
    }
    let newStr = str.slice(0, index);
    let before = newStr[0];
    let after = newStr[1];
         before = before.replaceAll('-', '')
        .replaceAll('+', '')
        .replaceAll('*', '')
        .replaceAll('/', '')
        .replaceAll('_', '')
        .replaceAll(',', '')
        .replaceAll('.', '');
         after = after.replaceAll('-', '')
             .replaceAll('+', '')
             .replaceAll('*', '')
             .replaceAll('/', '')
             .replaceAll('_', '')
             .replaceAll(',', '')
             .replaceAll('.', '');
         return before + ' ' + after;
}
console.log(toValidName('Harry..Potter'));
console.log('********************************************');


//     - створити функцію, яка генерує масив рандомних числових цілих значень в діапазоні від 0 до 100.
randomValue = (countNumbers) => {
    let arr = [];
    for (let i = 0; i < countNumbers; i++) {
        arr.push(Math.floor(Math.random() * 100));
    }
    return arr;
}
console.log(randomValue(5));
console.log('********************************************');


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. Відсортувати його за допомоги sort
sortArray = () => {
    let arr = randomValue(6);
    return arr.sort((a, b) => a - b);
}
console.log(sortArray());
console.log('********************************************');


// - створити (або згенерувати, за допомоги попередньої функції) масив рандомних цілих числових значень. відфільтрувати  його за допомоги filter, залишивши тільки парні числа (без 0!)
sortByEven = () => {
    let arr = randomValue(10);
    return arr.filter(element => element % 2 === 0 && element !== 0);
}
console.log(sortByEven());
console.log('********************************************');


// - Напишіть функцію capitalize(str), яка повертає рядок, у якому кожне слово починається з великої літери.
capitalize = (str) => {
    let arr = str.split(' ');
    let firstLetter;
    let wordWithoutFirstLetter;
    let newStr = '';
    for (const arrElement of arr) {
        firstLetter = arrElement[0].toUpperCase();
        wordWithoutFirstLetter = arrElement.slice(1);
        newStr += firstLetter + wordWithoutFirstLetter + ' ';
    }
    return newStr.trim();
}
console.log(capitalize('djfdsf jdfsj sdjfjdsf dsjfdjsfs dfs'));
console.log('********************************************');


// - Створити функцію-валідатор для адрес електронної пошти. Перевірка повинна включати в себе :данні до знака равлика(@), наявність равлика, крапку яка знаходиться не меньше ніж на 2 символ далі після равлика, функція не чутлива до регістру (some@email.com,SOME@EMAIL.COM,some@EMAIL.com, і тд - однакові значення)
// Протестувати на значеннях
// someemail@gmail.com
// someeMAIL@gmail.com
// someeMAIL@i.ua
// some.email@gmail.com
// Примітка
// Для тих, хто дуже розумний, та почне використовувати регулярні вирази одразу "ні". Своїм мозком подумайте над протоколом, з регулярками будете потім бавитись.
//
validatorMail = (str) => {
    if (!str.includes('@')) {
        return false;
    }
    else {
        let arr = str.split('@');
        let beforeDog = arr[0];
        let afterDog = arr[1];
        if (beforeDog.length > 2 && afterDog.length > 2) {
            if (arr[1].indexOf('.') >= 3 && arr[1].indexOf('.') !== -1) {
                return true;
            }
            else return false;
        }
    }

}
console.log(validatorMail('some.emailgmail.com'));
console.log('********************************************');


// - є масив
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
// відсортувати його в спадаючому порядку за кількістю елементів в полі modules
console.log(coursesArray.sort((a, b) => b.modules.length - a.modules.length))
console.log('********************************************');


// - Напишіть функцію count(str, stringsearch), яка повертає кількість символів stringsearch у рядку str.
//     let symb = "о", str = "Астрономия это наука о небесных объектах";
// document.writeln(count(str, symb)) // 5
countChar = (str, charSearch) => {
    let count = 0;
    for (let i = 0; i < str.length; i++) {
        if (charSearch.toString() === str[i])
            count++;
    }
    return count;
}
console.log(countChar(`Астрономія - це наука про небесні об'єкти`, 'о'));
console.log('********************************************');


// - Напишіть функцію cutString(str, n), яка видаляє зайві слова з рядка str, залишивши у ній n слів.
//     let str = "Сила тяжести приложена к центру масс тела";
// document.writeln(cutString(str, 5)) // 'Сила тяжести приложена к центру'
cutString = (str, n) => {
    let arr = str.split(' ');
    arr = arr.splice(-arr.length, n);
    return arr;
}
console.log(cutString('Сила тяжести приложена к центру масс тела', 3));
console.log('********************************************');


// -стоврити масив книжок (назва, кількість сторінок, автори , жанри).
// -знайти наібльшу книжку.                                                       1
// - знайти книжку/ки з найбільшою кількістю жанрів                               2
// - знайти книжку/ки з найдовшою назвою                                          3
// - знайти книжку/ки які писали 2 автори                                         4
// - знайти книжку/ки які писав 1 автор                                           5
// - вісортувати книжки по кількості сторінок по зростанню                        6
const  books = [
    {
        title: 'A COUNTESS BELOW STAIRS',
        pageCount: 100,
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
        pageCount: 400,
        genre: ['Science fiction'],
        authors: [{name: 'King', age: 25}]
    },
    {
        title: 'Some book',
        pageCount: 400,
        genre: ['Romance', 'Comedy', 'Mystery', 'Smth'],
        authors: [{name: 'King', age: 25}, {name: 'Royal', age: 42}]
    },
    {
        title: 'Babka',
        pageCount: 300,
        genre: [ 'Comedy', 'Mystery', 'Smth', 'Something'],
        authors: [{name: 'Queen', age: 24}, {name: 'Leon', age: 12}]
    },
]

let maxCountPage = 0;
let arrBooksWithMaxPage = [];

let maxCountGenre = 0;
let arrBooksWithMaxGenre = [];

let maxCountTitle = 0;
let arrBooksWithMaxTitle = [];

for (let j = 0; j < books.length; j++) {
    // 1
    if (books[j].pageCount >= maxCountPage) {
        maxCountPage = books[j].pageCount;
    }
    // 2
    if (books[j].genre.length >= maxCountGenre) {
        maxCountGenre= books[j].genre.length;
    }
    // 3
    if (books[j].title.length >= maxCountTitle) {
        maxCountTitle= books[j].title.length;
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
for (let i = 0; i < books.length; i++) {
    // 1
    if (books[i].pageCount === maxCountPage){
        arrBooksWithMaxPage.push(books[i]);
    }
    // 2
    if (books[i].genre.length === maxCountGenre) {
        arrBooksWithMaxGenre.push(books[i]);
    }
    // 3
    if (books[i].title.length === maxCountTitle) {
        arrBooksWithMaxTitle.push(books[i]);
    }
}

console.log('Books with max page: ');
console.log(arrBooksWithMaxPage);

console.log('Books with max genre: ');
console.log(arrBooksWithMaxGenre);

console.log('Books with max title: ');
console.log(arrBooksWithMaxTitle);

console.log('after sorting:');
console.log(books.sort((a, b) => a.pageCount - b.pageCount));

