'use strict'

const btnCalcular = document.getElementById('buttonCalcular')

const calcularDesconto = () => {
    const recebePrecoOriginal = Number(document.getElementById('precoOriginal').value)
    const receberDesconto = Number(document.getElementById('desconto').value)
    const devolveResultado = document.getElementById('resultado')

    const descontoDividido = receberDesconto / 100
    const valorDoDesconto = recebePrecoOriginal * descontoDividido
    const resultadoFinal = recebePrecoOriginal - valorDoDesconto

    devolveResultado.textContent = 'Valor com o desconto: ' + resultadoFinal

    devolveResultado.classList.remove('ate5', 'entre10e5', 'acima10')


    if (receberDesconto < 5) {
        devolveResultado.classList.add('ate5')
    } else if (receberDesconto >= 5 && receberDesconto < 10) { 
        devolveResultado.classList.add('entre10e5')
    } else if (receberDesconto >= 10) {
        devolveResultado.classList.add('acima10')
    }
}

btnCalcular.addEventListener('click', calcularDesconto)