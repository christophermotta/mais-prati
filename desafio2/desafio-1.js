// 1. Validação de Datas
// Crie a função ehDataValida(dia, mes, ano) que retorne true se os valores
// formarem uma data real (meses de 28–31 dias, ano bissexto para
// fevereiro) e false caso contrário.

function ehDataValida(dia, mes, ano){
    if (!(dia >= 1 && dia <= 31)) return false;
    if (!(mes >= 1 && mes <= 12)) return false;
    if (ano < 0) return false;
    if (!anoBissexto(ano) && mes === 2 && dia === 29) return false;
    if (mes === 2 && (dia === 30 || dia === 31)) return false;

    const mesesCom30 = [4, 6, 9, 11];
    if (mesesCom30.includes(mes) && dia > 30) return false;

    return true;
}

function anoBissexto(ano) {
    return (ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0);
}

console.log(ehDataValida(31, 4, 2024)); // false (abril tem 30)
console.log(ehDataValida(30, 4, 2024)); // true
console.log(ehDataValida(29, 2, 2024)); // true (bissexto)
console.log(ehDataValida(29, 2, 2023)); // false (não bissexto)
console.log(ehDataValida(31, 12, 2024)); // true
console.log(ehDataValida(0, 12, 2024));  // false (dia 0 não existe)

// Outra solução === chatgpt
// function ehDataValida(dia, mes, ano) {
//     const data = new Date(ano, mes - 1, dia); // JS usa meses de 0 (jan) a 11 (dez)

//     return (
//         data.getFullYear() === ano &&
//         data.getMonth() === mes - 1 &&
//         data.getDate() === dia
//     );
// }

