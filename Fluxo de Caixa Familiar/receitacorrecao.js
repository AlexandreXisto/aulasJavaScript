let Familia = { //Criamos a variável em seguida colocamos os arrays
    Receitas: [Salario = 5000, Rendimentos = 1400, Imoveis = 1200],
    Despesas: [Agua = 1000, Luz = 300, Internet = 250, Alguel = 1500]
}

function soma(array) { //Esta função irá somar todos os arrays
    let total = 0; // variavel começa em zero.

    for (let value of array) { // For of cria uma lista dos valores do array
        total += value //A Função de somar a lista
    }

    return total
}


function calculoDoBalanço() { //Cria as variaveis da soma dos resultados e depois cria a condição
    const calcularReceitas = soma(Familia.Receitas) //Somou
    const calcularDespesas = soma(Familia.Despesas)

    const total = calcularReceitas - calcularDespesas //Subtraiu

    const OK = total //Variavel responsavel por intermediar a mensagem positivo.

    if(OK < 0){ //Caso o resultado seja maior que zero.

        textoBalanço = "Negativo"

    } else if (OK >= 0){ //Caso o resultado seja maior que zero.

        textoBalanço = "Positivo"

    } else {

        console.log('Inválido')

    }

    console.log(`Seu Saldo é ${textoBalanço}: ${total.toFixed(2)}R$`)
}


calculoDoBalanço()