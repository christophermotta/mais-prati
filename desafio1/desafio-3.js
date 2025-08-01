const prompt = require('prompt-sync')();

let nota = prompt("Digite uma nota: ");

if (nota >= 6){
    console.log("Parabéns, você está aprovado!")
} else if (nota >= 4){
    console.log("Estude mais para passar na recuperação!")
} else {
    console.log("Reprovado! Nos vemos novamente ano que vem.")
}