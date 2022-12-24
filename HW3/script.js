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

function getNameFirstLetterBig (name){
	name = name.toLowerCase().split('');
  const bigLetter = (name[0].toUpperCase());
	let eachLetter = '';
	for (let i = 0; i < (name.length) - 1; i++){
		eachLetter += (name[i + 1] + ''); 
    }
  const result = (bigLetter + eachLetter);
  return result;	
}

function getSaleryNetto (salery) {
	const firstTax = 18;
	const secondTax = 1.5;
	const taxes = (firstTax + secondTax);
	const sumOfTaxes = (salery * taxes / 100);
	const saleryNetto = (salery - sumOfTaxes);
	return saleryNetto;
}

function getRandomInt(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
};

function getCountLetter (leter, word) {
    let quantityOfLetters = 0;
    for (let i = 0; i <= word.length; i++) {
        if (word[i] == leter) {
            quantityOfLetters++;
        }
    }
    return quantityOfLetters;
};

function convertCurency (curency){
	const dollarsBe = 40.60;
	const uahBe = 0.036; 
	let result = 0;
	if (curency.includes('$')){
		result = (parseInt(curency) * dollarsBe + 'UAH');
	} else if (curency.includes('UAH')) {
		result = (parseInt(curency) * uahBe + '$');
	} else{
		throw ('Error');
	}
	return result;
	}

function getRandomPassword(passwordLength = 7) {
    let password = "";
    for (let i = 0; i < passwordLength; i++) {
        password += Math.floor(Math.random() * 10);
    }
    return password;
};

function deleteLetters(e, word) {
    result = word.replaceAll(e, '');
    return result
};

document.writeln(`Функція 1: ${getMaxDigit("1234567965")}`,  "<br />");
document.writeln(`Функція 2: ${getDegree(1024, 4)}`, "<br />");
document.writeln(`Функція 3: ${getNameFirstLetterBig("koeniGgsEg")}`, "<br />");
document.writeln(`Функція 4: ${getSaleryNetto(1000, 19.5)}`, "<br />");
document.writeln(`Функція 5: ${getRandomInt(1, 10)}`, "<br />");
document.writeln(`Функція 6: ${getCountLetter("a", "batat")}`,"<br />");
document.writeln(`Функція 7-8: ${convertCurency("1000$")}`, "<br />");
document.writeln(`Функція 9-10: ${getRandomPassword(7)}`, "<br />");
document.writeln(`Функція 11: ${deleteLetters("e", "koeniggseg agera regera")}`,"<br />");