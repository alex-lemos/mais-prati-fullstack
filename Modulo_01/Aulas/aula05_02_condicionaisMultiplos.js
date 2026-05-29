/*
    Condicionais Múltiplos

    switch (expressão) {
        case valor1:
            // código a ser executado se a expressão for igual a valor1 
            break;
        case valor2:
            // código a ser executado se a expressão for igual a valor2 
            break;
        default:
            // código a ser executado se a expressão não for igual a nenhum dos valores acima 
    }

*/

let dia = new Date() 
let diaSemana = dia.getDay()

/*
    0 - Domingo
    1 - Segunda-feira
    2 - Terça-feira
    3 - Quarta-feira
    4 - Quinta-feira
    5 - Sexta-feira
    6 - Sábado
*/

switch (diaSemana) {
    case 0:
        console.log("Domingo") 
        break;
    case 1:
        console.log("Segunda-feira") 
        break;
    case 2:
        console.log("Terça-feira")
        break;
    case 3:
        console.log("Quarta-feira")
        break;
    case 4:
        console.log("Quinta-feira")
        break;
    case 5:
        console.log("Sexta-feira")
        break;
    case 6:
        console.log("Sábado")
        break;
    default:
        console.log("Dia inválido")
}

/* Comparação com if-else (condicional) */
if (diaSemana === 0) {
    console.log("Domingo")
} else if (diaSemana === 1) {
    console.log("Segunda-feira")
} else if (diaSemana === 2) {
    console.log("Terça-feira")
} else if (diaSemana === 3) {
    console.log("Quarta-feira")
} else if (diaSemana === 4) {
    console.log("Quinta-feira")
} else if (diaSemana === 5) {
    console.log("Sexta-feira")
} else if (diaSemana === 6) {
    console.log("Sábado")
} else {
    console.log("Dia inválido")
}