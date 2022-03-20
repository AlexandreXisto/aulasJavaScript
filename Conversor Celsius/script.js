let escolha = "c"
let cel = 30
let fah = 30

function conversorFParaC(entrada1) {
    const resultado = 0
    resultado = (entrada1 - 32) * 5/9
    return resultado
}

function conversorCParaF(entrada1) {
    const resultado1 = 0;
    resultado1 = (entrada1 * 9/5 + 32)
    return resultado1
}

if (escolha === "c") {
    conversorFParaC(fah)
}   else if (escolha === "f") {
    conversorCParaF(cel)
}

