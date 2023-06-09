// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/users
//     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
//     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
//
const container = document.getElementsByClassName('container')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for(const user of users) {
            let div = document.createElement('div');
            div.classList.add('user-block');
            div.innerHTML = `<h4>id: ${user.id}, name: ${user.name}</h4> <button class="btn-post">all posts</button>`;
            // // let btn = document.createElement('button');
            // // btn.innerText = `all posts`;
            // ${btn}`;
            container.append(div);
        }
        handleButtonEvents();
        // document.body.appendChild(div);
    });
function handleButtonEvents() {
    let modal = document.getElementById('myModal');
    let btnModalOpenList = document.querySelectorAll(".btn-post");
    console.log(btnModalOpenList);

    // Add click event handler to each button
    btnModalOpenList.forEach((btn) => {
        btn.addEventListener('click', function() {
            modal.style.display = 'block';
            // Add code to handle fetching and displaying posts
        });
    });

    let spanX = document.getElementById('close');
    spanX.addEventListener('click', function() {
        modal.style.display = 'none';
    });
}
// let modal = document.getElementById('myModal');
// let btnModalOpenList = document.querySelectorAll(".btn-post");
// console.log(btnModalOpenList);
// btnModalOpenList.forEach((btnModalOpen) => {
//     btnModalOpen.onclick = function(e) {
//         modal.style.display = 'block';
//         // let userId = this.id.split('-')[2];
//         // let description = document.getElementById('description');
//         //
//         // fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
//         //     .then((response) => response.json())
//         //     .then((posts) => {
//         //         let postList = '';
//         //         for (const post of posts) {
//         //             postList += `Title: ${post.title}\nBody: ${post.body}\n\n`;
//         //         }
//         //         description.innerText = postList;
//         //     })
//     }
// });

// let spanX = document.getElementById('close');
// spanX.onclick = function(e) {
//     let modal = document.getElementById('myModal');
//     modal.style.display = 'none';
// }

// let modal = document.getElementById('myModal');
// // let btnModalOpen = document.getElementById('btn-post');
// let btnModalOpen = document.getElementById('btn-post');
// // let btnModalOpen = document.getElementsByClassName('open-btn')[0];
// btnModalOpen.onclick = function(e) {
//     modal.style.display = 'block';
//     // let description = document.getElementById('description');
//     // fetch(`https://jsonplaceholder.typicode.com/posts?userID=${user.id}`)
//     //     .then((response) => response.json())
//     //     .then((post) => {
//     //         description.innerText = post;
//     //     })
// }
//
// let spanX = document.getElementById('close');
// spanX.onclick = function(e) {
//     let modal = document.getElementById('myModal');
//     modal.style.display = 'none';
// }
// spanX.addEventListener('click', function (e) {
//     // e.preventDefault();
//     modal.style.display = 'none';
//     // let modal = document.getElementById('myModal');
//     // modal.style.display = 'none';
// });



// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
//
// - Імітуємо наповнення інтернет магазину товарами :
//     Створити форму з наступними полями :
//     - назва товару
// - кількість товару
// - ціна товару
// - картинка товару (посилання з інтернету)
// Зберігати товари в масив в локалсорадж. При збережені товару з форми, action не повинно відбуватись (preventDefault)
// створити елемент <a href='list.html'> На сторінку товарів</a>, та list.html, при переході на який відобразити на сторінці всі товари.
// На сторінці  list.html побудувати кнопку яка видаляє всі товари з корзини та локалстораджа.
//     До кожного товару додати кнопку, при кліку на яку з лс видаляється конкретний обраний  товар