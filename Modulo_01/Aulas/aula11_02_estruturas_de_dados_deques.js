/*
    Aula  11 -  Estruturas de Dados: Listas e Deques - Turma 02/2026

    -->> Deques (filas duplas)

    Permite inserção e remoção de elementos tanto no início quanto no final da fila.

    unshift(elemento) - Adiciona um elemento no início do array.
    push(elemento) - Adiciona um elemento no final do array.
    shift() - Remove o primeiro elemento do array.
    pop() - Remove o último elemento do array. 
*/

class Deque {
    // Criando a estrutura de dados para o deque
    constructor() {
        this.items = [];
    }

    // Adiciona um elemento no início do deque
    adicionarFrente(elemento) {
        this.items.unshift(elemento);
    }

    // Adicionar um elemento no final do deque
    adicionarAtras(elemento) {
        this.items.push(elemento);
    }

    // Verificar se a fila está vazia
    vazio() {
        return this.items.length === 0;
    }

    // Remover um elemento do início do deque
    removerFrente() {
        if (this.vazio()) {
            return "Deque is empty";
        }
        return this.items.shift();
    }

    // Remover um elemento do final do deque
    removerAtras() {
        if (this.vazio()) {
            return "Deque is empty";
        }
        return this.items.pop();
    }
}

const deque = new Deque();

