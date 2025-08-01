// 8. Agrupamento por Propriedade
// Em vendas = [{ cliente, total }, ...], use reduce para gerar um objeto onde
// cada chave é um cliente e o valor é a soma de todos os seus total.

const vendas = [
  { cliente: "Ana", total: 250.00 },
  { cliente: "João", total: 400.00 },
  { cliente: "Ana", total: 150.00 },
  { cliente: "Maria", total: 300.00 },
  { cliente: "João", total: 100.00 },
  { cliente: "Carlos", total: 700.00 },
  { cliente: "Maria", total: 50.00 }
];

const resumo = vendas.reduce((acumulador, venda) => {
  if (!acumulador[venda.cliente]) {
    acumulador[venda.cliente] = 0;
  }
  acumulador[venda.cliente] += venda.total;
  return acumulador;
}, {});

console.log(resumo);