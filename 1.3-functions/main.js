// Задача номер 1;
function getSolutions( a, b, c ) {
    let D = b ** 2 - 4 * a * c;
    if (D < 0) {
        return {D: D}
    } else if (D === 0) {
        let x1 = -b / (2 * a);
        return {roots: [x1], D: D}
    } else if (D > 0) {
        let x1 = (-b + Math.sqrt(D)) / 2 * a;
        let x2 = (-b - Math.sqrt(D)) / 2 * a;
        return {roots: [x1, x2], D: D}
    }
}

function showSolutionsMessage( a, b, c ) {
    let result =  getSolutions(a, b, c);
    for(let prop in result) {
        value = result[prop];
        resultArguments = result.roots;
    }
    console.log(`Вычисляем корни квадратного уравнения ${a}x² + ${b}x + ${c}
    \nЗначение дискриминанта: ${value}`)

    if (value < 0) {
        return console.log (`«Уравнение не имеет вещественных корней»`)
    } else if (value === 0) {
        return console.log (`Уравнение имеет один корень X₁ = ${resultArguments[0]}`)
    } else if (value > 0) {
        return console.log (`Уравнение имеет два корня. X₁ = ${resultArguments[0]}, X₂ = ${resultArguments[1]}`)
    }
}

showSolutionsMessage(1,2,3);
showSolutionsMessage(7,20,-3);
showSolutionsMessage(2,4,2);

// Задача номер 2;
function getAverageScore(data) {
    let totalSumm = {average: 0}
    let totalParams = 0;
    for (let prop in data) {
        totalParams++;
        totalSumm[prop] = averageHelp(data[prop]) / data[prop].length;
        totalSumm["average"] =  totalSumm["average"] + totalSumm[prop];
    }
    totalSumm["average"] = totalSumm["average"] / totalParams;
    console.log(totalSumm)
    return totalSumm;
}

function averageHelp(arr) {
    let result = 0;
    for (let i = 0; i < arr.length; i++){
        result += arr[i];
    };
    return result;
}

getAverageScore ({
    algebra: [2, 4, 5, 3, 2, 1, 4, 6],
    geometry: [2, 4, 5, 3, 2, 1, 4, 6],
    russian: [2, 4, 5, 3, 2, 1, 4, 6],
    physics: [2, 4, 5, 3, 2, 1, 4, 6],
    music: [2, 4],
});

// Задача номер 3;
function getPersonData( secretData ) {
    let firstName, lastName;
    secretData.aaa === 0 ? firstName = "Родриго" : firstName = "Эмилио";
    secretData.bbb === 0 ? lastName = "Родриго" : lastName = "Эмилио";

    return {firstName: firstName, lastName: lastName};
}

getPersonData({aaa: 1, bbb: 0});

