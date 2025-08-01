// 2. Jogo de Adivinhação
// Escreva um script que gere um número aleatório de 1 a 100 e peça ao
// usuário, para adivinhar. Use while para repetir até acertar, contando
// tentativas e exibindo “mais alto” ou “mais baixo” a cada palpite errado.

const prompt = require('prompt-sync')();

let numero = Math.round((Math.random() * 100));
console.log(numero);

console.log('Chute um número de 1 a 100');
let n = Number(prompt('Digite o um número: '));

while (n != numero){
    let dif = numero - n;

    if (dif < 0){
        n = prompt('Número digitado incorreto! Digite um número menor: ');
    } else {
        n = prompt('Número digitado incorreto! Digite um número maior: ');
    }
}

console.log('Parabéns! Você acertou!');

