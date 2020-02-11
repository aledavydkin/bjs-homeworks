function sleep(milliseconds) 
{
  let e = new Date().getTime() + milliseconds;
  while (new Date().getTime() <= e) {}
}

function sum(...args) {
    // Замедление на половину секунды.
    sleep(500); // Можно использовать другое значение замедления.
    return args.reduce((sum, arg) => {
      return sum += +arg;
    }, 0);
  }

  function compareArrays( arr1, arr2 ) {
    if (arr1.length !== arr2.length) {
        return false;
    }
    return arr1.every((item, index) => item === arr2[index] )
  }

  console.log(compareArrays([8, 9], [6])) // false, разные значения
  console.log(compareArrays([8, 9, 5, 4], [8, 9, 5, 4, 8, 3, 5]))  // false, разные значения
  console.log(compareArrays([9, 2, 4, 8, 2], [9, 2, 4]))  // false, разные значения
  console.log(compareArrays([1, 2, 3], [2, 3, 1]))  // false, разные индексы, хотя и одинаковые значения
  console.log(compareArrays([8, 1, 2], [8, 1, 2]))  // true

  function memorize(fn, limit) {
    results = [];
    return function() {
        const check = results.find(result => compareArrays(result.args, Array.from(arguments)));
        if (check) {
            console.log(`Результат из памяти:`);
            return check.result;
        }

        results.push({ args: Array.from(arguments), result: fn(...arguments) })

        if (results.length > limit) {
            results.slice(results.length - limit);
        }

        let i = results.length - 1;

        console.log(`Результат не из памяти:`)
        return results[i].result;
    }
  }

const mSum = memorize(sum, 2);

console.log(mSum(1, 2, 3));
console.log(mSum(4, 400));
console.log(mSum(5, 4));
console.log(mSum(7, 4));
console.log(mSum(7, 4));
console.log(mSum(7, 3, 1000));
console.log(mSum(4, 5));
console.log(mSum(3, 2, 1)); 