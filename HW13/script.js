function* createIdGenerator() {
    for (let i = 1; i >= 1; i++) {
      yield i;
    }
  }
  const idGenerator = createIdGenerator();
  
  console.log('Завдання 1');
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);
  console.log(idGenerator.next().value);

  function* newFontGenerator(fontSize) {    
    while(true){
        let i = yield fontSize;
        if (i === "up") {
            fontSize += 2;
        } else if (i === "down") {
            fontSize -= 2;
        }
    }
}
const fontGenerator = newFontGenerator(14);

console.log('Завдання 2');
console.log(fontGenerator.next("up").value);   //-> 14
console.log(fontGenerator.next("up").value);   //-> 16
console.log(fontGenerator.next("up").value);   //-> 18
console.log(fontGenerator.next().value);       //-> 18
console.log(fontGenerator.next("down").value); //-> 16
console.log(fontGenerator.next("down").value); //-> 14
console.log(fontGenerator.next("down").value); //-> 12
console.log(fontGenerator.next().value);       //-> 12

let result = `
Завдання 1:<br> 
${idGenerator.next().value};<br>
${idGenerator.next().value};<br>
${idGenerator.next().value};<br>
Завдання 2:<br>
14 = ${fontGenerator.next("up").value};<br>
16 = ${fontGenerator.next("up").value};<br>
18 = ${fontGenerator.next("up").value};<br>
18 = ${fontGenerator.next().value};<br>
16 = ${fontGenerator.next("down").value};<br>
14 = ${fontGenerator.next("down").value};<br>
12 = ${fontGenerator.next("down").value};<br>
12 = ${fontGenerator.next().value};<br>
 
`;
document.querySelector(".output").innerHTML = result;