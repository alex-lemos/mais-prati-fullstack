/*****  MÓDULO 01 - LISTA DE EXERCÍCIOS 03 *****/

console.log("\n------------------------------");

/*1. Crie um objeto representando um produto com as propriedades: nome, preço,
categoria e quantidade em estoque. Use for...in para percorrer e exibir todas as
propriedades e seus valores. Em seguida, adicione uma nova propriedade
desconto ao objeto e exiba o preço final calculado.*/

console.log("\n->Exercício 1:");

let produto = {
    nome: "Camiseta",
    preco: 50,
    categoria: "Roupas",
    quantidadeEstoque: 100
};

for (let propriedade in produto) {
    console.log(`${propriedade}: ${produto[propriedade]}`);
}

produto.desconto = 10; 
let precoFinal = produto.preco - (produto.preco * (produto.desconto / 100));
console.log(`Desconto de ${produto.desconto}%: R$ ${precoFinal.toFixed(2)}`);

console.log("\n------------------------------");

/*2. Crie dois objetos representando personagens de um jogo, cada um com as
propriedades: nome, vida, ataque e defesa. Use for...in para exibir os atributos de
cada personagem lado a lado e determine qual deles tem maior poder total
(soma de vida + ataque + defesa).*/

console.log("\n->Exercício 2:");

let personagem1 = {
    nome: "Guerreiro",
    vida: 100,
    ataque: 70,
    defesa: 60
};

let personagem2 = {
    nome: "Mago",
    vida: 80,
    ataque: 90,
    defesa: 80
};

//Fiquei em dúvida de como era para ficar a impressão final. Então fiz a primeira forma usando for...in, tentando imprimir os atributos dos personagens lado a lado.

console.log("Personagem 1 | Personagem 2");
for (let propriedade in personagem1) {
    console.log(`${propriedade}: ${personagem1[propriedade]} | ${propriedade}: ${personagem2[propriedade]}`);
}

let poderTotal1 = personagem1.vida + personagem1.ataque + personagem1.defesa;
let poderTotal2 = personagem2.vida + personagem2.ataque + personagem2.defesa;

console.log(`Poder Total: ${poderTotal1} | Poder Total: ${poderTotal2}`);

//Como a impressão ficou confusa pesquisei uma forma mais organizada de imprimir os atributos dos personagens lado a lado.

console.log("\nPersonagem 1            | Personagem 2");
for (let prop in personagem1) {
    let chave = prop.padEnd(11, " "); //Ajusta o espaçamento para alinhar as chaves
    let valor1 = String(personagem1[prop]).padEnd(10, " ");
    let valor2 = String(personagem2[prop]).padEnd(10, " ");
    console.log(`${chave}: ${valor1} | ${chave}: ${valor2}`);
}

console.log(`Poder Total: ${poderTotal1}        | Poder Total: ${poderTotal2}`);

if (poderTotal1 > poderTotal2) {
    console.log(`\n${personagem1.nome} tem maior poder total.`);
} else if (poderTotal2 > poderTotal1) {
    console.log(`\n${personagem2.nome} tem maior poder total.`);
} else {
    console.log(`\nOs 2 personagens têm o mesmo poder total.`);
}

console.log("\n------------------------------");

/*3. Crie um objeto representando um funcionário com nome, cargo, salário e anos de
experiência. Use for...in para listar todos os dados. Com base nos anos de
experiência, calcule e exiba o bônus anual: até 2 anos = 5% do salário, de 3 a 5
anos = 10%, acima de 5 anos = 15%.*/

console.log("\n->Exercício 3:");

let funcionario = {
    nome: "Alex",
    cargo: "Programador",
    salario: 5000,
    anosExperiencia: 4
};

for (let propriedade in funcionario) {
    console.log(`${propriedade}: ${funcionario[propriedade]}`);
}

let bonus;

if (funcionario.anosExperiencia <= 2) {
    bonus = funcionario.salario * 0.05;
} else if (funcionario.anosExperiencia >= 3 && funcionario.anosExperiencia <= 5) {
    bonus = funcionario.salario * 0.10;
} else {
    bonus = funcionario.salario * 0.15;
}

console.log(`Bônus anual: R$ ${bonus.toFixed(2)}`);

console.log("\n------------------------------");

/*4. Crie um objeto onde cada chave é o nome de um item e o valor é a quantidade
no inventário do jogador (ex: { espada: 1, poção: 5, escudo: 2 }). Use for...in para
listar o inventário completo. Permita que o usuário informe um item para usar:
reduza a quantidade em 1 ou exiba "item esgotado" se for zero.*/

console.log("\n->Exercício 4:");

const prompt = require('prompt-sync')();

let inventario = {
    espada: 3,
    escudo: 2,
    poção: 5
};

console.log("Inventário do jogador:");
for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}

console.log(" ");

let itemUsar = prompt("Informe o item que deseja usar: ").toLowerCase();

if (inventario[itemUsar] > 0) {
    inventario[itemUsar]--;
    console.log(`Item usado: ${itemUsar}`);
} else {
    console.log("Item não encontrado no inventário.");
}

console.log("\nInventário do jogador:");
for (let item in inventario) {
    console.log(`${item}: ${inventario[item]}`);
}

console.log("\n------------------------------");

/*5. Crie um objeto representando o orçamento mensal de uma pessoa, com
categorias como alimentação, transporte, lazer e saúde, cada uma com valor
planejado e valor gasto. Use for...in para percorrer as categorias e exibir se cada
uma ficou dentro ou acima do orçamento, e calcule o saldo geral do mês.*/

console.log("\n->Exercício 5:");

let orcamentoMensal = {
    alimentacao: { planejado: 800, gasto: 750 },
    transporte: { planejado: 300, gasto: 350 },
    lazer: { planejado: 200, gasto: 300 },
    saude: { planejado: 400, gasto: 100 }
};

let saldoGeral = 0;

console.log("Orçamento Mensal:");

for (let categoria in orcamentoMensal) {
    let planejado = orcamentoMensal[categoria].planejado;
    let gasto = orcamentoMensal[categoria].gasto;
    let status = gasto <= planejado ? "Dentro do orçamento" : "Acima do orçamento";
    console.log(`${categoria}: ${status} (Planejado: R$ ${planejado}, Gasto: R$ ${gasto})`);
    saldoGeral += (planejado - gasto);
}

console.log(`Saldo geral do mês: R$ ${saldoGeral.toFixed(2)}`);

console.log("\n------------------------------");

/*6. Crie um array de objetos representando músicas, cada uma com título, artista e
duração em segundos. Use for...of para exibir cada música no formato "Artista —
Título (mm:ss)". Ao final, use forEach para somar a duração total e exiba-a no
mesmo formato.*/

console.log("\n->Exercício 6:");

console.log("Lista de Músicas:");

let musicas = [
    { titulo: "Bad Angel", artista: "Lisa", duracao: 210 },
    { titulo: "Choom", artista: "Babymonster", duracao: 180 },
    { titulo: "Jump", artista: "Blackpink", duracao: 200 },
    { titulo: "Desgraça", artista: "Anitta", duracao: 240 },
    { titulo: "Come Back Home", artista: "2NE1", duracao: 260 }
];

for (let musica of musicas) {
    let minutos = Math.floor(musica.duracao / 60);
    let segundos = (musica.duracao % 60).toString().padStart(2, '0');
    console.log(`${musica.artista} — ${musica.titulo} (${minutos}:${segundos})`);
}

let totalDuracao = 0;

musicas.forEach(musica => {
    totalDuracao += musica.duracao;
});

let totalMinutos = Math.floor(totalDuracao / 60);
let totalSegundos = (totalDuracao % 60).toString().padStart(2, '0');
console.log(`\nDuração total: ${totalMinutos}:${totalSegundos}`);

console.log("\n------------------------------");

/*7. Crie um array de objetos com nome e nota de 6 alunos. Use for...of para classificar
cada aluno (Aprovado, Recuperação ou Reprovado) e exibir o resultado. Use
forEach para calcular e exibir separadamente a média dos aprovados e a média
dos reprovados.*/

console.log("\n->Exercício 7:");

let alunos = [
    { nome: "Aluno 1", nota: 9.5 },
    { nome: "Aluno 2", nota: 4.0 },
    { nome: "Aluno 3", nota: 10.0 },
    { nome: "Aluno 4", nota: 6.5 },
    { nome: "Aluno 5", nota: 5.5 },
    { nome: "Aluno 6", nota: 1.0 }
];

for (let aluno of alunos) {
    let classificacao = aluno.nota >= 6 ? "Aprovado" : (aluno.nota >= 4 ? "Recuperação" : "Reprovado");
    console.log(`${aluno.nome}: ${aluno.nota.toFixed(1)} -> ${classificacao}`);
}

let somaAprovados = 0;
let somaRecuperacao = 0;
let somaReprovados = 0;

let contAprovados = 0;
let contRecuperacao = 0;
let contReprovados = 0;

alunos.forEach(aluno => {
    if (aluno.nota >= 6) {
        somaAprovados += aluno.nota;
        contAprovados++;
    } else if (aluno.nota >= 4) {
        somaRecuperacao += aluno.nota;
        contRecuperacao++;
    } else {
        somaReprovados += aluno.nota;
        contReprovados++;
    }
});

console.log(`\nAlunos Aprovados: ${contAprovados} - Nota média: ${(somaAprovados / contAprovados).toFixed(2)}`);
console.log(`Alunos em Recuperação: ${contRecuperacao} - Nota média: ${(somaRecuperacao / contRecuperacao).toFixed(2)}`);
console.log(`Alunos Reprovados: ${contReprovados} - Nota média: ${(somaReprovados / contReprovados).toFixed(2)}`);

console.log("\n------------------------------");

/*8. Crie um array de objetos representando produtos com nome, preço e quantidade.
Use forEach para calcular o valor total em estoque de cada produto (preço ×
quantidade) e exibir um relatório. Ao final, exiba o valor total geral de todo o
estoque.*/

console.log("\n->Exercício 8:");

let produtos = [
    { nome: "Produto 1", preço: 10.0, quantidade: 5 },
    { nome: "Produto 2", preço: 15.0, quantidade: 3 },
    { nome: "Produto 3", preço: 20.0, quantidade: 2 }
];

let valorTotalEstoque = 0;

produtos.forEach(produto => {
    let valorTotalItem = produto.preço * produto.quantidade;
    valorTotalEstoque += valorTotalItem;
    console.log(`${produto.nome}: R$ ${valorTotalItem.toFixed(2)}`);
});

console.log(`\nValor total em estoque: R$ ${valorTotalEstoque.toFixed(2)}`);

console.log("\n------------------------------");

/*9. Crie um array de objetos onde cada objeto representa um contato com nome,
telefone e e-mail. Use forEach para listar todos os contatos formatados. Permita
buscar um contato pelo nome usando for...of e exiba os dados encontrados ou
uma mensagem de "não encontrado".*/

console.log("\n->Exercício 9:");

const prompt2 = require('prompt-sync')();

let contatos = [
    { nome: "Pessoa 1", telefone: "123456789", email: "pessoa1@email.com" },
    { nome: "Pessoa 2", telefone: "987654321", email: "pessoa2@email.com" },
    { nome: "Pessoa 3", telefone: "555555555", email: "pessoa3@email.com" },
    { nome: "Pessoa 4", telefone: "111111111", email: "pessoa4@email.com" },
    { nome: "Pessoa 5", telefone: "222222222", email: "pessoa5@email.com" }
];

console.log("Lista de Contatos:");
contatos.forEach(contato => {
    console.log(`Nome: ${contato.nome}, Telefone: ${contato.telefone}, E-mail: ${contato.email}`);
});
console.log(" ");
let nomeBusca = prompt2("Digite o nome que deseja buscar: ");

let contatoEncontrado = false;

for (let contato of contatos) {
    if (contato.nome.toLowerCase() === nomeBusca.toLowerCase()) {
        console.log(`Contato encontrado: Nome: ${contato.nome}, Telefone: ${contato.telefone}, E-mail: ${contato.email}`);
        contatoEncontrado = true;
        break;
    }
}

if (!contatoEncontrado) {
    console.log("Contato não encontrado.");
}       

console.log("\n------------------------------");

/*10. Implemente uma pilha usando um array para simular o histórico de um
navegador. Crie as funções visitar(pagina) (push), voltar() (pop) e paginaAtual()
(peek). Simule uma sessão: visite 4 páginas, volte 2 vezes e exiba a página atual a
cada operação.*/

console.log("\n->Exercício 10:");

class PilhaNavegador {
    constructor() {
        this.historico = []
    }

    visitar(pagina) {
        this.historico.push(pagina)
    }

    voltar() {
        if (this.historico.length === 0) {
            return "Histórico vazio"
        } else {
            return this.historico.pop()
        }
    }

    paginaAtual() {
        if (this.historico.length === 0) {
            return "Histórico vazio"
        } else {
            return this.historico[this.historico.length - 1]
        }
    }
}

let historicoNavegador = new PilhaNavegador();

historicoNavegador.visitar("www.google.com");
console.log(`\nPágina atual: ${historicoNavegador.paginaAtual()}`);

historicoNavegador.visitar("www.github.com");
console.log(`\nPágina atual: ${historicoNavegador.paginaAtual()}`);

historicoNavegador.visitar("www.youtube.com");
console.log(`\nPágina atual: ${historicoNavegador.paginaAtual()}`);

historicoNavegador.visitar("www.linkedin.com");
console.log(`\nPágina atual: ${historicoNavegador.paginaAtual()}`);

historicoNavegador.voltar();
console.log(`\nVoltar...`);
console.log(`Página atual: ${historicoNavegador.paginaAtual()}`);

historicoNavegador.voltar();
console.log(`\nVoltar...`);
console.log(`Página atual: ${historicoNavegador.paginaAtual()}`);

console.log("\n------------------------------");

/*11. Implemente uma fila usando um array para simular o atendimento de uma
clínica. Crie as funções chegarPaciente(nome) (enqueue), chamarProximo()
(dequeue) e exibirFila(). Simule a chegada de 5 pacientes e o atendimento de 3,
exibindo o estado da fila a cada operação.*/

// enqueue = adicionar paciente no final da fila -> push
// dequeue = remover paciente do início da fila -> shift

console.log("\n->Exercício 11:");

class FilaAtendimento {
    constructor() {
        this.fila = []
    }

    chegarPaciente(nome) {
        this.fila.push(nome)
    }

    chamarProximo() {
        if (this.fila.length === 0) {
            return "Fila vazia"
        } else {
            return this.fila.shift()
        }
    }

    exibirFila() {
        if (this.fila.length === 0) {
            console.log("Fila vazia")
        } else {
            console.log(`Fila de atendimento: ${this.fila.join(" <- ")}`)
        }
    }
}

let filaAtendimento = new FilaAtendimento();

filaAtendimento.chegarPaciente("Paciente 1");
filaAtendimento.exibirFila();

filaAtendimento.chegarPaciente("Paciente 2");
filaAtendimento.exibirFila();

filaAtendimento.chegarPaciente("Paciente 3");
filaAtendimento.exibirFila();

filaAtendimento.chegarPaciente("Paciente 4");
filaAtendimento.exibirFila();

filaAtendimento.chegarPaciente("Paciente 5");
filaAtendimento.exibirFila();

console.log(`\nChamando paciente... ${filaAtendimento.chamarProximo()}`);
filaAtendimento.exibirFila();

console.log(`\nChamando paciente... ${filaAtendimento.chamarProximo()}`);
filaAtendimento.exibirFila();

console.log(`\nChamando paciente... ${filaAtendimento.chamarProximo()}`);
filaAtendimento.exibirFila();

console.log("\n------------------------------");

/*12. Implemente uma lista ligada simples usando nós ({ valor, proximo }). Crie as
funções adicionar(tarefa), remover(tarefa) e exibir() que percorre todos os nós.
Simule um gerenciador de tarefas: adicione 4 tarefas, remova uma pelo nome e
exiba a lista antes e depois.*/

console.log("\n->Exercício 12:");

class Nodo {
    constructor(tarefa) {
        this.valor = tarefa;
        this.proximo = null;
    }
}

class ListaSimplesmenteEncadeada {
    constructor() {
        this.inicio = null;
        this.fim = null;
        this.tamanho = 0;
    }

    adicionar(tarefa) {
        const novoNodo = new Nodo(tarefa);

        if (!this.inicio) {
            this.inicio = novoNodo;
            this.fim = novoNodo;
        } else {
            this.fim.proximo = novoNodo;
            this.fim = novoNodo;
        }
        this.tamanho++;
    }

    remover(tarefa) {
        if (!this.inicio) return;

        if (this.inicio.valor === tarefa) {
            this.inicio = this.inicio.proximo;
            if (!this.inicio) this.fim = null;
            this.tamanho--;
            return "Tarefa removida";
        }

        let atual = this.inicio;
        while (atual.proximo) {
            if (atual.proximo.valor === tarefa) {
                atual.proximo = atual.proximo.proximo;
                if (!atual.proximo) this.fim = atual;
                this.tamanho--;
                return "Tarefa removida";
            }
            atual = atual.proximo;
        }

        return "Tarefa não encontrada";
    }

    exibir() {
        console.log("\nLista de Tarefas:");

        if (!this.inicio) {
            console.log("Lista vazia.");
            return;
        }

        let atual = this.inicio;
        while (atual) {
            console.log(`- ${atual.valor}`);
            atual = atual.proximo;
        }
    }
}

let listaTarefas = new ListaSimplesmenteEncadeada();

listaTarefas.exibir();

listaTarefas.adicionar("Tarefa 1");
listaTarefas.adicionar("Tarefa 2");
listaTarefas.adicionar("Tarefa 3");
listaTarefas.adicionar("Tarefa 4");

listaTarefas.exibir();

console.log(`\nRemovendo Tarefa 2...`);
console.log(listaTarefas.remover("Tarefa 2"));

listaTarefas.exibir();

console.log("\n------------------------------");
