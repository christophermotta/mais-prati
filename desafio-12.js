const prompt = require('prompt-sync')();

let num = prompt("Digite um número: ");

console.log(`A tabuada do número ${num} é:`);

for (let i = 1; i <= 10; i++){
    console.log(`${i} x ${num} =`, (i * num));
}