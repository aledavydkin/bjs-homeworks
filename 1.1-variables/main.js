<<<<<<< HEAD
//Задача Номер 1
let algebra = 5;
let geography = 4;
let physics = 4;

let average = (algebra + geography + physics) / 3;
console.log('Cредняя оценка за три предмета ' + average);

//Задача Номер 2
let myName = 'Alex';
let massage = `Привет, мир! Меня зовут ${myName}`;
console.log(massage);

//Задача Номер 3
let x = 2;
let y = 22;
let z = 0;
let result = (x * y) + (5 * z) + (x - 1);
console.log(result);
=======
function calculateTask1(){
    let algebra = Number.parseInt(document.getElementById("algebra").value);
    let geography = Number.parseInt(document.getElementById("geography").value);
    let physics = Number.parseInt(document.getElementById("physics").value);
    if(!algebra || !geography || !physics){
        alert("Введите валидные значения");
        return;
    }

    let taskResult = averageMark(algebra, geography, physics);
    document.getElementById("task1Result").innerText = `Средняя оценка равна: ${taskResult}`;
}

function calculateTask2(){
    let userName = document.getElementById("username").value;
    if(!userName){
        alert("Введите имя пользователя");
        return;
    }
    
    let taskResult = sayHello(userName);
    document.getElementById("task2Result").innerText = taskResult;
}

function calculateTask3(){
    let taskResult = calculateFormula();
    document.getElementById("task3Result").innerText = taskResult;
}
>>>>>>> 4c30284dce3692f96e907534bc726f930eb75445
