let N = 0;
let M = 0;
let even_numbers;
let result = 0;

do { N>M || !Number.isInteger(N)||!Number.isInteger(M)? alert("Це не Ваш вік") : N=0, M=0;
N = Number(prompt("Введіть свій вік"))
M = Number(prompt("Добре, це була гарна спроба, але тепер введіть свій справжній вік"))
even_numbers = confirm("Пропускаємо парні?");
} while (N>M ||!Number.isInteger(N)||!Number.isInteger(M));

for (let i = N; i < M; i++) {
    if (even_numbers){i%2 ? result += i : result;}
    else {result += i;}
};
console.log(result);
document.writeln ("Відповідь = " , result);