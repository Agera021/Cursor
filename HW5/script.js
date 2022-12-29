let numberArray = [];
function getRandomArray(length, min, max) {
    if (!Number.isInteger (length) || !Number.isInteger(min) || !Number.isInteger(max)){
        console.log ('err');
        return
    } else {
        for (let i=0; i<= length - 1; i++){
            let random = 0;
            random = Math.floor (Math.random() * ((max)-(min) +1))+(min);
            numberArray.push(random);
        }
        return numberArray;
    }
}
console.log (getRandomArray(15, 1, 100))

const getModa = (...numbers) =>
  numbers.reduce((a, i, b, l, g = 0) => {
    let moda = l.filter((el) => el == i).length;
    Number.isInteger(i) && moda > g? ((a = i), (g = moda)): a;
    return a;}, 0);

const moda1 = getModa(2,59,64,83,72,31,75,59,99,33,77,95,60,75,64);


const getAverage = (...numbers) => {
    let average = numbers.filter((el) => Number.isInteger(el));
    let all = 0;
    average.forEach((el, i) => {
        all += el;
    });
    return all / average.length;
}
const average2 = getAverage (6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);


const filterEvenNumbers = (...numbers) => {
        const numero = numbers.filter((el) => el % 2 !== 0);
        return numero;
      };
      const numero1 = filterEvenNumbers(1, 2, 3, 4, 5, 6);

const countPositiveNumbers = (...numbers) =>
numbers.filter ((el) => el >= 0).length;
const positive = countPositiveNumbers(1, -2, 3, -4, -5, 6);

const getDividedByFive = (...numbers) => numbers.filter((el) => el % 5 == 0);
const five = getDividedByFive(6, 2, 55, 11, 78, 2, 55, 77, 57, 87, 23, 2, 56, 3, 2);



document.write("#1: ", numberArray , ";", "</br>");
document.write("#2: ", moda1 , ";", "</br>");
document.write("#3: ", average2 , ";", "</br>");
document.write("#5: ", numero1 , ";", "</br>");
document.write("#6: ", positive , ";", "</br>");
document.write("#7: ", five , ";", "</br>");