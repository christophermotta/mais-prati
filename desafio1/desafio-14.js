const prompt = require('prompt-sync')();

let num = Number(prompt('Digite um número para calcular o fatorial: '));
let fatorial = num;

for (let i = num - 1; i >= 1; i--){
    fatorial *= i;
}

console.log (`O fatorial de ${num} é ${fatorial}`);