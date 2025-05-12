const prompt = require('prompt-sync')();

console.log("Calculadora de IMC\n")
let peso = Number(prompt("Digite seu peso(KG): "));
let altura = (Number(prompt("Digite sua altura(cm): "))) / 100;

let imc = (peso / (Math.pow(altura, 2))).toFixed(2);

if (imc < 18.5){
    console.log (`Seu IMC é ${imc}, você está com baixo peso`);
} else if (imc >= 18.5 && imc <= 24.9){
    console.log (`Seu IMC é ${imc}, você está com peso normal`);
} else if (imc >= 25 && imc <= 29.9){
    console.log (`Seu IMC é ${imc}, você está com sobre peso`);
} else {
    console.log (`Seu IMC é ${imc}, você está obeso`);
}
    