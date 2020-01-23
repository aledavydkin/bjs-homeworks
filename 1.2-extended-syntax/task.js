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
    let averageMark = [];
    marks.push(averageMark);
    let summ = 0;

    if (marks.length > 4) {
        marks.splice(5);
        console.log('Оценок больше 5');
    }

    for (let i = 0; i < marks.length; i++) {
        summ += marks[i];
    }

    let averageRating = summ / marks.length;
    
    console.log(`Итого среднее: ${averageRating}`);
    return averageMark;
}

function calculateDrinkTask(){
    let name = window.personName.value;
    let dateOfBirthday = new Date(window.dateOfBirthday.value);
    let drink = askDrink(name, dateOfBirthday);
    window.drink.textContent = drink;
}

function askDrink(name,dateOfBirthday){
    dateOfBirthday = new Date().getFullYear() - dateOfBirthday.getFullYear();

    if(dateOfBirthday > 18){
        let result = `Не желаете ли олд-фэшн, ${name}?`
        return result;
    } else {
        let result = `Сожалею, ${name}, но я не могу вам продать алкоголь. Зато могу предложить вам замечательный клюквенный компот!`
        return result;
    }
}