//
// - Створити клас або функцію конструктор, за допомоги якої можна створювати об'єкти наступного вигляду.
// Конструктор повинен приймати значення для кожної властивості, в т.ч і для властивостей внутрішніх об'єктів
//
// {
//     id: 1,
//         name: 'Leanne Graham',
//     username: 'Bret',
//     email: 'Sincere@april.biz',
//     address: {
//     street: 'Kulas Light',
//         suite: 'Apt. 556',
//         city: 'Gwenborough',
//         zipcode: '92998-3874',
//         geo: {
//         lat: '-37.3159',
//             lng: '81.1496'
//     }
// },
//     phone: '1-770-736-8031 x56442',
//         website: 'hildegard.org',
//     company: {
//     name: 'Romaguera-Crona',
//         catchPhrase: 'Multi-layered client-server neural-net',
//         bs: 'harness real-time e-markets'
// }
// }
class CreateObj {
    constructor(id, name, surname, email, address, street, suite, city, zipcode, lat, lng, phone, website, companyName, catchPhrase, bs) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.address = {
           street,
            suite,
            city,
            zipcode
        }
        this.geo = {
            lat,
            lng
        }
        this.phone = phone;
        this.website = website;
        this.company = {
            companyName,
            catchPhrase,
            bs
        }
    }
}
const user = new CreateObj(
    1,
    'Marichka',
    'Tanechnyk',
    'tanechnyk.marichka07@gmail.com',
    'Kulas Light', 'Kulas Light', 'Apt. 556', 'Gwenborough', '92998-3874', '-37.3159', '81.1496',
    '1-770-736-8031 x56442',
    'hildegard.org', 'Romaguera-Crona', 'ulti-layered client-server neural-net', 'harness real-time e-markets');
console.log(user);


// -  Створити функцію конструктор / клас  який описує об'єкт тегу
// Поля :
//     -назва тегу ()
// - опис його дій
// - масив з атрибутами (2-3 атрибути максимум)
// Кожен атрибут описати як окремий який буде містити
// -назву атрибуту
// -опис дії атрибуту
// інформацію брати з htmlbook.ru
function Tag(name, description, attributes) {
    this.name = name;
    this.description = description;
    this.attributes = attributes;
}
// Таким чином описати теги
// -a
const a = new Tag('a',
    'Тег "a" використовується для того, щоб перенаправити на сторінку з певним посиланням.',
    [{name: 'href', description: 'Вказує адресу URL, на яку буде переходити посилання.'},
        {name: 'target', description: 'Якщо вказаний цей атррибут - посилання відкриється в новій вкладці.'}]);
console.log(a);

// -div
const div = new Tag('div',
    'Тег "<iv" представляє собою блок для групування елементів',
    [{name: 'align', decription: 'Задає вирівнювання вмісту тега "div"'},
     { name: 'title', decription: 'Додає властивість спливаючої підказки до елементу' },])
console.log(div);

//  -h1
const h1 = new Tag('h1', 'Тег "h1" представляє собою найбільш важливий заголовок першого рівня',
    [{name: 'align', decription: 'Вирівнює заголовок по лівому краю',},
        { name: 'title', decription: 'Додає властивість спливаючої підказки до елементу' },]);
console.log(h1);

//  -span
const span = new Tag('span', 'Тег "span" призначений для визначення малих елементів документа',
    [{ name: 'accesskey', decription: 'Дозволяє активувати силання за допомогою комбінації клавіш' },
        { name: 'class', decription: "Задає ім'я класу, до якого буде належати елемент" },]);
console.log(span)

//input
const input = new Tag('input',
    'Тег "input" є одним з різнобічних елементів форми і дозволяє створити різні елементи інтерфейсу і обміну даними з сервером',
    [{ name: 'accept', decription: 'Вказує типи файлів, які може обробляти сервер' }, {name: 'accesskey', decription: 'Дозволяє активувати силання за допомогою комбінації клавіш',},]);
console.log(input);

// -form
const form = new Tag('form', 'Тег "form" встановлює форму на веб-сторінці',
    [{name: 'accept-charset', decription: 'Встановлює кодування, в якому сервер може приймати інформацію',},
    { name: 'action', decription: 'Адреса програми або документа, який обробляє дані форми' },]);
console.log(form);

// -option
const option = new Tag('option', 'Тег "option" визначає окремі пункти списку, що створюється за допомогою контейнера "select"',
    [{name: 'disabled', decription: 'Заблокувати для доступу елемент списку',},
        { name: 'label', decription: 'Вказівка мітки пункту списку' },]);
console.log(option);

// -select
const select = new Tag('select', 'Тег "select" дозволяє створити елемент інтерфейсу у вигляді списку',
    [{name: 'accesskey', decription: 'Дозволяє активувати силання за допомогою комбінації клавіш',},
        {name: 'autofocus', decription: 'Встановлює, що список отримує фокус після загрузки сторінки',},]);
console.log(select);

// Приклад результуючого об'єкту
// {
//     titleOfTag: 'area',
//         action: `Каждый элемент <area> определяет активные области изображения, которые являются ссылками...`,
//     attrs: [
//     {titleOfAttr: 'accesskey', actionOfAttr: 'Переход к области с помощью комбинации клавиш'},
//     {/*some props and values*/},
//     {/*...*/},
//     {/*...*/},
// ]
//
// }