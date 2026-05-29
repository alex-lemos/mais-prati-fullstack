/*
    Aula 07 - 
    Sábado com o prfessor Jaques.

    Material da turma 01:
    ???
*/

// Resumo do conteúdo da semana com a tuma 01:
console.alert('Olá, turma!') // console.alert() é usado para exibir uma caixa de diálogo de alerta no navegador. Ele é útil para chamar a atenção do usuário para uma mensagem importante ou para fornecer informações que exigem uma resposta imediata. Quando console.alert() é chamado, o navegador exibe uma janela pop-up com a mensagem fornecida e um botão "OK" para fechar a janela.

console.warn('Cuidado!') // console.warn() é usado para exibir mensagens de aviso no console do navegador. Ele é útil para alertar os desenvolvedores sobre possíveis problemas ou situações que podem exigir atenção, mas que não são necessariamente erros críticos. As mensagens exibidas com console.warn() geralmente aparecem em amarelo no console, destacando-se das mensagens normais e dos erros.

console.error('Erro!') // console.error() é usado para exibir mensagens de erro no console do navegador. Ele é útil para informar os desenvolvedores sobre problemas críticos ou erros que ocorrem durante a execução do código. As mensagens exibidas com console.error() geralmente aparecem em vermelho no console, destacando-se das mensagens normais e dos avisos, indicando que algo deu errado e precisa ser corrigido.

let textoNumero = "10" // string
console.log(textoNumero + 5) // concatenação de string, resultado: "105"
console.log(Number(textoNumero) + 5) // conversão de string para número, resultado: 15
console.log(parseInt(textoNumero) + 5) // conversão de string para número inteiro, resultado: 15
console.log(parseFloat(textoNumero) + 5) // conversão de string para número de ponto flutuante, resultado: 15

let num = 10
console.log(num + 5) // resultado: 15
console.log(num.toString() + 5) // conversão de número para string, resultado: "105"
console.log(String(num) + 5) // conversão de número para string, resultado: "105"


/* 
    prompt-sync é uma biblioteca que permite usar a função prompt() em ambientes Node.js, onde a função prompt() não está disponível por padrão. A função prompt() é usada para solicitar entrada do usuário, exibindo uma caixa de diálogo onde o usuário pode digitar uma resposta. Com prompt-sync, você pode usar a função prompt() para obter entrada do usuário em um ambiente de linha de comando, facilitando a interação com o usuário em seus programas Node.js.
 
    Para testar o prompt-sync
    Rodar no terminal o comando: npm install prompt-sync
    Depois rodar: node aula07_03_teste_prompt_sync.js

    Ou alterar a configuração do VSCode para o Code Runner rodar no terminal e vez de saída.

    testes de debug - (arquivos separados)
*/

const prompt = require('prompt-sync')() // Importa a biblioteca prompt-sync e a inicializa para uso

/* tabuada */
let valor = Number(prompt('Digite um número para ver a tabuada: ')) 

for (let i = 1; i <= 10; i++) {
    console.log(`${valor} x ${i} = ${valor * i}`)
} 

let nuns = [1, 2, 3, 4, 5]
console.table(nuns) // console.table() é usado para exibir dados em formato de tabela no console do navegador. Ele é útil para visualizar arrays, objetos ou qualquer estrutura de dados tabular de forma organizada e legível. Quando console.table() é chamado, o navegador exibe os dados em uma tabela, facilitando a leitura e a compreensão das informações apresentadas.

/*
    Vetores - arrays multidimensionais (matrizes)
*/

let matriz = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
]

console.log(matriz)

console.table(matriz)

for (let i = 0; i < matriz.length; i++) {
    for (let j = 0; j < matriz[i].length; j++) {
        console.log(matriz[i][j])
    }
}