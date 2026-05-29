/* 
    Condicionais
    
    se (condição == verdade){
        faça tal coisa
    } 

    if (condição == verdade){
        // código a ser executado se a condição for verdadeira
    } else if (outra condição == verdade){
        // código a ser executado se a condição for falsa
    }else{
        // código a ser executado se a condição for falsa
    }
*/

let media = 10

if (media >= 6){
    console.log("Aprovado!")
    if (media == 10){
        console.log("Conceito A")
    }else if (media >= 8 && media < 10){
        console.log("Conceito B")
    }
}else if (media < 6){
    console.log("Reprovado!")
}else{
    console.log("Nota inválida!")
}

