// давно в мене так мозок не кипів))

// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Якщо людина вводить слово і воно міститься в масиві не цензурних слів
// кинути алерт з попередженням.
//     Перевірку робити при натисканні на кнопку

let arr1 = ['ідіот', 'дурак', 'капец'];
let form1 = document.forms.form1;
form1.check1.onclick = function (e) {
    e.preventDefault();
    let inputText = form1.wordInArray.value;
    for (const item of arr1) {
        if (item === inputText) {
            alert('Аяяйяййяй))) де ж так можна робити');
        }
    }
}


// - Сворити масив не цензцрних слів.
//     Сворити інпут текстового типу.
//     Потрібно перевіряти чи не містить ціле речення в собі погані слова.
//     Кинути алерт з попередженням у випадку якщо містить.
//     Перевірку робити при натисканні на кнопку

let form2 = document.forms.form2;
form2.check2.onclick = function (e) {
    e.preventDefault();
    let inputText = form2.isInArray.value;
    let arrWords = inputText.split(' ');
    arrWords.forEach(value => {
        if (arr1.includes(value)) {
            alert('Бінго))) те слово є у реченні');
        }
    })
}


// - Создайте меню, которое раскрывается/сворачивается при клике
let menuListDiv = document.getElementsByClassName('menu')[0];
let btnMenu = document.querySelectorAll(`.hide-menu`)[0];

btnMenu.addEventListener('click', function (e) {
    e.preventDefault();
    menuListDiv.classList.toggle('hidden');
});


// - Создать список комментариев , пример объекта коментария - {title : 'lorem', body:'lorem ipsum dolo sit ameti'}.
//     Вывести список комментариев в документ, каждый в своем блоке.
//     Добавьте каждому комментарию по кнопке для сворачивания его body.
let comments = [
    {
        title: 'title1',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea eligendi ex exercitationem fuga nobis praesentium\n'
            + 'provident quod reiciendis similique. Culpa distinctio in libero odit porro reiciendis sapiente temporibus veniam.'
    },
    {
        title: 'title2',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea eligendi ex exercitationem fuga nobis praesentium\n'
            + 'provident quod reiciendis similique. Culpa distinctio in libero odit porro reiciendis sapiente temporibus veniam.Lorem ipsum ' +
            'dolor sit amet, consectetur adipisicing elit. Aliquid ea eligendi ex exercitationem fuga nobis praesentium\n' +
            'provident quod reiciendis similique. Culpa distinctio in libero odit porro reiciendis sapiente temporibus veniam.'
    },
    {
        title: 'title3',
        body: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea eligendi ex exercitationem fuga nobis praesentium\n' +
            'provident quod reiciendis similique. Culpa distinctio in libero odit porro reiciendis sapiente temporibus veniam.' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea eligendi ex exercitationem fuga nobis praesentium\n' +
            'provident quod reiciendis similique. Culpa distinctio in libero odit porro reiciendis sapiente temporibus veniam.' +
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid ea eligendi ex exercitationem fuga nobis praesentium\n' +
            'provident quod reiciendis similique. Culpa distinctio in libero odit porro reiciendis sapiente temporibus veniam.'
    }];
let container = document.createElement('div');
container.classList.add('comments');
addCommentsToBody = (comments) => {
    let ul = document.createElement('ul');
    for (const comment of comments) {
        let li = document.createElement('li');
        let h2 = document.createElement('h2');
        // h2.classList.add('title');
        h2.onclick = function (e) {
            e.preventDefault();
            li.classList.toggle('hidden');
        }
        h2.innerHTML = `${comment.title}`;
        let description = document.createElement('p');
        description.innerHTML = `${comment.body}`;
        li.append(h2, description);
        ul.appendChild(li);
    }
    container.appendChild(ul);
    document.body.appendChild(container);
}
addCommentsToBody(comments);


// - Создайте кнопку, при клике на которую, она будет скрывать сама себя.
let formWithBtn = document.forms.disappearingBtn;
formWithBtn.btn.onclick = function (e) {
    e.preventDefault();
    this.style.display = 'none';
}


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші вивести в консоль інформацію про блок або елемент на який відбувся клік.
//     Інформація яку потрібно вивести: Назва тегу, список класів, список ід, розміри в форматі висота*ширина
// leftMouseClick = (e) => {
//     if (e.button === 0) {
//         e.preventDefault();
//         console.log(e);
//     }
// }
window.onclick = function (e) {
    e.preventDefault();
    console.log(`Tag - ${e.target.tagName.toLowerCase()}`);
    console.log(`Class list - ${e.target.classList}`);
    console.log(`Id list - ${e.target.id}`);
    console.log(`Width | Height - ${e.target.offsetWidth} | ${e.target.offsetHeight}`);
}


// - Описати скріпт, котрий, якщо доєднати до будь-якої сторінки дозволить зробити наступне:
//     При лівому кліку миші  зробить popup (спливаючий блок) в якому буде вся інформація про блок.
//     Інформація яку потрібно вивести в popup: Назва тегу, список класів, список ід, розміри в форматі висота*ширина

//треба розкоментувати, бо воно заважало

// window.onclick = function(e) {
//     let modal = document.getElementById('myModal');
//     modal.style.display = 'block';
//     let description = document.getElementsByClassName('description')[0];
//     description.innerHTML = `
//     Tag - ${e.target.tagName.toLowerCase()}\n
//     Class list - ${e.target.classList}\n
//     Id list - ${e.target.id}\n
//     Width | Height - ${e.target.offsetWidth} | ${e.target.offsetHeight}
//     `
// }
//
// // spanX.onclick = function(e) {
// //     let modal = document.getElementById('myModal');
// //     modal.style.display = 'none';
// // }
// let spanX = document.getElementById('close');
// spanX.addEventListener('click', function (e) {
//     // e.preventDefault();
//     let modal = document.getElementById('myModal');
//     modal.style.display = 'none';
// });
//я хз, шо тут сталось. я вже не знаю, скільки часу сиджу над тою помилкою, щоб закривалась модалка) і я здаюсь


// -- взять массив пользователей
let usersWithAddress = [{
    id: 1, name: 'vasya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}
}, {id: 2, name: 'petya', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 1}}, {
    id: 3, name: 'kolya', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 121}
}, {id: 4, name: 'olya', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 90}}, {
    id: 5, name: 'max', age: 30, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 115}
}, {id: 6, name: 'anya', age: 31, status: false, address: {city: 'Kyiv', street: 'Shevchenko', number: 2}}, {
    id: 7, name: 'oleg', age: 28, status: false, address: {city: 'Ternopil', street: 'Shevchenko', number: 22}
}, {id: 8, name: 'andrey', age: 29, status: true, address: {city: 'Lviv', street: 'Shevchenko', number: 43}}, {
    id: 9, name: 'masha', age: 30, status: true, address: {city: 'Kyiv', street: 'Shevchenko', number: 12}
}, {id: 10, name: 'olya', age: 31, status: false, address: {city: 'Lviv', street: 'Shevchenko', number: 16}}, {
    id: 11, name: 'max', age: 31, status: true, address: {city: 'Ternopil', street: 'Shevchenko', number: 121}
}];
// - Создать три чекбокса. Каждый из них активирует фильтр для вышеуказаного массива. Фильтры могут работать как вместе так и по отдельности.
// 1й - отфильтровывает пользователей со статусом false (осталяет со статусом false)
// 2й - оставляет старше 29 лет включительно
// 3й - оставляет тех у кого город киев
// Данные выводить в документ
let divContainer = document.getElementsByClassName('div-container')[0];
displayObj = (obj) => {
    let div = document.createElement('div');
    divContainer.appendChild(div);
    for (const key in obj) {
        if (typeof (obj[key]) === 'object') {
            displayObj(obj[key]);

        } else {
            // console.log(`${key} --- ${obj[key]}`);
            div.innerHTML += `${key} --- ${obj[key]}`;
            div.appendChild(document.createElement('br'));
        }
    }
}

let formCheckbox = document.forms.checkbox;

formCheckbox.filterFalse.onclick = function (e) {
    // document.body.appendChild(divContainer);
    let filteredUsersByFalse = usersWithAddress.filter(value => value.status === false);
    displayObj(filteredUsersByFalse);
    divContainer = "";
}
formCheckbox.filterAge.onclick = function (e) {
    // document.body.appendChild(divContainer);
    let filteredUsersByAge = usersWithAddress.filter(value => value.age > 29);
    displayObj(filteredUsersByAge);
    divContainer = "";
}
formCheckbox.filterCity.onclick = function (e) {
    // document.body.appendChild(divContainer);
    let filteredUsersByCity = usersWithAddress.filter(value => value.address.city === 'Kyiv');
    displayObj(filteredUsersByCity);
    divContainer = "";
}


// *****(Прям овердоз с рекурсией) Создать функцию которая принимает какой-либо элемент DOM-структуры .Функция создает в боди 2 кнопки (назад/вперед)
// при нажатии вперед, вы переходите к дочернему элементу, при еще одном нажатии на "вперед", вы переходите к следующему дочернему элементу (лежащему на одном уровне)
// НО если у (какого-либо)дочеренего элемента есть дети, то нажатие "вперед" позволяет нам войти внутрь элемента и  выводит первого ребенка. и тд.
//     Когда все дети заканчиваются, мы выходим из данного дочернего элемента и переходим к следующему, лежащему с ним на одном уровне


// - Напишите «Карусель» – ленту изображений, которую можно листать влево-вправо нажатием на стрелочки.
let arrImg = [
    {
        img: 'https://w.forfun.com/fetch/70/7047b702475924ba8f8044b5b5ca56ba.jpeg'
    },
    {
        img: 'https://w.forfun.com/fetch/4d/4d671cfe78cbb63a617875e1f6023157.jpeg'
    },
    {
        img: 'https://kartinkin.net/uploads/posts/2022-02/1644872533_5-kartinkin-net-p-kotiki-kartinki-5.jpg'
    },
    {
        img: 'https://klike.net/uploads/posts/2019-07/medium/1564314090_3.jpg'
    },
    {
        img: 'https://funart.pro/uploads/posts/2022-06/1654688040_2-funart-pro-p-milie-kotiki-do-slez-zhivotnie-krasivo-fot-2.jpg'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQos3aK3KKC1JqRxuLqv_B0mQfqFaj3xNQYlisx_nztkbYWCYaZ6qUYix0_3rfm07shYro&usqp=CAU'
    },
    {
        img: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSySUHz9B2SH6RpTOp65OD6oT_KCeLIUrVwMYi9AEM-G9lMwmADb1y8_m66e9W8dBe1zro&usqp=CAU'
    },
    {
        img: 'https://krasivosti.pro/uploads/posts/2021-04/1617953219_51-p-koshki-malenkie-milie-55.jpg'
    },
    {
        img: 'https://celes.club/uploads/posts/2022-10/1666880405_1-celes-club-p-samie-milie-koshki-na-svete-vkontakte-1.jpg'
    },
]
let index = 0;

let containerImg = document.createElement('div');
containerImg.classList.add('containerImg');

displayNext = (arrImg, index, containerImg) => {
    containerImg.innerHTML = "";
    for (let i = index; i < (index + 3); i++) {
        let img = document.createElement('img');
        img.src = arrImg[i].img;
        img.classList.add('img');
        containerImg.appendChild(img);
    }
}

displayPrev = (arrImg, index, containerImg) => {
    containerImg.innerHTML = "";
    for (let i = index - 1; i >= (index - 3); i--) {
        let img = document.createElement('img');
        img.src = arrImg[i].img;
        img.classList.add('img');
        containerImg.appendChild(img);
    }
}

document.body.appendChild(containerImg);
displayNext(arrImg, index, containerImg);

let buttons = document.createElement('div');
buttons.classList.add('buttons');
let prevBtn = document.createElement('button');
prevBtn.innerHTML = `prev`;
let nextBtn = document.createElement('button');
nextBtn.innerHTML = `next`;
buttons.append(prevBtn, nextBtn);
document.body.appendChild(buttons);

prevBtn.onclick = function (e) {
    e.preventDefault();
    displayPrev(arrImg, index, containerImg);
    index -= 3;
}

nextBtn.onclick = function (e) {
    e.preventDefault();
    displayNext(arrImg, index, containerImg);
    index += 3;
}


//     Завдання важке для розуміння, але дуже легке в реалізації. Тут треба буде погуглити
// *** При виділені сегменту тексту на сторінці він стає жирний/курсивний/або якось іншим способом змінює свій стан
onmouseup = function (e) {
    let selectedText = document.getSelection().toString();
    if (selectedText !== "") {
        formatting(selectedText);
    }
}
function formatting(selectedText) {
    let range = window.getSelection().getRangeAt(0);
    let newNode = document.createElement("b");
    newNode.style.fontStyle = 'italic';
    newNode.innerHTML = selectedText;

    range.deleteContents();
    range.insertNode(newNode);
}
