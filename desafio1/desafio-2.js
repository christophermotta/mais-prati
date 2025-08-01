const prompt = require('prompt-sync')();

let idade;

do{
    idade = Number(prompt("Digite a idade para verificar a faixa-etária: "));
    if (idade < 0){
        console.log("Idade inválida!");
    }
} while(idade < 0 || idade == NaN);

if (idade < 12){
    console.log("A idade digitada é de uma criança");
} else if(idade < 18){
    console.log("A idade digitada é de uma adolescente");
} else if (idade < 60){
    console.log("A idade digitada é de um adulto");
} else {
    console.log("A idade digitada é de um idoso");
}