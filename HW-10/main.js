// Стоврити форму з трьома полями для name,sruname,age та кнопкою.
// При натисканні на кнопку зчитати данні з полів, та вивести об'єкт в документ.
// Іншими словами : заповниои форму, натиснули кнопку, під формою з'явився блок з вашим об'єктом
let formOne = document.forms.formOne;

formOne.onsubmit = function (e) {
    e.preventDefault();
    let valuesFromInputs = {};
    let inputs = formOne.querySelectorAll('input');
    for (const input of inputs) {
        valuesFromInputs[input.getAttribute('name')] = input.value;
    }
    let div = document.createElement('div');
    for (const property in valuesFromInputs) {
        if (valuesFromInputs.hasOwnProperty(property)) {
            let span = document.createElement('span');
            span.innerText = `${property}: ${valuesFromInputs[property]}`;
            div.appendChild(span);
            div.appendChild(document.createElement('br'));
        }
    }
    document.body.appendChild(div);
}


// ==========================
    // є сторінка, на якій є блок, я кому знаходиьтся цифра. написати код, який при кожному перезавантажені сторінки буде додавати до неї +1
let counter = document.getElementById(`number`);
onload = function (e) {
    let initialNumber = parseInt(localStorage.getItem("counter")) || 0;
    counter.textContent = (initialNumber + 1).toString();
    localStorage.setItem(`counter`, initialNumber + 1);
}
let reset = document.getElementsByClassName('reset')[0];
reset.onclick = function () {
    localStorage.clear()
}


// ==========================
// Є сторінка index.html (назва довільна), при відвідуванні якої в локальне сховще, в масив sessions зберігається інформація про дату та час відвідування сторінки. Є ще сторінка sessions.html (назва довільна), при відвідуванні якої потрібно відмалювати всю інформацію про відвідування сторінки index.html. Інфу НЕ виводити в консоль, а побудувати дом структуру під кожну сессію
// =========================
//     зробити масив на 100 об'єктів та дві кнопки prev next
// при завантажені сторінки з'являються перші 10 об'єктів.
//     При натисканні next виводяться настпні 10 об'єктів
// При натисканні prev виводяться попередні 10 об'єктів
let arr = [];
let num = 0;
for (let i = 0; i < 100; i++) {
    let object = {
        property1: `value${++num}`,
        property2: `value${++num}`,
        property3: `value${++num}`,
        property4: `value${++num}`
    };
    arr.push(object);
}

let array = JSON.parse(JSON.stringify(arr));
let buttonPrev = document.getElementsByName(`prev`);
let buttonNext = document.getElementsByName(`next`);

let ul = document.createElement(`ul`);

let start = parseInt(localStorage.getItem(`start`)) || 0;
let end = parseInt(localStorage.getItem(`end`)) || 10;

for (let i = start; i < end; i++) {
    let li = document.createElement(`li`);
    li.append(JSON.stringify(array[i]));
    ul.append(li);
    ul.style.fontSize = `10px`;
    document.body.append(ul)
}
buttonNext[0].addEventListener(`click`, function () {
    if (end < 100){
        let y = end + 10;
        let i = start + 10;
        localStorage.setItem(`start`,JSON.stringify(i));
        localStorage.setItem(`end`,JSON.stringify(y));

    }
});
buttonPrev[0].addEventListener(`click`, function () {
    if (start >0 ){
        let y = end - 10;
        let i = start - 10;
        localStorage.setItem(`start`,JSON.stringify(i));
        localStorage.setItem(`end`,JSON.stringify(y));

    }
})



// - Створити довільний елемент з id = text та створити кнопку.Використовуючи JavaScript, зробіть так, щоб при натисканні на кнопку зникав елемент з id="text".
let content = document.createElement('div');
content.id = "text";
content.innerText = "lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem lorem";
document.body.appendChild(content);

let clearBtn = document.createElement('button');
clearBtn.innerText = 'clear'
document.body.appendChild(clearBtn);

clearBtn.onclick = function (e) {
    e.preventDefault();
    content.innerText = "";
}



//     - створити інпут який приймає вік людини та кнопку яка підтверджує дію.При натисканні на кнопку зчитати інформацію з інпуту та перевірити вік чи меньше він ніж 18, та повідомити про це користувача
let formAge = document.forms.ageCondition;
let ageInput = formAge[0];
let btnCheckAge = formAge[1];

btnCheckAge.onclick = function(e) {
    e.preventDefault();
    let age = ageInput.valueAsNumber;
    let paragraph = document.createElement('p');
    if (age >= 18) {
        paragraph.innerText = 'Тобі більше 18';
    } else {
        paragraph.innerText = 'Тобі менше 18';
    }
    document.body.appendChild(paragraph);
};


// *** Створити 3 інпута та кнопку. Один визначає кількість рядків, другий - кількість ячеєк, третій вмиіст ячеєк.
//     При натисканні кнопки, вся ця інформація зчитується і формується табличка, з відповідним вмістом.
// (Додатковачастина для завдання)
//
// *** (подібне було вище, але...будьте уважні в другій частині) створити сторінку з довільним блоком, в середині якого є значення "100грн"
// при перезавантаженні сторінки до значаення додається по 10грн, але !!!
//     зміна ціни відбувається тільки на перезавантаження, які відбулись пізніше ніж 10 секунд після попереднього.
//     При перезавантаженні, яке відбулось раніше ніж минуло 10 секунд - нічого не відбувається