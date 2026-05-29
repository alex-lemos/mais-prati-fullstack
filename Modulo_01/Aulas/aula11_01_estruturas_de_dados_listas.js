/*
    Aula  11 -  Estruturas de Dados: Listas e Deques - Turma 02/2026

    -->> Listas (filas)   
    
    FIFO - (First In, First Out)

    Inserção no final da fila - push()
    Remoção no início da fila - shift()
*/

class Fila {
    // Criando a estrutura de dados para a fila
    constructor() {
        this.itens = []
    }

    // Método para adicionar um elemento no final da fila
    enfileirar(elemento) {
        this.itens.push(elemento)
    }

    // Método para verificar o tamanho da fila
    tamanho() {
        return this.itens.length
    }

    // Método para remover um elemento do início da fila
    desenfileirar() {
        if (this.tamanho() === 0) {
            return "A fila está vazia"
        }
        return this.itens.shift()
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
            return "A fila está vazia"
        }
        return this.itens[0]
    }
}

const fila = new Fila()

fila.imprimir() // (vazia)

fila.enfileirar("A")
fila.enfileirar("B")
fila.enfileirar("C")

console.log(fila.primeiro()) // A

fila.imprimir() // A -> B -> C

console.log(fila.desenfileirar()) // A

fila.imprimir() // B -> C

console.log(fila.desenfileirar()) // B

fila.imprimir() // C

console.log(fila.desenfileirar()) // C

fila.imprimir() // (vazia)

console.log(fila.desenfileirar()) // A fila está vazia