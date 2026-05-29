/*
    Aula 09 - Aula 8: Objetos em JavaScript: Criação e Manipulação - Turma 02/2026 
*/

// Variáveis comuns -------------------------------
let nome = "Alex"
let idade = 30
let matrulado = true

/*
    let objeto = {
        propriedade1: valor1,
        propriedade2: valor2,
        ...
    }
*/

// Criando um objeto aluno -------------------------------
let aluno = {
    nome: "Alex",       //string
    idade: 30,          //number
    matriculado: true,   //boolean
    notas: [8, 8, 9],    //array
    endereco: {          //objeto aninhado
        cidade: "Pelotas",
        estado: "RS"
    }
}

console.log(aluno.nome) // Acessando a propriedade nome usando a notação de ponto
console.log(aluno.notas[1])

let aluno = {
    nome: "Alex",       //string
    idade: 30,          //number
    matriculado: true,   //boolean
    "notas dos alunos": [8, 8, 9],    //array
    "endereço": {          //objeto aninhado
        cidade: "Pelotas",
        estado: "RS"
    }
}

console.log(aluno["notas dos alunos"])
console.log(aluno["endereço"].cidade)

let propriedade = "nome"
console.log(aluno[propriedade]) // Acessando a propriedade nome usando a variável propriedade
console.log(aluno["nome"]) // Acessando a propriedade nome usando a notação de ponto

// Objero vazio -------------------------------
let produto = {}
console.log(produto) // Imprime: {}

// inserindo propriedades do objeto vazio
produto.nome = "Camiseta"
produto.preco = 49.90
produto.quantidadeEstoque = 100
produto.descricao = "Camiseta de algodão"
console.log(produto) 

// editando propriedades do objeto
produto.preco = 20.00
console.log(produto)

console.log("Preço do produto:", produto.preco) // Acessando a propriedade preço

// Objeto com array de objetos -------------------------------
let alunos = [
    {
        nome: "Alex",
        idade: 30,
        matriculado: true,
        notas: [8, 8, 9],
        endereco: {
            cidade: "Pelotas",
            estado: "RS"
        }
    },
    {
        nome: "Maria",
        idade: 25,          
        matriculado: false,
        notas: [7, 8, 9],
        endereco: {         
            cidade: "Porto Alegre",
            estado: "RS"
        }
    }
]

console.log(alunos)
console.log(alunos[0].nome) // Acessando o nome do primeiro aluno
console.log(alunos[1].endereco.cidade) // Acessando a cidade do segundo aluno

for(let propriedade in alunos) {
    console.log(`${propriedade}: ${alunos[propriedade]}`)
} // for in não funciona corretamente aqui

for(let propriedade of alunos) {
    console.log(`"Nome": ${propriedade.nome}`)
}

for(let aluno of alunos) {
    console.log(aluno.notas)
}

for(let [chave, valor] of Object.entries(alunos)) {
    console.log(`${valor.nome}`)
}

// Objeto com funcão --------------------------------
let aluno = {
    nome: "Alex",
    nota: 5,
    // Método do objeto para atualizar a nota do aluno
    atualizarNota: function(novaNota) {
        this.nota = novaNota;
    }
}

console.log(aluno.nota) // Imprime: 5
aluno.atualizarNota(8) // Atualiza a nota para 8
console.log(aluno.nota) // Imprime: 8
aluno.nota = 10 // Editando a nota diretamente
console.log(aluno.nota) // Imprime: 10

// Objeto  -------------------------------
let aluno = {
    nome: "Alex",
    nota: 5
}

const entradas = Object.entries(aluno)
console.log(entradas) // Imprime: [["nome", "Alex"], ["nota", 5]]

for(let [chave, valor] of Object.entries(aluno)) {
    console.log(`${chave}: ${valor}`)
}