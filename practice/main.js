// let user = {
//     name: 'Igor',
//     surname: 'Tanechnyk',
//     age: 26,
//     wife: {
//         name: 'Yulia',
//         surname: 'Shylo',
//         age: 25,
//         skills: ['js', 'java', 'db']
//     }
// }
//
// const {name, surname, age, wife, wife: {name: wifeName, surname: wifeSurname, age: wifeAge, skills} } = user;
// console.log(name);
// console.log(surname);
// console.log(age);
// console.log(wife);
// console.log(wifeName);
// console.log(wifeSurname);
// console.log(wifeAge);
// console.log(skills);
//


// function divide(a, b) {
//     if (b === 0) {
//         throw new Error("Ділення на нуль неможливе.");
//     }
//     return a / b;
// }
//
// try {
//     var result = divide(10, 0);
//     console.log("Результат ділення:", result);
// } catch (error) {
//     console.log("Виникла помилка:", error.message);
// }

let user = {
    name: 'vasya',
    age: 21,
    skills: ['js', 'java']
}

let copy = {...user, skills: [...user.skills]};
console.log(copy);
console.log(user.skills === copy.skills);


