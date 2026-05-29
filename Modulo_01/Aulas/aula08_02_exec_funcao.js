// Aula 08 - Exercícios de Funções

/*
    1 - Função sem parâmetros e sem retorno: Criar uma função simples que exiba uma mensagem de saudação.
    Instruções:
    ● Criar uma função chamada saudacao que não recebe parâmetros;
    ● Ex: A função deve exibir no console a mensagem "Olá, bem-vindo ao nosso sistema!";
    ● Chamar a função para que a saudação seja exibida.
*/
function saudacao(){
    console.log("Olá, bem-vindo ao nosso sistema!")
}

saudacao()

/*
    2 - Função com parâmetros: Criar uma função que receba dois números como parâmetros
    e retorne a soma, subtração, multiplicação e divisão desses números.
    Instruções:
    ● Criar uma função chamada soma que receba dois parâmetros (a e b);
    ● A função deve retornar a soma dos dois parâmetros;
    ● Chamar a função passando dois números como argumentos e exibir o resultado no console.
*/

function operacoes(a, b) {
  const soma = a + b;
  const subtracao = a - b;
  const multiplicacao = a * b;
  const divisao = a / b;

  return [soma, subtracao, multiplicacao, divisao];
}

const resultado = operacoes(10, 5);

console.log(`Soma: ${resultado[0]}`);
console.log(`Subtração: ${resultado[1]}`);
console.log(`Multiplicação: ${resultado[2]}`);
console.log(`Divisão: ${resultado[3]}`);
