/*
    Exercício Condicionais:
    
    Crie um programa com a idade do aluno e se ele possui autorizacao (responda com  sim ou nao).
    O sistema deve mostrar:
    - Acesso permitido, se o aluno tiver 14 anos ou mais e autorizacao = sim.
    - Acesso permitido com responsavel, se o aluno tiver 12 ou 13 anos and autorizacao = sim.
    - Acesso negado, se o aluno tiver menos de 12 anos or se nao tiver autorizacao
*/

let idade = 13
let autorizacao = "sim"

/********* Condicional (if-else) *********/

if (idade >= 14 && autorizacao == "sim") {
    console.log("Acesso permitido")
} else if ((idade >= 12 && idade < 14) && autorizacao == "sim") {
    console.log("Acesso permitido com responsável") 
} else {
    console.log("Acesso negado")
}

// outra forma de escrever o mesmo código usando o operador ternário:

let resultado = (idade >= 14 && autorizacao == "sim") ? "Acesso permitido" :
                ((idade >= 12 && idade < 14) && autorizacao == "sim") ? "Acesso permitido com responsável" :
                "Acesso negado"


/********* Condicional múltipla (switch) *********/

switch (true) {
    case (idade >= 14 && autorizacao == "sim"):
        console.log("Acesso permitido")
        break;
    case ((idade >= 12 && idade < 14) && autorizacao == "sim"):
        console.log("Acesso permitido com responsável")
        break;
    default:
        console.log("Acesso negado")
}

