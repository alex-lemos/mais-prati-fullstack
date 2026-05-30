/***** Exercício 04 - Listas e Deques *****/

/*
1. Desenhando um sistema de impressão (Fila de Impressão)
Instruções:
● Criar uma fila que simula o processo de uma fila de impressão;
● Adicionar tarefas de impressão (como "Imprimir Documento 1", "Imprimir Documento 2", etc.) na fila e, em seguida, desenfileirar as tarefas uma a uma, simulando a impressão;
● Imprimir no console o nome do documento sendo impresso a cada vez que uma tarefa for desenfileirar;
● Ao final, se a fila estiver vazia, imprimir uma mensagem indicando que não há mais tarefas na fila.
*/

class Fila{
    // Criando a estrutura de dados para a fila
    constructor() {
        this.itens = []
    }

    // Método para adicionar o elemnto do fim da fila
    enfileirar(elemento) {
        this.itens.push(elemento)
    }

    // Método para verificar o tamanho da fila
    tamanho() {
        return this.itens.length
    }  

    // Método para remover o elemento do início da fila
    desenfileirar() {
        if (this.tamanho() === 0) {
            console.log("Não há mais tarefas na fila")
            return
        }
        console.log(`Imprimindo: ${this.itens.shift()}`)
    }

    // Método para ver a fila completa
    imprimir() {
        if (this.tamanho() === 0) {
            console.log("A fila está vazia")
            return
        }
        console.log(this.itens.join(" <- "))
    }

    // Retorna o primeiro elemento da fila sem removê-lo
    primeiro() {
        if (this.tamanho() === 0) {
            console.log("A fila está vazia")
            return
        }
        console.log(this.itens[0])
    }
}

const filaImpressao = new Fila()

filaImpressao.imprimir()

filaImpressao.enfileirar("Documento 1")
filaImpressao.enfileirar("Documento 2")
filaImpressao.enfileirar("Documento 3")

filaImpressao.imprimir()

filaImpressao.desenfileirar()
filaImpressao.desenfileirar()
filaImpressao.desenfileirar()
filaImpressao.desenfileirar()

filaImpressao.imprimir()

/*
2. Implementação de deque
Instruções:
● Implementar uma classe Deque que permita adicionar e remover elementos tanto na frente quanto no final da estrutura;
● A classe deve ter os métodos: addFront(element), addBack(element), removeFront(), removeBack(), peekFront(), peekBack(), isEmpty() e size();
● Criar um objeto da classe Deque e adicionar elementos em ambas as extremidades.

Após isso, remover elementos de ambas as extremidades e mostrar o estado da estrutura após cada operação.
*/

class Deque {
    // Criando a estrutura de dados para o deque
    constructor() {
        this.itens = []
    }

    // Método para adicionar um elemento no início do deque
    addFront(elemento) {
        this.itens.unshift(elemento)
    }

    // Método para adicionar um elemento no final do deque
    addBack(elemento) {
        this.itens.push(elemento)
    }

    // Método para verificar se o deque está vazio
    isEmpty() {
        return this.itens.length === 0
    }  

    // Método para remover um elemento da frente do deque
    removeFront() {
        if (this.isEmpty()) {
            console.log("O deque está vazio")
            return
        }
        console.log(`Removendo da frente: ${this.itens.shift()}`)
    }

    // Método para remover um elemento do final do deque
    removeBack() {
        if (this.isEmpty()) {
            console.log("O deque está vazio")
            return
        }
        console.log(`Removendo do final: ${this.itens.pop()}`)
    }

    // Método para ver o primeiro elemento do deque
    peekFront() {
        if (this.isEmpty()) {
            console.log("O deque está vazio")
            return
        }
        return this.itens[0]
    }

    // Método para ver o último elemento do deque
    peekBack() {
        if (this.isEmpty()) {
            console.log("O deque está vazio")
            return
        }
        return this.itens[this.itens.length - 1]
    }

    // Método para ver o tamanho do deque
    size() {
        return this.itens.length
    }

    // Método para imprimir o estado atual do deque
    imprimir() {
        if (this.isEmpty()) {
            console.log("O deque está vazio")
            return
        }
        console.log(this.itens.join(" <-> "))
    }
}

const deque = new Deque()

deque.imprimir()

deque.addBack("1")
deque.addBack("2")
deque.addFront("0")
deque.addFront("-1")

deque.imprimir()

deque.removeFront()
deque.removeBack()

deque.imprimir()

console.log(`Primeiro elemento: ${deque.peekFront()}`)
console.log(`Último elemento: ${deque.peekBack()}`)

deque.removeFront()
deque.removeFront()
deque.removeFront()

deque.imprimir()
