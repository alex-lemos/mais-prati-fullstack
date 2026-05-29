/*
    Aula 08 - Funções em JavaScript: Definição, Escopo, Retorno e Procedimentos - turma 02/2026

    function nomeDaFuncao() {
        //Bloco de código
    }

*/

// Definição da função
function mensagem() {
    console.log("Olá, mundo!")
}

mensagem() // Chamada da função

// Função com parâmetros
function soma(a, b) {
    return a + b
}

let resultado = soma(5, 3) // Chamada da função
console.log(`Resultado da soma: ${resultado + 5}`)

// Exemplo 01
function calcularMedia(nota1, nota2) {
    let media = (nota1 + nota2) / 2
    return media
}

let mediaAluno = calcularMedia(7, 8)
console.log(`A média do aluno é: ${mediaAluno}`)

// Exemplo 02
function saudacao(nome) {
    console.log(`Olá, ${nome}!`)
}

console.log("Iniciando o programa...")
saudacao("Alex")
console.log("Fim do programa.")
