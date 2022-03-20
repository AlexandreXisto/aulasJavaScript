// transformDegree('50F')
function transformDegree(degree) {
    const celsiusExists = degree.toUpperCase().includes('C') //Identifcando se o usuario colocou C
    const fahrenheitExists = degree.toUpperCase().includes('F') //Identifcando se o usuario colocou F

    //Fluxo de erro
    if(!celsiusExists && !fahrenheitExists) { //senao tiver celsius ou fahrenheit, pode sair do programa
        throw new Error('Grau não identificado') //consegue fazer um rastreamento do seu erro
    }

    //fluxo ideal, F -> C
    let updatedDegree = Number(degree.toUpperCase().replace("F", "")); //Convertendo de String para Number
    let formula = (fahrenheit) => (fahrenheit - 32) * 5/9
    let degreeSign = 'C' //Sinal novo que o "F" irá receber

    //fluxo alternativo C -> F
    if(celsiusExists) {
        updatedDegree = Number(degree.toUpperCase().replace("C", "")); //Convertendo de String para Number
        formula = (celsius) => celsius * 9/5 + 32
        degreeSign = 'F' //Sinal novo que o "F" irá receber
    
    }

    return formula(updatedDegree) + degreeSign

}

try {
    console.log(transformDegree('10C'))
    console.log(transformDegree('50F'))
    transformDegree('50Z')
    // transformDegree('50Z') //passando um errado para ver se ele cai, um erro específico para ser rastreado
} catch (error) {
    console.log('error.message') //error.message vai mostrar a mensagem na tela "Grau não identificado"
                                //se for apenas error, ele vai indicar até mesmo a linha
}