function UserCard(key) {
    let balance = 100;
    let transactionLimit = 100;
    let historyLogs = [];
    this.key = key;

    this.putCredits = function(amount) {
        balance += amount;
        console.log(`Ви успішно поповнили баланс своєї карти на ${amount} грн. Ваш поточний баланс ${balance} грн`);

        let operationTime = getCurrentDateTime();
        let operation = new HistoryLogs('Поповнення картки', `${amount}`, `${operationTime}`);
        historyLogs.push(operation);
    }

    this.takeCredits = function (amount) {
        if (balance >= amount && amount <= transactionLimit) {
            balance -= amount;
            console.log(`Ви успішно зняли ${amount} грн зі своєї карти. Ваш поточний баланс ${balance} грн`);
        }
        else {
            console.error('Сорян, Ви не можете зняти гроші з картки :(');
            if (amount > transactionLimit) {
                console.error(`Сума зняття перевищує вказаний вами ліміт транзакцій`)
            }
            else {
                console.error(`Недостатньо грошей на вашому рахунку`);
            }
        }
        let operationTime = getCurrentDateTime();
        let operation = new HistoryLogs('Зняття з картки', `${amount}`, `${operationTime}`);
        historyLogs.push(operation);
    }

    this.setTransactionLimit = function (limit) {
        transactionLimit = limit;
        console.log(`Ви успішно встановили ліміт ${limit} грн на свою картку`);

        let operationTime = getCurrentDateTime();
        let operation = new HistoryLogs('Зміна ліміту для транзакцій', `${limit}`, `${operationTime}`);
        historyLogs.push(operation);
    }

    this.transferCredits = function (suma, recipient) {
        console.log(`Зауважте! При переказі коштів комісія 0.5%. Ваш поточний баланс: ${balance}`);
        if(balance >= suma * 0.005 && suma <= transactionLimit) {
            recipient.putCredits(suma);
            balance -= (suma * 0.005) + suma;
        }
        else {
            console.error(`Сорян, Ви не зможете здійснити цю транзакцію :(`);
        }
    }

    this.getCardOptions = function () {
        console.log(`key - ${this.key}`);
        console.log(`поточний баланс - ${balance}`);
        console.log(`ліміт транзакцій - ${transactionLimit}`);
        console.log(`історія операцій:`);
        historyLogs.map(value => {
            for (const key in value) {
                console.log(`${key} - ${value[key]}`);
            }
        })
    }
}
const getCurrentDateTime = () => {
    const date = new Date();

    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    const hours = date.getHours().toString().padStart(2, '0');
    const minutes = date.getMinutes().toString().padStart(2, '0');
    const seconds = date.getSeconds().toString().padStart(2, '0');

    return `${day}/${month}/${year}, ${hours}:${minutes}:${seconds}`;
};
function HistoryLogs(operationType, credits, operationTime) {
    this.operationType = operationType;
    this.credits = credits;
    this.operationTime = operationTime;
}

const card1 = new UserCard(1);
const card2 = new UserCard(3);
card1.putCredits(1000);
console.log('*****************************************');
card1.takeCredits(200);
console.log('*****************************************');
card1.getCardOptions();
console.log('*****************************************');
card1.setTransactionLimit(10000);
console.log('*****************************************');
card1.takeCredits(200);
console.log('*****************************************');
card1.getCardOptions();
console.log('*****************************************');
card1.transferCredits(430, card2);
card1.getCardOptions();
console.log('*****************************************');



class UserAccount {
    constructor(name, cards) {
        this.name = name;
        this.cards = cards;
    }
    addCard(key) {
        if (this.cards.length <= 3) {
            let newCard = new UserCard(key);
            this.cards.push(newCard);
        }
    }
    getCardByKey(key) {
        return this.cards.find(value => value.key === key);
    }
}
let user = new UserAccount('Bobik', []);
user.addCard(2);
user.addCard(1);
let cardOne = user.getCardByKey(1);
let cardTwo = user.getCardByKey(2);
console.log(cardOne);
cardOne.putCredits(500);
console.log('*****************************************');
cardOne.setTransactionLimit(800);
console.log('*****************************************');
cardOne.transferCredits(300, cardTwo);
console.log('*****************************************');
cardTwo.takeCredits(50);
console.log('*****************************************');
cardOne.getCardOptions();
console.log('*****************************************');
cardTwo.getCardOptions();
