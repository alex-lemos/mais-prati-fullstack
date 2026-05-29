/* 
    Vetores - arrays unidimensionais
*/

// valores - 2 5 1 6 1
// indices - 0 1 2 3 4
let numeros = [2, 5, 1, 6, 1]
let frutas = [ "maçã", "banana", "abacaxi"]
let vazio = []
let arr = Array() // construtor de array, outra forma de criar um vetor

console.log(numeros)

vazio[1] = 5 // adiona o valor na posição do indice indicado 
vazio[0] = 30
vazio.push(50) // adiciona no fim do vetor
vazio.pop() // remove o último elemento do vetor
vazio.unshift(10) // adiciona no início do vetor
vazio.shift() // remove o primeiro elemento do vetor

vazio.splice(1, 0, 20) // adiciona o valor 20 na posição do indice 1, sem remover nenhum elemento
vazio.splice(2, 1) // remove o elemento da posição do indice 2
vazio.splice(1, 1, 15) // substitui o elemento da posição do indice 1 pelo valor 15
vazio.splice(0, 0, 5) // adiciona o valor 5 na posição do indice 0, sem remover nenhum elemento

console.log(vazio)

frutas.push("uva")

console.log(frutas)

for (let pos = 0; pos < numeros.length; pos++) {
console.log("A posição " + pos + " tem o valor: " + numeros[pos])
}

for (let pos = 0; pos < numeros.length; pos++) {
    console.log(`A posição ${pos} tem o valor: ${numeros[pos]}`) 
}

for (let pos in numeros) {
    console.log(`A posição ${pos} tem o valor: ${numeros[pos]}`) 
}

let numeros2 = [10, 20, 30, 40, 50]
numeros2.forEach(function(numero){
        console.log(numero)
})

let numeros3 = [100, 200, 300, 400, 500]
for (let pos in numeros3) {
    console.log(numeros3[pos]) 
}

