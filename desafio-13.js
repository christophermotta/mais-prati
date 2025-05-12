const prompt = require('prompt-sync')();

let num;
let valor = 0;
let contador = -1;

do {
    num = Number(prompt("Digite um número: "));
    if (num % 1 == 0){
        valor += num;
        contador++
    } else {
        console.log("Número inválido")
    }
} while(num != 0);

console.log("A média dos numeros digitados é " + (valor/contador).toFixed(2));