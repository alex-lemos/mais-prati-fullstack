/*****  MÓDULO 01 - LISTA DE EXERCÍCIOS 01 e 02 *****/

/* 1. Escreva um programa que recebe um número inteiro e verifica se ele é par ou ímpar utilizando uma estrutura de controle if. */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número inteiro: '));

if (numero % 2 === 0) {
    console.log('Número par');
} else {
    console.log('Número ímpar.');
}

/* 2. Crie um programa que classifica a idade de uma pessoa em categorias (criança, adolescente, adulto, idoso) com base no valor fornecido, utilizando uma estrutura de controle if-else. */

const prompt = require('prompt-sync')();

let idade = parseInt(prompt('Digite a idade: '));

if (idade >= 0 && idade <= 12) {
    console.log('Criança');
} else if (idade > 12 && idade <= 18) {
    console.log('Adolescente');
} else if (idade > 18 && idade <= 60) {
    console.log('Adulto');
} else if (idade > 60) {
    console.log('Idoso');
} else {
    console.log('Idade inválida');
}

/* 3. Implemente um programa que recebe uma nota de 0 a 10 e classifica como "Aprovado", "Recuperação", ou "Reprovado" utilizando if-else if. */

const prompt = require('prompt-sync')();

let nota = parseFloat(prompt('Digite a nota (0 a 10): '));

if (nota >= 6) {
    console.log('Aprovado');
} else if (nota >= 4) {
    console.log('Recuperação');
} else {
    console.log('Reprovado');
}

/* 4. Crie um menu interativo no console que oferece ao usuário a escolha de três opções. Utilize switch-case para implementar a lógica de cada opção selecionada. */

const prompt = require('prompt-sync')();

let opcao;

do {
    console.log('Escolha uma opção:');
    console.log('1. Verificar se um número é par ou ímpar.');
    console.log('2. Classificar a idade de uma pessoa.');
    console.log('3. Classificar uma nota.');
    console.log('0. Sair.');    
    opcao = parseInt(prompt('Digite a opção (1, 2 ou 3): '));

    switch (opcao) {
        case 0:
            console.log('Saindo...');
            break;
        case 1:
            let numero = parseInt(prompt('Digite um número inteiro: '));

            if (numero % 2 === 0) {
                console.log('Número par');
            } else {
                console.log('Número ímpar.');
            }
            break;
        case 2:
            let idade = parseInt(prompt('Digite a idade: '));

            if (idade >= 0 && idade <= 12) {
                console.log('Criança');
            } else if (idade > 12 && idade <= 18) {
                console.log('Adolescente');
            } else if (idade > 18 && idade <= 60) {
                console.log('Adulto');
            } else if (idade > 60) {
                console.log('Idoso');
            } else {
                console.log('Idade inválida');
            }
            break
        case 3:
            let nota = parseFloat(prompt('Digite a nota (0 a 10): '));

            if (nota >= 6) {
                console.log('Aprovado');
            } else if (nota >= 4) {
                console.log('Recuperação');
            } else {
                console.log('Reprovado');
            }
            break;
        default:
            console.log('Opção inválida.');
    }
    console.log('------------------------------------------');
}while (opcao != 0);

/* 5. Escreva um programa que calcula o Índice de Massa Corporal (IMC) de uma pessoa e determina a categoria de peso (baixo peso, peso normal, sobrepeso, obesidade) utilizando if-else. */

prompt = require('prompt-sync')();

let opcao;

do {
    console.log('Calculadora de IMC');
    let peso = parseFloat(prompt('Digite o peso em kg: '));
    let altura = parseFloat(prompt('Digite a altura em metros: '));
    let imc = peso / (altura * altura);

    if (imc < 18.5) {
        console.log(`IMC: ${imc.toFixed(2)} - Baixo peso`);
    } else if (imc >= 18.5 && imc < 25) {
        console.log(`IMC: ${imc.toFixed(2)} - Peso normal`);
    } else if (imc >= 25 && imc < 30) {
        console.log(`IMC: ${imc.toFixed(2)} - Sobrepeso`);
    } else {
        console.log(`IMC: ${imc.toFixed(2)} - Obesidade`);
    }

    opcao = prompt('Deseja calcular novamente? (s/n): ').toLowerCase();
}while (opcao == 's');


/*6. Ler três valores para os lados de um triângulo: A, B e C. Verificar se os lados fornecidos formam realmente um triângulo. Caso forme, deve ser indicado o tipo de triângulo: Isósceles, escaleno ou eqüilátero.
● Para verificar se os lados fornecidos formam triângulo: A < B + C e B < A + C e C < A + B
● Triângulo isósceles: possui dois lados iguais (A=B ou A=C ou B=C)
● Triângulo escaleno: possui todos os lados diferentes (A<>B e B<>C) -> (OBS: comparação está incompleta, falta a comparação A<>C).
● Triângulo eqüilátero: possui todos os lados iguais (A=B e B=C) */

const prompt = require('prompt-sync')();

let a = parseFloat(prompt('Digite o lado A do triângulo: '));
let b = parseFloat(prompt('Digite o lado B do triângulo: '));
let c = parseFloat(prompt('Digite o lado C do triângulo: '));

if (a < b + c && b < a + c && c < a + b) {
    if (a === b && b === c) {
        console.log('Triângulo eqüilátero');
    } else if (a === b || a === c || b === c) {
        console.log('Triângulo isósceles');
    } else {
        console.log('Triângulo escaleno');
    }
} else {
    console.log('Os lados fornecidos não formam um triângulo.');
}

/* 7. Fazer um algoritmo para receber números decimais até que o usuário digite 0 e fazer a média aritmética desses números. */

const prompt = require('prompt-sync')();

let numDecimal;
let contador = 0;
let soma = 0;

do {
    numDecimal = parseFloat(prompt('Digite um número decimal (0 para encerrar): '));

    if (numDecimal !== 0) {
        soma += numDecimal;
        contador++;
    }
}while (numDecimal !== 0);

if (contador > 0) {
    let media = soma / contador;
    console.log(`Média aritmética: ${media.toFixed(2)}`);
}

/* 8. Crie um programa que calcula o fatorial de um número fornecido pelo usuário utilizando um loop for ou while. */

const prompt = require('prompt-sync')();

let numero = parseInt(prompt('Digite um número: '));

if (numero < 0) {
    console.log('Não existe fatorial de número negativo.');
} else if (numero === 0) {
    console.log('O fatorial de 0 é 1.');
} else {
    let fatorial = 1;
    for (let i=numero; i > 1; i--) {
        fatorial *= i;
    }
    console.log(`Fatorial: ${fatorial}`);
}

/* 9. Escreva um programa que gera e imprime os primeiros 10 números da sequência de Fibonacci utilizando um loop for. */
/*
    A sequência de Fibonacci é uma série numérica infinita em que cada termo, a partir do terceiro, é a soma dos dois anteriores. Os dois primeiros termos são 1 e 1, e a sequência continua como 1, 1, 2, 3, 5, 8, 13, 21…
    Alguns autores consideram que a sequência começa em 0, 1, 1, 2, 3…, mas a versão mais usada inicia em 1, 1.
*/

let seqFib = [1, 1];

for (let i=2; i < 10; i++) {
    let prox = seqFib[i - 1] + seqFib[i - 2];
    seqFib.push(prox);
}

console.log(`Sequência de Fibonacci: ${seqFib}`);


/* 10. Faça um programa que leia 7 nomes de pessoas e guarde-os em um vetor. No final, mostre uma listagem com todos os nomes informados, na ordem inversa daquela em que eles foram informados.*/

const prompt = require('prompt-sync')();

let nomes = [];

for (let i=0; i < 7; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    nomes.push(nome);
}

console.log('Nomes informados:');

for (let i=6; i >= 0; i--) {
    console.log(nomes[i]);
}

/* 11. Crie um programa que leia o nome e a idade de 9 pessoas e guarde esses valores em dois vetores, em posições relacionadas. No final, mostre uma listagem contendo apenas os dados das pessoas menores de idade. */

const prompt = require('prompt-sync')();

let nomes = [];
let idades = [];

for (let i=0; i < 9; i++) {
    let nome = prompt(`Digite o nome da pessoa ${i + 1}: `);
    let idade = parseInt(prompt(`Digite a idade de ${nome}: `));
    nomes.push(nome);
    idades.push(idade);
}

console.log('Pessoas menores de idade:');

for (let i=0; i < 9; i++) {
    if (idades[i] < 18) {
        console.log(`Nome: ${nomes[i]}, Idade: ${idades[i]}`);
    }
}

/* 12. Faça uma função que recebe, por parâmetro, a altura (alt) e o sexo de uma pessoa e retorna o seu peso ideal. Para homens, calcular o peso ideal usando a fórmula: peso ideal = 72.7 x alt - 58 e, para mulheres, peso ideal = 62.1 x alt - 44.7. */

const prompt = require('prompt-sync')();

function calcularPesoIdeal(alt, sexo) {
    if (sexo === 'm') {
        return 72.7 * alt - 58;
    } else if (sexo === 'f') {
        return 62.1 * alt - 44.7;
    }
}

let altura;
let sexo;

do {
    altura = parseFloat(prompt('Digite a altura em metros: '));
} while (!altura || altura <= 0);

do {
    sexo = prompt('Digite o sexo (m/f): ').toLowerCase();
} while (sexo !== 'm' && sexo !== 'f');

let pesoIdeal = calcularPesoIdeal(altura, sexo);

console.log(`Peso ideal: ${pesoIdeal.toFixed(2)} kg`);

/* 13. Uma indústria faz a folha mensal de pagamentos de seus 80 empregados baseada no seguinte: existe uma tabela com os dados de cada funcionalidade: matrícula, nome e salário bruto. Escreva um programa que leia e processe a tabela e emita (escreva na tela), cada funcionário, seu contracheque, cujo formato é dado a seguir:
○ Matrícula:
○ Nome:
○ Salário bruto:
○ Dedução INSS:
○ Salário líquido:
(Dicas: desconto de 12%, salário líquido é a diferença entre salário bruto e a redução do INSS).*/

function calcularContraCheque(funcionario) {
    let deducaoINSS = funcionario.salarioBruto * 0.12;
    let salarioLiquido = funcionario.salarioBruto - deducaoINSS;

    console.log(`Matrícula: ${funcionario.matricula}`);
    console.log(`Nome: ${funcionario.nome}`);
    console.log(`Salário bruto: R$${funcionario.salarioBruto.toFixed(2)}`);
    console.log(`Dedução INSS: R$${deducaoINSS.toFixed(2)}`);
    console.log(`Salário líquido: R$${salarioLiquido.toFixed(2)}`);
    console.log('------------------------------------------');
}

// Usei esse array para simular os dados vindos da tabela do Banco de Dados.
let funcionarios = [
    {matricula: 1, nome: 'Funcionário 1', salarioBruto: 1000},
    {matricula: 2, nome: 'Funcionário 2', salarioBruto: 1500},
    {matricula: 3, nome: 'Funcionário 3', salarioBruto: 2000}
    // ...
];

for (let pos in funcionarios) {
    calcularContraCheque(funcionarios[pos]);
}

/* 14. A prefeitura de uma cidade fez uma pesquisa entre os seus habitantes, coletando dados sobre salário e número de filhos. Faça uma função que leia esses dados para um número não determinado de pessoas e retorne a média de salário da população, a média do número de filhos, o maior salário e o percentual de pessoas com salário até R$350,00. */

function processarPesquisa(pessoas) {
    let somaSalarios = 0;
    let somaFilhos = 0;
    let maiorSalario = 0;
    let contadorSalariosAte350 = 0;

    for (let pessoa of pessoas) {
        somaSalarios += pessoa.salario;
        somaFilhos += pessoa.numFilhos;

        if (pessoa.salario > maiorSalario) {
            maiorSalario = pessoa.salario;
        }

        if (pessoa.salario <= 350) {
            contadorSalariosAte350++;
        }
    }

    let mediaSalarios = somaSalarios / pessoas.length;
    let mediaFilhos = somaFilhos / pessoas.length;
    let percentualSalariosAte350 = (contadorSalariosAte350 / pessoas.length) * 100;

    return {
        mediaSalarios,
        mediaFilhos,
        maiorSalario,
        percentualSalariosAte350
    };
}

let pessoas = [
    {salario: 3000, numFilhos: 2},
    {salario: 2500, numFilhos: 3},
    {salario: 3500, numFilhos: 1},
    {salario: 350, numFilhos: 0},
    {salario: 200, numFilhos: 4}
    // ...
];

let resultado = processarPesquisa(pessoas);

console.log(`Média de salário: R$${resultado.mediaSalarios.toFixed(2)}`);
console.log(`Média do número de filhos: ${resultado.mediaFilhos.toFixed(2)}`);
console.log(`Maior salário: R$${resultado.maiorSalario.toFixed(2)}`);
console.log(`Percentual de pessoas com salário até R$350,00: ${resultado.percentualSalariosAte350.toFixed(2)}%`);

/* 15. Criar e imprimir a matriz identidade MI[1..7,1..7] em que todos os elementos da diagonal principal são iguais a 1 e os demais são nulos. */

let matrizIdentidade = [];

for (let i=0; i < 7; i++) {
    matrizIdentidade[i] = [];
    for (let j=0; j < 7; j++) {
        if (i === j ) {
            matrizIdentidade[i][j] = 1;
        } else {
            matrizIdentidade[i][j] = 0;
        }
    }
}

console.table(matrizIdentidade);

/* 16. Dada uma matriz M[1..6,1..8], criar um vetor C que contenha, em cada posição, a quantidade de elementos negativos da linha correspondente de M. */

let matrizM = [
    [3, -7, 0, 5, -2, 9, -10, 4],
    [-1, 8, -3, 6, -9, 2, -7, -4],
    [10, 5, 3, 8, 1, -6, 0, 9],
    [-2, -4, -7, 8, -1, 5, -3, -6],
    [-7, 9, 2, -4, 10, -6, 3, 8],
    [-5, -1, -2, -9, -7, -4, -3, -8]
];

let vetorC = [];

for (let i=0; i < matrizM.length; i++) {
    let contadorNegativos = 0;
    for (let j=0; j < matrizM[i].length; j++) {
        if (matrizM[i][j] < 0) {
            contadorNegativos++;
        }
    }
    vetorC[i] = contadorNegativos;
}

console.log(vetorC);

/* 17. Dado o objeto pessoa com propriedades nome e idade, acesse e imprima o valor de idade. Adicione uma nova propriedade chamada email ao objeto pessoa que já possui nome e idade. */

let pessoa = {
    nome: 'Alex',
    idade: 37
};

console.log(`Idade: ${pessoa.idade}`);

pessoa.email = 'alex@gmail.com';

console.log(pessoa);

/* 18. Crie um objeto chamado dados que contém várias propriedades, incluindo números, strings e arrays. Escreva uma função que retorne um novo objeto apenas com as propriedades que são arrays. */

function filtrarPropriedadesArray(dados) {
    let resultado = {};

    for (let chave in dados) {
        if (Array.isArray(dados[chave])) {
            resultado[chave] = dados[chave];
        }
    }

    return resultado;
}

let dados = {
    matricula: 12345,
    nome: 'Alex',
    sobrenome: 'Lemos',
    idade: 37,
    email: ['alex@gmail.com', 'alex@hotmail.com'],
    telefone: ['1234-5678', '9876-5432']
};

let resultado = filtrarPropriedadesArray(dados);

// console.log(resultado);

console.log(`E-mails: ${resultado.email}`);
console.log(`Telefones: ${resultado.telefone}`);

/* 19. Dado dois objetos, obj1 e obj2, escreva uma função que crie um novo objeto combinando as propriedades de ambos, onde as propriedades de obj2 têm precedência sobre as do obj1 em caso de conflitos. */

function combinarObjetos(obj1, obj2) {
    let resultado = {};

    for (let chave in obj1) {
        resultado[chave] = obj1[chave];
    }

    for (let chave in obj2) {
        resultado[chave] = obj2[chave];
    }

    return resultado;
}

let obj1 = {
    nome: 'Alex',
    idade: 36,
    email: 'alex@hotmail.com',
    endereco: 'Rua xxx, 123'
};

let obj2 = {
    nome: 'Alex',
    idade: 37,
    email: 'alex@gmail.com',
    telefone: '1234-5678'
};

let resultado = combinarObjetos(obj1, obj2);

console.log(resultado);

/* 20. Dado um array de strings, crie um objeto onde cada string é uma chave, e seu valor é o número de vezes que a string aparece no array. */

let arrayStrings = ['maçã', 'banana', 'laranja', 'maçã', 'banana', 'maçã'];

let objeto = {};

for (let string of arrayStrings) {
    let contador = 0;
    for (let item of arrayStrings) {
        if (item === string) {
            contador++;
        }
    }
    objeto[string] = contador;
}

// console.log(objeto);

console.table(objeto);

/* 21. Suponha que você tem um array de objetos onde cada objeto representa uma venda com vendedor e valor. Escreva uma função que retorne um objeto que sumarize o total de vendas por vendedor. */
// summarize = resumir

function totalVendasVendedor(vendas) {
    let resultado = {};

    for (let venda of vendas) {
        if (resultado[venda.vendedor]) {
            resultado[venda.vendedor] += venda.valor;
        } else {
            resultado[venda.vendedor] = venda.valor;
        }
    }

    return resultado;
}

let vendas = [
    {vendedor: 'v1', valor: 100},
    {vendedor: 'v2', valor: 200},
    {vendedor: 'v1', valor: 150},
    {vendedor: 'v3', valor: 300},
    {vendedor: 'v2', valor: 250}
];

let totalVendas = totalVendasVendedor(vendas);

// console.log(totalVendas);

console.table(totalVendas);
