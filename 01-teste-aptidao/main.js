'use strict'

const btnAvaliar = document.getElementById('buttonAvaliar')


const avaliarTesteDeAptidao = () => {
    const receberInputTempo = document.getElementById('inputTempo').value
    const receberResultado = document.getElementById('resultadoTempo')
    const receberInputNome = document.getElementById('inputNome').value

    if(receberInputTempo >= 14){
        receberResultado.textContent = 'O ' + receberInputNome + ' não está apto!'

        receberResultado.classList.remove('apto')
        receberResultado.classList.add('naoApto')
    }else{
        receberResultado.textContent = 'O ' + receberInputNome + ' está apto!'

        receberResultado.classList.remove('naoApto')
        receberResultado.classList.add('apto')
    }

}

btnAvaliar.addEventListener('click', avaliarTesteDeAptidao )




