/***** Exercício 03 - Funções *****/

/*
    1. Função com parâmetros e retorno: Criar uma função que calcule a média de três notas
    passadas como parâmetros.
    Instruções:
    ● Criar uma função que receba três parâmetros (nota1, nota2,nota3);
    ● A função deve calcular a média das três notas e retornar o valor;
    ● Chamar a função e exibir a média no console.

*/
function calcularMedia(nota1, nota2, nota3) {
    let media = (nota1 + nota2 + nota3) / 3
    return media
}
let media = calcularMedia(7, 8, 9)
console.log(`A média do aluno é: ${media}`)


//ou
function calcularMedia(nota1, nota2, nota3) {
    return (nota1 + nota2 + nota3) / 3
}

console.log(`Média: ${calcularMedia(7, 8, 9)}`)


/*
    2. Função com parâmetros: Criar uma função que verifique se uma pessoa é maior de
    idade ou menor de idade.
    Instruções:
    ● Criar uma função chamada verificarIdade que receba um parâmetro (idade);
    ● Se a idade for 18 ou mais, a função deve retornar a mensagem "Você é maior de idade";
    ● Se a idade for menor que 18, a função deve retornar a mensagem "Você é menor de idade";
    ● Chamar a função passando uma idade e exibir o resultado no console.
*/
function verificarIdade(idade) {
    if (idade >= 18) {
        return "Você é maior de idade"
    } else {
        return "Você é menor de idade"
    }
}

// let mesagem = verificarIdade(20)
// console.log(mesagem)

//ou
console.log(verificarIdade(20))
console.log(verificarIdade(15))


/*
    3. Função com parâmetros e retorno: Criar uma função que receba dois números e um
    operador e retorne o resultado da operação.
    Instruções:
    ● Criar uma função chamada calculadora que receba três parâmetros: num1, num2 e operador.
    ● O operador pode ser um dos seguintes: + (soma), - (subtração), *(multiplicação), / (divisão);
    ● A função deve retornar o resultado da operação;
    ● Chamar a função com diferentes operadores e exibir os resultados no console.
*/
function calculadora(num1, num2, operador) {
    switch (operador) {
        case "+":
            return num1 + num2;
        case "-":
            return num1 - num2;
        case "*":
            return num1 * num2;
        case "/":
            return num1 / num2;
        default:
            return "Operador inválido";
    }
}

console.log(calculadora(10, 5, "+"));
console.log(calculadora(10, 5, "-"));
console.log(calculadora(10, 5, "*"));
console.log(calculadora(10, 5, "/"));