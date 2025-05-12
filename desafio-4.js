const promp = require('prompt-sync')();

console.log("Calculadora");
console.log("1 - Somar");
console.log("2 - Subtrair");
console.log("3 - Multiplicar");
console.log("4 - Dividir");

let op = parseInt(prompt('Escolha uma operação? '));

let num1_calc = Number(prompt('Digite o primeiro número? '));;
let num2_calc = Number(prompt('Digite o segundo número? '));

switch (op) {
    case 1:
        console.log("Resultado da soma: " + (num1_calc + num2_calc));
        break;

    case 2:
        console.log("Resultado da subtração: " + (num1_calc - num2_calc));
        break;
    
    case 3:
        console.log("Resultado da multiplicação: " + (num1_calc * num2_calc));
        break;

    case 4:
        if (num1_calc != 0 && num2_calc != 0){
            console.log("Resultado da divisão: " + (num1_calc / num2_calc));
        } else{
            console.log("Erro: Divisão por zero")
        }
        break;

    default:
        console.log("Opção inválida.");
        break;
}