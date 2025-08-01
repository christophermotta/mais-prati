// 3. Palavras Únicas
// Dada uma string (ex.: "olá olá mundo mundo"), use if/else e for para extrair
// todas as palavras únicas e exibi-las em um array.

let str = "olá olá mundo mundo";
let words = str.split(' ');
let unicas = [];
let strFinal = "";

for (let i = 0; i < words.length; i++) {
    let palavraAtual = words[i];
    let contador = 0;

    for (let j = 0; j < words.length; j++) {
        if (words[j] == palavraAtual) {
            contador++;
        }
    }

    if (contador === 1) {
        unicas.push(palavraAtual);
    } else if (!unicas.includes(palavraAtual)) {
        unicas.push(palavraAtual);
    }
}

for (palavra of unicas){
    strFinal += palavra + " "
}

console.log(strFinal);