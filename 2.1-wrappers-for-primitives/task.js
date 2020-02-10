'use script'
function calculateMortgage() {
    let percent = window.percent.value;
    let contribution = window.contribution.value;
    let amount = window.amount.value;
    let date = window.date.value;

    let result = calculateTotalMortgage(percent, contribution, amount, date);
    let span = window.mortageResult;
    span.textContent = result;
}

function calculateTotalMortgage(percent, contribution, amount, date) {

    const obj = {
        percent,
        contribution,
        amount,
    }

    for (let prop in obj) {
        if (Number.isNaN(parseInt(obj[prop]))) {
            console.log(`Параметр ${prop} содержит неправильное значение ${obj[prop]}`);
            return null;
        }
    }

    let today = new Date();
    let dateEnd = new Date(date);

    let p = percent / 100 / 12;
    let s = amount - contribution;
    let n = parseInt((dateEnd - today) / (1000 * 3600 * 24 * 30));
    let summ = (s * (p + p / (((1 + p) ** n) - 1))).toFixed(2);

    totalAmount = (summ * n).toFixed(2);
    console.log(totalAmount);
    return totalAmount;

}

function sayHello() {
    let name = window.personName.value;
    let greeting = getGreeting(name);
    let span = window.helloResult;
    span.textContent = greeting;
}

function getGreeting(name) {
    if (!isNaN(name)) {
        name = 'Анноним';
    }

    alert(`Привет, мир! Меня зовут ${name}.`);
    let greeting = `Привет, мир! Меня зовут ${name}.`;

    console.log(`Привет, мир! Меня зовут ${name}.`);
    return greeting;
}