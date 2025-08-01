// 9. Conversão Entre Formatos
// Escreva duas funções:

//paresParaObjeto(pares) recebe um array de pares [ [chave,valor], ... ] e retorna o objeto equivalente.
function paresParaObjeto(pares) {
  const obj = {};
  for (let [chave, valor] of pares) {
    obj[chave] = valor;
  }
  return obj;
}

const pares = [['nome', 'Ana'], ['idade', 30], ['cidade', 'São Paulo']];
console.log(paresParaObjeto(pares));
// { nome: 'Ana', idade: 30, cidade: 'São Paulo' }


//objetoParaPares(obj) faz o inverso, retornando um array de pares.
function objetoParaPares(obj) {
  const pares = [];
  for (let chave in obj) {
    pares.push([chave, obj[chave]]);
  }
  return pares;
}

const obj = { nome: 'Ana', idade: 30, cidade: 'São Paulo' };
console.log(objetoParaPares(obj));
// [['nome', 'Ana'], ['idade', 30], ['cidade', 'São Paulo']]

