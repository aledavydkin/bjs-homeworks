'use strict'

function calculateQuadraticEquation(){
    let a = +window.a.value;
    let b = +window.b.value;
    let c = +window.c.value;
    let result = getResult(a,b,c);
    window.equation.textContent = `${a}*x^2 + (${b})*x + (${c}) = 0`;
    let span = window.result;
    span.textContent = "х = "+result;
}

function getResult(a,b,c){
    let discriminant = b**2-4*a*c;
    let x = [];
    if (discriminant < 0){
        return x;
    } else if (discriminant === 0) {
        let count = -b/2*a;
        x.push(count);
        return x;
    } else if (discriminant > 0) {
        let count = (-b + Math.sqrt(discriminant)) /2*a;
        let countTwo = (-b - Math.sqrt(discriminant)) /2*a;
        x.push(count, countTwo);
        return x;
    }
}

function calculateAverageRating(){
    let marks = window.marks.value.split("").map(Number).filter((n)=> !isNaN(n) && n > 0);
    let averageMark = getAverageMark(marks);
    window.averageMark.textContent = averageMark;
}

function getAverageMark(marks){
    marks.push(averageMark);
    marks.pop(averageMark);
    let count = marks.length;
    let summ = 0;
    for (let i = 0; i < count; i++) {
        summ += marks[i];
    }
    if (count > 5) {
        marks.splice(5);
        marks = summ / count;
        console.log(`Оценок больше 5 - Считается по первым 5 оценкам. Итого среднее: ${marks}`);
        return averageMark;
    } else {
        marks = summ / count;
        console.log(marks);
        return averageMark;
    }
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    let thisYaer = new Date().getFullYear();
    let UserYaerValue = dateOfBirthday.getFullYear();
    dateOfBirthday = (thisYaer - UserYaerValue);

    if(dateOfBirthday > 18){
        let result = `Не желаете ли олд-фэшн, ${name}?`
        console.log(dateOfBirthday)
        return result;
    } else {
        let result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
        return result;
    }
}