const prompt = require('prompt-sync')();

console.log("Digite o tamanho dos lados de um triângulo");
let ladoA = prompt("Lado A = ");
let ladoB = prompt("Lado B = ");
let ladoC = prompt("Lado C = ");

if ((ladoA < ladoB + ladoC) && (ladoB < ladoA + ladoC) && (ladoC < ladoA + ladoB)){
    if ((ladoA == ladoB) && (ladoA == ladoC)) {
        console.log("Os valores digitado formam um triângulo equilátero")
    } else if ((ladoA != ladoB) && (ladoA != ladoC)) {
        console.log("Os valores digitado formam um triângulo escaleno")
    } else {
        console.log("Os valores digitado formam um triângulo isósceles")
    }
} else {
    console.log("Os valores digitados não formam um triângulo")
}