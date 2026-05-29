/***** Exercícios - Vetores *****/

/*  
    1. Acumulando o valor de vendas: Usar o laço for para calcular o total de vendas de uma loja, dado um array com os valores das transações.
    Instruções:
    ● Criar um array com valores de vendas diárias (por exemplo: [100, 200, 150, 300]);
    ● Usar o laço for para somar todos os valores;
    ● No final, exibir o valor total acumulado de vendas no console.
*/
let vendasDiarias = [100, 200, 150, 300];
let totalVendas = 0;

for (let i = 0; i < vendasDiarias.length; i++) {
    totalVendas += vendasDiarias[i];
}

console.log(`Total de vendas acumulado: ${totalVendas}`);

/*  
    2. Calculando a média de notas: Usar um laço for para calcular a média das notas de um/a estudante.
    Instruções:
    ● Criar um array com as notas de um/a estudante(por exemplo: [8, 7, 9, 10, 6]);
    ● Utilizar o laço for para somar as notas;
    ● Calcular a média das notas e exibir o resultado no console.
*/
let notas = [8, 7, 9, 10, 6];
let somaNotas = 0;

notas.forEach(function(nota) {
    somaNotas += nota;
});

let media = somaNotas / notas.length;
console.log(`Média das notas: ${media}`);

/*  
    3. Procurando um valor no array: Usar um laço for para procurar um número específico em um array e verificar se ele existe.
    Instruções:
    ● Criar um array com vários números (ex: [10, 15, 20, 25, 30]);
    ● Definir um número que deseja procurar no array (ex: let numeroProcurado = 20);
    ● Utilizar um laço for para verificar se o número existe no array e exiba a mensagem
    "Número encontrado" ou "Número não encontrado".
*/
let numeros = [10, 15, 20, 25, 30];
let numeroProcurado = 10;
let encontrado = false;

for(let pos in numeros) {
    if(numeros[pos] === numeroProcurado) {
        encontrado = true;
        console.log("Número encontrado");
        break;
    }
}

if (encontrado == false) {
    console.log("Número não encontrado");
}

// outra estrutura de repetição para o mesmo exercício:
let numeros2 = [10, 15, 20, 25, 30];
let numeroProcurado2 = 20;
let encontrado2 = false;

for(let numero of numeros2) {
    if(numero === numeroProcurado2) {
        encontrado2 = true;
        console.log("Número encontrado");
        break;
    }
}

if (!encontrado2) {
    console.log("Número não encontrado");
}

/*  
    4. Contagem de números pares: Usar o laço for para contar quantos números pares existem em um array de números.
    Instruções:
    ● Criar um array com alguns números (por exemplo: [1, 2, 3, 4, 5, 6]);
    ● Utilizar o laço for para contar quantos números pares existem nesse array;
    ● Ao final, exiba a quantidade de números pares no console.
*/
let numerosPares = [1, 2, 3, 4, 5, 6];
let contadorPares = 0;

for (let pos in numerosPares) {
    if (numerosPares[pos] % 2 === 0) {
        contadorPares++;
    }
}

console.log(`Quantidade de números pares: ${contadorPares}`);
