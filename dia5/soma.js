const prompt = require("prompt-sync")()
const num1 = Number(prompt("Digite o primeiro número: "));
const num2 = Number(prompt("Digite o segundo número: "));

const soma = num1 + num2;
console.log(`A soma do primeiro número ${num1} e do segundo número ${num2} é igual a: ${soma}`);