/* teste prompt-sync */

const prompt = require('prompt-sync')() // Importa a biblioteca prompt-sync e a inicializa para uso

// teste de debug
/* tabuada */
let valor = Number(prompt('Digite um número para ver a tabuada: ')) 

for (let i = 1; i <= 10; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
} 