function initCheckBirthday() {
    const birthday = document.getElementById('birthday').value;

    const result = checkBirthday(birthday) ? "Да" : "Нет";

    document.getElementById('disclaimer').innerHTML = result;   
}

function checkBirthday(birthday) {
    let now = Date.now();
    let diff = now - Date.parse(birthday);
    let age = Math.floor(diff / (365*24*60*60*1000));
    
    return age;
}

function initPrintAnimalSound() {
    const animal = {
        sound: 'grrrr',
    };

    const result = getAnimalSound(animal);

    document.getElementById('sound').innerHTML = result;   
}

function getAnimalSound(animal) {
    if (animal === undefined){
        return null;
    }
    initPrintAnimalSound.prototype = animal;
    let sound = animal.sound;
    return sound;
}

function initCalculateStatement() {
    for (let idx = 0; idx < 3; idx++) {
        const marks = document.getElementById('learner-' + idx).value.split(',');

        const average = getAverageMark(marks);

        document.getElementById('learner-' + idx + '-average').innerHTML = average;
    }
}

function getAverageMark(marks) {
    let summ = 0;
    for (let i = 0; i < marks.length; i++) {
        summ += Number(marks[i]);
    }

    let roundedAverage = Math.round(summ);
    
    return roundedAverage;
}