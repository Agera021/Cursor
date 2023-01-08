const ukraine = { tax: 0.195, middleSalary: 1789, vacancies: 11476 };
const latvia = { tax: 0.25, middleSalary: 1586, vacancies: 3921 };
const litva = { tax: 0.15, middleSalary: 1509, vacancies: 1114 };

function getMyTaxes(salary) {
    return this.tax * salary;
};
console.log(getMyTaxes.call(ukraine, 5000));

function getMiddleTaxes () {
    return (this.tax * this.middleSalary).toFixed(0)
};
console.log(getMiddleTaxes.call(ukraine));
console.log(getMiddleTaxes.call(latvia));
console.log(getMiddleTaxes.call(litva));

function getTotalTaxes () {
    return (this.tax * this.middleSalary * this.vacancies).toFixed(0)
};
console.log(getTotalTaxes.call(ukraine));
console.log(getTotalTaxes.call(latvia));
console.log(getTotalTaxes.call(litva));

function getMySalary (country) {
    const result = {};
    result.salary = Math.round(Math.random() * (2000 - 1500) + 1500);
    result.taxes = Math.round(country.tax * result.salary);
    result.profit = result.salary - result.taxes;
    return result;
    console.log(result);
};
setInterval(getMySalary, 50000, latvia);