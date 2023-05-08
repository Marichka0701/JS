// - Нам дано масив друзів let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"]; Потрібно зробити перевірку якщо
//  кількість елементів у масиві більше або дорівнює 3, то виводиться повідомлення про те, що це великий масив, в якому  3 і більше елементи.
//  Інакше слід вивести на екран повідомлення про те, що це маленький масив, в якому менше 3-х елементів.
let friends = ["Ivan", "Slavik", "Grisha", "Lera", "Ira"];
if (friends.length >=3)
    console.log(`it's a big array, it has more than 3 elements.`);
else
    console.log(`it's a small array, it has less than 3 elements.`);


// - Маємо 3 числа і між ним  нам потрібно знайти те що посередині.
//  Знайти, яке з них є середнім (більше одного, але менше за інше). Перевірити, чи знаходиться перше число між двома іншими.
let number1 = -4, number2 = 1, number3 = 17;
let average = (number1 + number2 + number3) / 3;
console.log(average);

if (number1 > number2) {
    if (number2 > number3) {
        console.log(number2);
    } else
        if (number1 > number3) {
            console.log(number3);
        }
        else
            console.log(number1);
}
else {
    if (number1 > number3)
        console.log(number1);
    else
        if (number3 > number2)
            console.log(number2);
        else
            console.log(number3)
}


//  - Перепишіть конструкцію if з використанням умовного оператора '?':
//  let result;
//  if (a + b < 4) {
//     result = 'Мало';
//  } else {
//     result = 'Багато';
//  }
let result;
let a = 1, b= 1;
(a + b < 4) ? result = ('Мало') : result = ('Багато');
console.log(result);


//  - Маємо будь яке число від -100 , 0 , +100 потрібно перевірити яким є число: позитивним, негативним або нулем
// напишіть це тернарним оператором
let num1 = 10;
(num1 > 0) ? console.log('positive number') : ((num1 === 0) ? console.log('equal to zero') : console.log('negative number'));


// - У нас є змінна test, якщо дорівнює true, виведіть 'Вірно', інакше виведіть 'Неправильно'.
// Перевірте роботу скрипта при test, що дорівнює true, false. Напишіть два варіанти скрипта - з коротким записом(тернаркою)
let test = false;
(test === true) ? console.log('true') : console.log('false');


// - Використовуючи конструкцію if..else, напишіть код, який запитуватиме: „Яка «офіційна» назва JavaScript?“
// Якщо користувач вводить «ECMAScript», то показати: «Правильно!», інакше – відобразити: «Не знаєте? ECMAScript!
let answer = prompt('Enter official name of JS?')
if (answer === 'ECMAScript')
    console.log('true. it`s ECMAScript')
else
    console.log('don`t know? it`s ECMAScript');


//  - У першому під'їзді квартири з 1 до 20. У другому з 21 по 48. У третьому з 49 по 90.
// Користувач вводить номер квартири просто в змінні або через prompt('') .
// Програма повинна зазначити, в якому під'їзді знаходиться дана квартира.
let apartmentNumber = +prompt('Enter apartment number:(1 to 90) ');
if (apartmentNumber >= 1 && apartmentNumber <=20)
    console.log('it`s first entrance');
else
    if (apartmentNumber >= 21 && apartmentNumber <= 48)
        console.log('it`s second entrance');
    else
        console.log('it`s third entrance');


//     - Ми маємо змінну number в яку користувач задає числове значення,  якщо змінна рівна 10 вивести повідомлення ВІРНО, якщо змінна не рівна 10 - тоді НЕВІРНО
let number = +prompt('Enter number:');
if (number === 10)
    console.log('equal to 10');
else
    console.log('not equal to 10');


// - Задача-гра "чи ми йдемо сьогодні на навчання?".
//     Змінна, яка характеризує температуру. Якщо температура від +10 до +22 вивести повідомлення що ми йдемо ВЧИТИСЯ .
//     Якщо інша темпаретура, тоді виводимо повідомлення що сидимо вдома і вчимося ОНЛАЙН
let temperature = +prompt('Enter temperature:');
if (temperature >= 10 && temperature <= 22)
    console.log('let`s go to study');
else
    console.log('you will sit at home. rest and sleep))');


//  - За допомогою switch case - реалізувати гру - вікторину, де ми вводимо число від 1 до 5. І взалежності від введеного
// числа нам дається приз. (Авто, Мото, Телефон, і т.д ) і якщо число не підходить тоді  вивести Повідомлення - що число не вірне ... .
let lottery = +prompt('Enter number for lottery?');
switch (lottery) {
    case 1:
        console.log('you win a car');
        break;
    case 2:
        console.log('you win a IPhone');
        break;
    case 3:
        console.log('you win a apartment');
        break;
    case 4:
        console.log('you win a ticket for travel');
        break;
    case 5:
        console.log('you win a cup');
        break;
    default:
        console.log('sorry. I wish you lucky for next time.')
}

