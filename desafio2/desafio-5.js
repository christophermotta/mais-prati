// Crie function debounce(fn, delay) que receba uma função fn e um delay
// em ms, retornando uma nova função que só executa fn se não for
// chamada novamente dentro do intervalo.

function debounce(fn, delay) {
  let timer;

  return function () {
    clearTimeout(timer); // limpa o 'cronômetro'
    timer = setTimeout(fn, delay); // agenda o novo timer
  };
}

function minhaFuncao() {
  console.log("Teste de Debounce");
}

const testDebounce = debounce(minhaFuncao, 1000);

testDebounce();
testDebounce();
testDebounce();