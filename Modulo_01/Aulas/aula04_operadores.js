// Operadores aritiméticos <--
/*
    Soma +
    Subtração -
    Multiplicação *
    Divisão /
    Resto da divisão %
    Potenciação **
*/

console.log(5 + 4) // 9
console.log(5 - 4) // 1
console.log(5 * 4) // 20
console.log(5 / 4) // 1.25
console.log(5 % 4) // 1
console.log(5 ** 4) // 625  
console.log(5 % 4) // 1

// Operadores de atribuição <--
/*
    Atribuição =
    Atribuição de adição +=
    Atribuição de subtração -=
    Atribuição de multiplicação *=
    Atribuição de divisão /=
    Atribuição de resto %=
    Atribuição de potenciação **=
*/

let numero = 5
console.log(numero) // 5

// Auto-atribuição
// numero = numero + 10 
numero += 10 
console.log(numero) // 15

// Operador incremento <--
/*
    Incremento ++
    Decremento --
*/
let contador = 1
contador ++
console.log(contador) // 2

// Operadores relacionais <--
/*
    > maior que
    < menor que
    >= maior ou igual a
    <= menor ou igual a
    == igual a
    === estritamente igual a
    != diferente de
    !== estritamente diferente de
*/
4 == 4 // true
4 == '4' // true
4 === '4' // false
4 != 5 // true
4 != '4' // false
4 !== '4' // true

numero = 10
console.log(numero > 5) // true
console.log(numero < 5) // false
console.log(numero >= 10) // true
console.log(numero <= 10) // true
console.log(numero == '10') // true
console.log(numero === '10') // false
console.log(numero != '10') // false
console.log(numero !== '10') // true

// Opetadores lógicos <--
/*
    && E - AND
    || OU - OR
    ! NÃO
*/
numero = 10
console.log(numero > 5 && numero < 15) // true
console.log(numero > 5 && numero < 10) // false
console.log(numero > 5 || numero < 10) // true
console.log(numero > 15 || numero < 10) // false
console.log(!(numero > 5)) // false
console.log(!(numero < 5)) // true

// Operador ternário <--
/*
    teste ? true : false
    Condição ? valor se verdadeiro : valor se falso
*/
let media = 6
console.log(media > 6 ? 'Aprovado' : 'Reprovado') // Reprovado

// Operador ternario em uma variável
let resultado = media > 6 ? 'Aprovado' : 'Reprovado'
console.log(resultado) // Reprovado

