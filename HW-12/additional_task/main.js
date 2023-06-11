// // 1.
// // Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// // https://jsonplaceholder.typicode.com/users
// //     кожному елементу юзера створити кнопку, при клику на яку в окремий блок виводяться всі пости поточного юзера.
// //     Кожному елементу post створити кнопку, при клику на яку в окремий блок виводяться всі коментарі поточного поста
// //
const container = document.getElementsByClassName('container')[0];
fetch('https://jsonplaceholder.typicode.com/users')
    .then((response) => response.json())
    .then((users) => {
        for (const user of users) {
            const userBlock = document.createElement('div');
            userBlock.classList.add('user-block');
            const info = document.createElement('div');
            info.innerText = `id: ${user.id}, name: ${user.name}`;
            const button = document.createElement('button');
            button.classList.add('btn-post');
            button.innerText = 'all posts';

            userBlock.append(info, button);
            container.append(userBlock);

            button.addEventListener('click', () => {
                const postContainer =  document.getElementById('post-container');
                postContainer.innerText = ``;
                fetch('https://jsonplaceholder.typicode.com/posts?userId='+user.id)
                    .then((response) => response.json())
                    .then((posts) => {
                        for (const post of posts) {
                            const postId = post.id;

                            const div = document.createElement('div');
                            div.innerHTML = `<b>title: </b>${post.title} <br> <b>body: </b>${post.body}<br>`;
                            const btn = document.createElement('button');
                            btn.innerText = 'all comments';
                            btn.classList.add('btn-comment');
                            div.append(btn, document.createElement('br'), document.createElement('br'));
                            postContainer.appendChild(div);
                            btn.addEventListener('click', () => {
                                const commentsBlock = document.getElementById('comments-container');
                                commentsBlock.innerText = '';
                                fetch('https://jsonplaceholder.typicode.com/comments?postId='+postId)
                                    .then((response) => response.json())
                                    .then((comments) => {
                                        for (const comment of comments) {
                                            const commentBlock = document.createElement('div');
                                            commentBlock.innerHTML = `<b>name:</b> ${comment.name} <br> <b>email:</b> ${comment.email} <br> <b>body:</b> ${comment.body}`
                                            commentsBlock.append(commentBlock, document.createElement('br'), document.createElement('br'));
                                        }
                                    })
                            })
                        }
                    })
            })
        }
    });


// 1.
// Отримати відповідь з цього ресурсу відповідь, та вивести в документ як в прикладі на занятті
// https://jsonplaceholder.typicode.com/posts
//     зробити кнопку до кожного поста. при кліку на яку виводяться в окремий блок всі коментарі поточного поста
//
fetch('https://jsonplaceholder.typicode.com/posts')
    .then((response) => response.json())
    .then((posts) => {
        const postsContainer = document.getElementById('posts-container-task2');

        for (const post of posts) {
            const postContainer = document.createElement('div');
            postContainer.innerHTML = `<b>title: </b> ${post.title} <br> <b>body: </b> ${post.body}`;

            const button = document.createElement('button');
            button.innerText = 'show comments';
            button.classList.add('show-comments');

            postsContainer.append(postContainer, button);
            // postsContainer.innerHTML += `<br><br><br>`;

            const postId = post.id;

            button.addEventListener('click', () => {
                fetch('https://jsonplaceholder.typicode.com/comments?postId='+postId)
                    .then((response) => response.json())
                    .then((comments) => {
                        for (const comment of comments) {
                            const commentBlock = document.createElement('div');
                            commentBlock.innerHTML = `<b>name:</b> ${comment.name} <br> <b>email:</b> ${comment.email} <br> <b>body:</b> ${comment.body}`
                            postContainer.append(document.createElement('br'), document.createElement('br'), commentBlock, document.createElement('br'), document.createElement('br'));
                        }
                    })
            });
        }
    })


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
const products = [
    {
        id: 1,
        name: "iPhone 12",
        image: "https://apiua.icoola.ua/aimeos/1.d/files/b/a/bafc3e4c_apple-12-iphone-128gb-icoola-purple1.jpg",
        price: 999,
    },
    {
        id: 2,
        name: "Samsung Galaxy S21",
        image: "https://files.foxtrot.com.ua/PhotoNew/img_0_60_8803_0_1_637976439084618029.webp",
        price: 899,
    },
    {
        id: 3,
        name: "Google Pixel 5",
        image: "https://i.allo.ua/media/catalog/product/cache/1/image/524x494/602f0fa2c1f0d1ba5e241f914e856ff9/g/o/google_pixel_5_just_black_1_1.jpg",
        price: 699,
    },
    {
        id: 4,
        name: "Sony PlayStation 5",
        image: "https://content1.rozetka.com.ua/goods/images/big/134042269.jpg",
        price: 499,
    },
    {
        id: 5,
        name: "Nintendo Switch",
        image: "https://content.rozetka.com.ua/goods/images/big/231289461.jpg",
        price: 299,
    },
];

const productForm = document.getElementById('product-form');
productForm.addEventListener('submit', (e)=> {
    e.preventDefault();
    const form = document.getElementById('product-form');

    const productName =form['product-name'].value;
    const productCount =form['product-quantity'].value;
    const productPrice =form['product-price'].value;
    const productImage =form['product-image'].value;

    const backet = JSON.parse(localStorage.getItem('basket')) || [];
    backet.push({
        productName,
        productCount,
        productPrice,
        productImage
    });
    localStorage.setItem('basket', JSON.stringify(backet));

    form.reset();
})


