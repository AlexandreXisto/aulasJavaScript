const date3 = new Date().toLocaleString("pt-BR", {timeZone: "America/Sao_Paulo"});
document.write(date3);

    function verificar() {
    var confirmar = window.document.getElementById('nacionalidade')
    var res = window.document.querySelector('div#res')
    var valor = String(nacionalidade.value)

      if (valor === 'Brasileiro' ) {
        res.innerHTML = `Você é Brasileiro.`
        res.style.color = "#ffff"
      } else if (valor !== 'Brasileiro' && valor != ''){
        res.innerHTML = `Você é ${valor}, portanto é Estrangeiro.`
        res.style.color = "gray"
      } else if (valor === '') {
        res.innerHTML = `[ERROR] o campo está vazio!`
        res.style.color = "red"
      }
    }

    function confirmar() {
      var res = document.getElementById('agendado')
      var valor = (Segunda.value)
      res.innerHTML = `<p>Agendado para ${valor}. <p> Compareça portando documento de identificação (RG) ou similar.`
    }