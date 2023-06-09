// зробити файл users.html
// з ендпоінту http://jsonplaceholder.typicode.com/users отримати всіх користувачів
//     вивести їх id + name списком та додати посилання з href = user-details.html?id=XXX (замість ХХХ - айді юзера)
// при кліку на посилання перехід на відповідну сторінку, на якій буде вся інформація про користувача (всі 15 полів) отримана через додатковий запит (https://jsonplaceholder.typicode.com/users/XXX   ХХХ - айді користувача)

let url = new URL('http://jsonplaceholder.typicode.com/users');
let container = document.getElementsByClassName('container')[0];
fetch(url)
    .then((response) => response.json())
    .then((value) => {
        for (const item of value) {
            let ul = document.createElement('ul');
            let li = document.createElement('li');
            let a = document.createElement('a');
            a.innerText = `id: ${item.id} - name: ${item.name}`;
            a.href = `details.html?id=${item.id}`;
            li.appendChild(a);
            ul.appendChild(li);
            container.appendChild(ul);
        }
    });




