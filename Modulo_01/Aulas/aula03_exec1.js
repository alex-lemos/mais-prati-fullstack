//Aula 03 - Exercício 01.

// console.log("Olá, mundo! Este é o meu primeiro programa em JavaScript.");
// console.log(2 + 5); 
//ctrl + alt + n para rodar o código no terminal do vscode

// Declaração de variáveis e tipos de dados
// Variáveis de escopo global.
let nome = "Alex"; // String
let numero = 25; // Number
let booleano = true; // Boolean
const curso = "Full Stack"; // Constante

console.log(numero);
numero = 10; // Reatribuindo o valor da variável
console.log(numero);

// let - usa quando o valor precisa mudar.
// const - usa quando o valor não deve ser alterado.
// var - é uma forma mais antiga de declarar variáveis, mas é recomendável usar let ou const para evitar problemas de escopo.

if(true) {
    // Variaveis de escopo local.
    let mensagem = "Olá, mundo!";
    console.log(mensagem); // Isso funcionará, pois 'mensagem' está dentro do escopo.
}
// console.log(mensagem); // Isso causará um erro, pois 'mensagem' está fora do escopo.


