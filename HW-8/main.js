// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}


// створити пустий масив, наповнити його 10 об'єктами new User(....)
let users = [
    new User(6, 'vasya', 'kokos', 'vasyakokos@gmail.com', 7380),
    new User(3, 'petya', 'abrikos', 'petyaabrikos@gmail.com', 7381),
    new User(10, 'olya', 'fedik', 'olyafedik@gmail.com', 7382),
    new User(212, 'masha', 'melnyk', 'mashamelnyk@gmail.com', 7383),
    new User(13, 'oksana', 'buksa', 'oksanabuksa@gmail.com', 7384),
    new User(7, 'arsen', 'bobul', 'arsenbobul@gmail.com', 7385),
    new User(1, 'nazik', 'koter', 'nazikkoter@gmail.com', 7386),
    new User(4, 'anton', 'kozak', 'antonkozak@gmail.com', 7387),
    new User(5, 'yana', 'buchik', 'yanabuchik@gmail.com', 7388),
    new User(8, 'galya', 'kopchyk', 'galyakopchyk@gmail.com', 7389)
]
console.log(users);


// - Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)
const filteredUsersWithEvenId = users.filter(value => value.id % 2 === 0);
console.log(filteredUsersWithEvenId);


// - Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort)
const filteredUsersWithEvenIdByGrowth = filteredUsersWithEvenId.slice().sort((user1, user2) => user1.id - user2.id);
console.log(filteredUsersWithEvenIdByGrowth);


// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}


// створити пустий масив, наповнити його 10 об'єктами Client
let clients = [
    new Client(1, 'sasha', 'popad', 'sashapopad@gmail.com', 4120, ['shafa', 'iphone', 'car']),
    new Client(2, 'diana', 'zirka', 'dianazirka@gmail.com', 4121, ['computer']),
    new Client(3, 'vika', 'chaochao', 'vikachaochao@gmail.com', 4122, ['milka', 'chocolate', 'ice', 'shake', 'glasses']),
    new Client(4, 'kokos', 'abrikos', 'kokosabrokis@gmail.com', 4123, ['banana', 'bread', 'audi', 'smth']),
    new Client(5, 'oleg', 'volod', 'olegvolod@gmail.com', 4124, ['apple', 'window', 'domestos', 'pills']),
    new Client(6, 'vova', 'cheri', 'vovacheri@gmail.com', 4125, ['sofa', 'iphone14', 'ball']),
    new Client(7, 'marichka', 'viy', 'marichkaviy@gmail.com', 4126, ['cherry', 'iphone', 'car', 'pizza']),
    new Client(8, 'sever', 'zayats', 'severzayats@gmail.com', 4127, ['soap', 'shampoo']),
    new Client(9, 'chao', 'chao', 'chaochao@gmail.com', 4128, ['soap', 'shampoo', 'salt']),
    new Client(10, 'seriy', 'kondratiuk', 'seriykondratiuk@gmail.com', 4129, ['paint']),
]
console.log(clients);


// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)
let sortedClientsByGrowthOrder = clients.slice().sort((client1, client2) => client1.order.length - client2.order.length);
console.log(sortedClientsByGrowthOrder);


// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
function Car (model, producer, year, maxSpeed, engineCapacity) {
    this.model = model;
    this.producer = producer;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.engineCapacity = engineCapacity;
    this.driver = null;

    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометри на годину`);
    }
    this.increaseMaxSpeed = function (newSpeed) {
        this.maxSpeed += newSpeed;
    }
    this.changeYear = function (newValue) {
        this.year = newValue;
    }
    this.addDriver = function (obj) {
        this.driver = obj;
    }

    this.info = function () {
        console.log(`
        model - ${this.model},
        producer - ${this.producer},
        year - ${this.year},
        max speed - ${this.maxSpeed},
        engine capacity - ${this.engineCapacity}
        driver - ${JSON.stringify(this.driver)}`)
    }
    // for (const driverKey in this.addDriver({name: 'Marichka', age: 32})) {
    //     console.log(`${driverKey}: ${this.addDriver[driverKey]}`)
    // }
}
let car = new Car('audi', 'Germany', 2022, 152, 2967);
car.drive();
car.info()
car.increaseMaxSpeed(21);
car.changeYear(2023);
car.addDriver({name: 'Marichka', age: 18})
car.drive();
car.info();
console.log('------------------------------------------------------------------------');


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`
// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`
// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed
// -- changeYear (newValue) - змінює рік випуску на значення newValue
// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car
class NewCar {
    constructor(model, producer, year, maxSpeed, engineCapacity) {
        this.model = model;
        this.producer = producer;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.engineCapacity = engineCapacity;
        this.driver = null;
    }
    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed} кілометри на годину`);
    }
    increaseMaxSpeed(newSpeed) {
        this.maxSpeed += newSpeed;
    }
    changeYear(newValue) {
        this.year = newValue;
    }
    addDriver(obj) {
        this.driver = obj;
    }
    info() {
        console.log(`
        model - ${this.model},
        producer - ${this.producer},
        year - ${this.year},
        max speed - ${this.maxSpeed},
        engine capacity - ${this.engineCapacity}
        driver - ${JSON.stringify(this.driver)}`)
    }
}
let car2 = new NewCar('volkswagen', 'germany', 2021, 132, 2601);
car2.drive();
car2.info();
car2.increaseMaxSpeed(9);
car2.changeYear(2018);
car2.addDriver({name: 'pupkin', age: 32, status: false});
car2.info();
console.log('------------------------------------------------------------------------');


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.
// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.
class Cinderella {
    constructor(name, age, footSize) {
        this.name = name;
        this.age = age;
        this.footSize = footSize;
    }
}
class Prince {
    constructor(name, age, foundShoe) {
        this.name = name;
        this.age = age;
        this.foundShoe = foundShoe;
    }
}
cindarellas = [
    new Cinderella('cindarella1', 32, 36),
    new Cinderella('cindarella2', 18, 38),
    new Cinderella('cindarella3', 34, 35),
    new Cinderella('cindarella4', 45, 36),
    new Cinderella('cindarella5', 56, 38),
    new Cinderella('cindarella6', 31, 37),
    new Cinderella('cindarella7', 36, 41),
    new Cinderella('cindarella8', 33, 39),
    new Cinderella('cindarella9', 28, 34),
    new Cinderella('cindarella10', 25, 37)
]
const prince = new Prince('Jann', 29, 41);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.
let foundCinderella = [];
for (let i = 0; i < cindarellas.length; i++) {
    if (cindarellas[i].footSize === prince.foundShoe) {
        foundCinderella.push(cindarellas[i]);
    }
}
console.log(foundCinderella);

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку
let foundCindarella2 = cindarellas.find(value => value.footSize === prince.foundShoe);
console.log(foundCindarella2);

