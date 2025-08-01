const prompt = require('prompt-sync')();

let num1 = Number(prompt("Digite um número: "));

for (let i = 0; i < 10; i++){
    console.log(`${i}. ${num1}`);
}