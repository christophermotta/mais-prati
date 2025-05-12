const prompt = require('prompt-sync')();

let nums = [];
let soma = 0;

for (let i = 0; i < 5; i++){
    nums.push(Number(prompt("Digite um número: ")));
}

for (let i = 0; i < nums.length; i++){
    soma += nums[i];
}

console.log(`O resultado da soma é ${soma}`);