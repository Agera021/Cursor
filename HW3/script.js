function getMaxDigit(number) {
    let maxNumber = number[0];
    for (let i = 0; i < number.length; i++) {
        if (number[i] > maxNumber) {
            maxNumber = number[i]
        }  
    }
    return maxNumber;
};

function getDegree(number, numbersDegree) {
    let NumberOfDegree = 0;
    while (number % numbersDegree == 0) {
        number = number / numbersDegree;
        NumberOfDegree++;
    }
    return NumberOfDegree;
};

function correctName(wrongName) {
    return wrongName[0].toUpperCase() + wrongName.slice(1).toLowerCase();
};

function salary(salaryWithTaxes, taxes) {
    return salaryWithTaxes - (salaryWithTaxes * (taxes / 100));
};

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function countLetter(leter, word) {
    let quantityOfLetters = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] == leter) {
            quantityOfLetters++;
        }
    }
    return quantityOfLetters;
};

function convertCurrency(money) {
    let result = "";
    if (money.toUpperCase().indexOf("UAH") >= 0) {
        result = money.toUpperCase().replace("UAH", "") / 40 + " $";
    } else if (money.indexOf("$") >= 0) {
        result = money.replace("$", "") * 40 + " UAH";
    } else {
        result = "We can't change your money";
    }
    return result;
};

function getRandomPassword(passwordLength = 8) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
};

function deleteLetters(a, word) {
    result = word.replaceAll(a, '');
    return result
};

document.writeln(`Функція 1: ${getMaxDigit("1234567965")}`,  "<br />");
document.writeln(`Функція 2: ${getDegree(1024, 4)}`, "<br />");
document.writeln(`Функція 3: ${correctName("koeniGgsEg")}`, "<br />");
document.writeln(`Функція 4: ${salary(1000, 19.5)}`, "<br />");
document.writeln(`Функція 5: ${getRandomInt(1, 10)}`, "<br />");
document.writeln(`Функція 6: ${countLetter("a", "batat")}`,"<br />");
document.writeln(`Функція 7-8: ${convertCurrency("100$")}`, "<br />");
document.writeln(`Функція 9-10: ${getRandomPassword(7)}`, "<br />");
document.writeln(`Функція 11: ${deleteLetters("a", "batat")}`,"<br />");
