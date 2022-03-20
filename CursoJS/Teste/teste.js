const a = window.document.getElementById('entrar')

function tela() {
    var n1 = prompt('Digite o primeiro numero: ');
    var n2 = prompt('Digite o segundo numero: ')
    var res = 0
    res = Number(n1) + Number(n2);
    alert(`O Resultado foi ${res}`)
}

function sair() {
    var confirma = confirm('Deseja realmente sair?')
        if(confirma == true) {
            alert('Saindo...')
        }
}






/*var fundo = window.document.body
        var d = window.document.querySelector('div#texto')
        function calculo() {
            resultado = entrada1 + entrada2;
            return resultado
        }
        /*var nome = window.prompt('Qual é seu nome?')
        var idade = window.prompt('Qual é sua idade?')
        var cidade = window.prompt('Qual é a sua cidade?')
        window.alert(`Bem vindo ${nome}! a cidade de ${cidade} é maravilhosa!`)
        var n1 = window.prompt('Digite um numero: ')
        var n2 = window.prompt('Digite o segundo numero: ')
        var resultado = Number(n1) + Number(n2)
        window.alert(` ${nome.toLocaleUpperCase()}, seu resultado é ${resultado.toFixed(2)}`)
        */