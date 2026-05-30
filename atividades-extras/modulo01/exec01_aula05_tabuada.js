/*
    Exercício 01 - Tabuada

    Nesta atividade, você deverá criar um programa em JavaScript que mostre a tabuada de um número utilizando um laço de repetição (for ou while).
    O programa deve:
        criar uma variável com um número
        mostrar a tabuada desse número de 1 até 10
        exibir os resultados no console
*/

/***** Tabuada simples *****/
let numero = 5
for (let i =1; i <= 10; i++) {
    let resultado = numero * i
    console.log(numero + " x " + i + " = " + resultado)
} 

let i = 1
while (i <= 10) {
    let resultado = numero * i
    console.log(numero + " x " + i + " = " + resultado)
    i++
}

/***** Tabuada completa de 1 a 10 *****/
for (let i = 1; i <= 10; i++) {
    for (let j = 1; j <= 10; j++) {
        let resultado = i * j
        console.log(i + " x " + j + " = " + resultado)
    }
    console.log("-------------") //Separar as tabuadas
}
