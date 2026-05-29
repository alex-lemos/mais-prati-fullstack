/*
    Aula 10 - Estruturas de Dados: Pilhas e Árvores

*/

// Pilha (Stack) - LIFO (Last In, First Out) ----------------------------------------

const pilha = []

// push() - Adiciona um elemento no topo da pilha
pilha.push("Livro 1")
pilha.push("Livro 2")
pilha.push("Livro 3")

console.log("Topo: ", pilha[pilha.length - 1])
// console.log(`Topo: ${pilha[pilha.length - 1]}`)

// pop() - Remove o elemento do topo da pilha e retorna ele
console.log("Removido: ", pilha.pop())

console.log("Agora o topo é: ", pilha[pilha.length - 1])

// ---------------------------------
// class Pilha 
class Pilha {
    constructor() {
        this.itens = []
    }

    // Método para adicionar um elemento no topo da pilha
    push(elemento) {
        this.itens.push(elemento)
    }

    // Método para verificar se a pilha está vazia
    isEmpty() {
        return this.itens.length === 0
    }

    // Método para remover o elemento do topo da pilha
    pop() {
        if (this.isEmpty()) {
            return "A pilha está vazia"
        }
        return this.itens.pop()
    }

    // Método para ver a pilha completa
    print() {
        console.log(this.itens)
    }
}

const minhaPilha = new Pilha()

minhaPilha.print() // []

minhaPilha.push("A")
minhaPilha.print() // ["A"]

minhaPilha.pop()
minhaPilha.print() // []

console.log(minhaPilha.pop()) // "A pilha está vazia"


// ---------------------------------
