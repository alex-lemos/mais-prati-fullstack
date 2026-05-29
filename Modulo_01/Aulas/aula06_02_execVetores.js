/*
    Exercício Vetores:

    Contagem de números pares: 
    Usar o laço for para contar quantos números pares existem em um array de números.
*/

let numeros = [1, 5, 4, 8, 3, 10]
let contPares = 0
let numPares = []
let numImpares = []

for(let pos=0; pos<numeros.length; pos++){
    console.log(numeros[pos])

    if(numeros[pos] % 2 == 0){
        contPares++
        numPares.push(numeros[pos])
    }else{
        numImpares.push(numeros[pos])
    }
}
console.log(`Quantidade de números pares: ${contPares}`)

console.log(`Números pares: ${numPares}`)
for(let pos in numPares){
    console.log(numPares[pos])
}

console.log(`Números ímpares: ${numImpares}`)
for(let pos in numImpares){
    console.log(numImpares[pos])
}