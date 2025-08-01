const prompt = require('prompt-sync')();

let numero = prompt("Digite um número: ");

if ((numero % 2) == 0){
    console.log ("O número digitado é par")
} else {
    console.log ("O número digitado é impar")
}