// Aqui eu tenho um comentário em linha
/* 

mensagem no console

*/

 console.log('Olá Mundo!!') //mensagem

console.log({ //Ideia de um Objeto, a estrutura de um objeto

    name: "Mayk",
    idade: 36,
    andar: function(){
        console.log('andar')
    }
})

// Vetores - um agrupamento de dados
// Muito Util
console.log([
    "Leite",
    "Ovo",
    2,
    3,
])


//Data Types (tipos de dados)
// ECMAScript - aprova coisas novas pra linguagem
/* 

    Primitivos
String "ABC" "BCA" "bca" "Bca" - todas são diferentes
Number 23 32 33
Boolean true false
undefinied 
Symbol
BigInt

    Estruturais
Object - Recebe propriedades e funcionalidades (métodos)

Array
Map
Set
Date
...

Primitivo Estrutural - Aqui deveria ter um objeto, mas nao tem..

Null
*/






// Variáveis
// Nomes simbólicos para receber um valor.
/*
Atalhos de código
Identificadores
3 palavras reservadas para criar variáveis
*/
var clima = "Quente"
clima = "Frio"
console.log(clima) // Assim que voce alterar a variável ela vai pro ultimo valor atribuído

//const

const clima = "Quente"
clima = "Frio"  // Ira dar erro, pois constantes sao constante






// JS é uma linguagem fracamente Tipada
//fortemente tipada voce e obrigado a criar um tipo pra variavel
// Ex.: var clima: string

    var clima = 0
    console.log (typeof clima) //typeof permiti voce o tipo de variavel no console

//JS é uma linguagem dinamica, voce pode alterar ele, nao precisa declara o tipo da variavel






//Escopo determina a visibilidade de alguma variável no JS
// Block Statement - Declaração de um Bloco

// Inicio do Bloco (Escopo local, aquilo que sera visivel)

console.log('> existe x antes do bloco? ', x) //Acima daqui nao existe "x"
// Um código assim dara erro, pois a variavel deve ser declarada antes
// hoisting  - ele pega a variavel dentro da chave e joga la emcima, por isso ela fica "undefinied"
// reconhece a variavel digamos assim, mas sabe que está na posição errada
{
    let x = 0
    console.log(x)
}
// Escopo global, todo o restante do código








//