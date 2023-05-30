// - З масиву users за допомогою циклу витягнути адреси користувачів і записати (скопіювати) їх в інший порожній масив.
let users = [{
    name: 'vasya',
    age: 31,
    status: false,
    address: {city: 'Lviv', country: 'Ukraine', street: 'Shevchenko', houseNumber: 1}
}, {
    name: 'petya',
    age: 30,
    status: true,
    address: {city: 'New York', country: 'USA', street: 'East str', houseNumber: 21}
}, {
    name: 'kolya',
    age: 29,
    status: true,
    address: {city: 'Budapest', country: 'Hungary', street: 'Kuraku', houseNumber: 78}
}, {
    name: 'olya',
    age: 28,
    status: false,
    address: {city: 'Prague', country: 'Czech', street: 'Paster', houseNumber: 56}
}, {
    name: 'max',
    age: 30,
    status: true,
    address: {city: 'Istanbul', country: 'Turkey', street: 'Mikar', houseNumber: 39}
}, {
    name: 'anya',
    age: 31,
    status: false,
    address: {city: 'Rio', country: 'Brasil', street: 'Ronaldi', houseNumber: 5}
}, {
    name: 'oleg',
    age: 28,
    status: false,
    address: {city: 'Montreal', country: 'Canada', street: 'Acusto', houseNumber: 90}
}, {
    name: 'andrey',
    age: 29,
    status: true,
    address: {city: 'Quebeck', country: 'Canada', street: 'Binaro', houseNumber: 33}
}, {
    name: 'masha',
    age: 30,
    status: true,
    address: {city: 'Moscow', country: 'Russia', street: 'Gogolia', houseNumber: 1}
}, {
    name: 'olya',
    age: 31,
    status: false,
    address: {city: 'Portland', country: 'USA', street: 'Forest str', houseNumber: 4}
}, {
    name: 'max',
    age: 31,
    status: true,
    address: {city: 'Cairo', country: 'Egypt', street: 'Seashore', houseNumber: 45}
}];
let address = [];
users.map(value => address.push(value.address));
console.log(address);


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement. Всі данні в одному блоці.
for (const user of users) {
    let div = document.createElement('div');
    div.innerText = `Name: ${user.name}, Age: ${user.age}, Status: ${user.status}, Address: ${user.address.city}, ${user.address.country}, ${user.address.street}, ${user.address.houseNumber}`
    document.body.appendChild(div);
}
document.write('*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***');

// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам (div>div*4)
for (const user of users) {
    let div = document.createElement('div');
    let divOne = document.createElement('div');
    divOne.innerText = `Name: ${user.name}`;
    let divTwo = document.createElement('div');
    divTwo.innerText = `Age: ${user.age}`;
    let divThree = document.createElement('div');
    divThree.innerText = `Status: ${user.status}`;
    let divFour = document.createElement('div');
    divFour.innerText = `Address: City - ${user.address.city}, Country - ${user.address.country}, Street - ${user.address.street}, House number - ${user.address.houseNumber}`;
    let br = document.createElement('br');
    div.append(divOne, divTwo, divThree, divFour, br, br);
    document.body.appendChild(div);
}
document.write('*** *** *** *** *** *** *** *** *** *** *** *** *** *** *** ***');


// - За допомоги циклу проітерувати  масив users, записати кожного юзера в сівй блок за допомоги document.createElement, розділивши всі властивості по своїм блокам , блок з адресою зробити окремим блоком, з блоками для кожної властивості
for (const user of users) {
    let div = document.createElement('div');
    let divName = document.createElement('div');
    divName.innerText = `Name: ${user.name}`;
    let divAge = document.createElement('div');
    divAge.innerText = `Age: ${user.age}`;
    let divStatus = document.createElement('div');
    divStatus.innerText = `Status: ${user.status}`;
    let divAddress = document.createElement('div');
    let divCity = document.createElement('div');
    let divCountry = document.createElement('div');
    let divStreet = document.createElement('div');
    let divHouseNumber = document.createElement('div');
    divCity.innerText = `City - ${user.address.city}`;
    divCountry.innerText = `Country - ${user.address.country}`;
    divStreet.innerText = `Street - ${user.address.street}`;
    divHouseNumber.innerText = `House number - ${user.address.houseNumber}`;
    divAddress.append(divCity, divCountry, divStreet, divHouseNumber);
    let br = document.createElement('br');
    div.append(divName, divAge, divStatus, divAddress, br);
    document.body.appendChild(div);
}
// - є сторінка rules.html. Контентом сторінки є заголовки та параграфи. Заголовки (h2) характеризують тему контенту яка вказана в параграфі.
//     створити скріпт, котрий зчитує всі заголовки, та робить в блоці з id=content з них список(ul>li), який буде змістом того, що знаходиться на сторінці.
//     Скріпт повинен працювати навіть якщо кількість блоків з заголовком та параграфом зміниться.
replace = () => {
    let content = document.getElementById('content');
    const wrapContent = document.getElementById('wrap');
    const rulesDiv = wrapContent.getElementsByClassName('rules');
    for (const item of rulesDiv) {
        let title = item.getElementsByTagName('h2');
        let paragraph = item.getElementsByTagName('p');
        let ul = document.createElement('ul');
        for (const element of title) {
            let li = document.createElement('li');
            li.innerText = element.textContent;
            ul.appendChild(li);
        }
        for (const element of paragraph) {
            let li = document.createElement('li');
            li.innerText = element.textContent;
            ul.appendChild(li);
        }
        content.appendChild(ul);
    }

}
replace();


// -Є масив котрий характеризує правила. Створити скрипт який ітерує цей масив, та робить з кожне правило в окремому блоці.
//     При цому в блоці, номер правила записати в свій блок, текст правила записати в свій окремий блок.
//     Результатом відпрацювання скріпта повинна бути структура яка міститься в блоці wrap файла rule.html
//
let rules = [
    {
        title: 'Перше правило Бійцівського клубу.',
        body: 'Не згадувати про бійцівський клуб.'
    },
    {
        title: 'Друге правило Бійцівського клубу',
        body: 'Не згадувати ніде про бійцівський клуб.'
    },
    {
        title: 'Третє правило Бійцівського клубу.',
        body: 'Боєць крикнув «стоп», видихався, відключився — бій закінчено.'
    },
    {
        title: 'Четверте правило Бійцівського клубу.',
        body: 'У бою беруть участь лише двоє.'
    },
    {
        title: `П'яте правило Бійцівського клубу.`,
        body: 'Бої йдуть один за іншим.'
    },
    {
        title: 'Шосте правило Бійцівського клубу.',
        body: 'Знімати взуття та сорочки.'
    },
    {
        title: 'Сьоме правило Бійцівського клубу.',
        body: 'Бій триває стільки, скільки потрібно.'
    },
    {
        title: 'Восьме правило Бійцівського клубу.',
        body: 'Той, хто вперше прийшов в клуб — прийме бій.'
    },

];
rules.forEach(value => {
    const div = document.createElement('div');
    const h1 = document.createElement('h1');
    h1.innerText = value.title;
    const p = document.createElement('p');
    p.innerText = value.body;
    div.append(h1, p);
    document.body.appendChild(div);
})