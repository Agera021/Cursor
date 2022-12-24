const wrap = document.querySelector(".bmw");

let N = 0;
let M = 0;


do { N = Number(prompt("Введіть свій вік"));
if (!Number.isInteger(N)|| N <= 0) {
    alert("Це не Ваш вік")
}
}
while (!Number.isInteger(N)|| N <= 0);


do {
    M = Number(prompt("Добре, це була гарна спроба, але тепер введіть свій справжній вік"));
    if (!Number.isInteger(N)|| M <= N) {
        alert("Це не Ваш вік")
    }
}
while (!Number.isInteger(N)|| M <= N)

const even_numbers = confirm ("Пропускати парні?");
let result = 0;

for (let i = N; i <= M; i++) {
    if (even_numbers === true && i % 2 !== 0) {
    result += i 
    wrap.innerHTML = `Відповідь: ${result}`;
    console.log(i);
} else if (even_numbers === false) {
  result += i;
  wrap.innerHTML = `Відповідь: ${result}`;
}
else {
    continue;
}
}