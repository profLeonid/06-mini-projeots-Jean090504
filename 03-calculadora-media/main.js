'use strict'

const btnCalcularMedia = document.getElementById('buttonCalcularMedia')

const calcularMedia = () => {


    const recebeNome = document.getElementById('nome').value
    const recebeNota1 = Number(document.getElementById('n1').value)
    const recebeNota2 = Number(document.getElementById('n2').value)
    const recebeNota3 = Number(document.getElementById('n3').value)
    const enviaResultado = document.getElementById('resultadoMedia')

    let resultadoMedia = (recebeNota1 + recebeNota2 + recebeNota3) / 3

    

    if(resultadoMedia >= 7){
        enviaResultado.textContent = 'O aluno ' + recebeNome + ' foi aprovado!'
        enviaResultado.classList.remove('recuperacao', 'reprovado')
        enviaResultado.classList.add('aprovado')
    }else if(resultadoMedia < 5){
        enviaResultado.textContent = 'O aluno ' + recebeNome + ' foi reprovado!',
        enviaResultado.classList.remove('recuperacao', 'aprovado')
        enviaResultado.classList.add('reprovado')
    }else{
        enviaResultado.textContent = 'O aluno ' + recebeNome + ' está em recuperação!'
        enviaResultado.classList.remove('reprovado', 'aprovado')
        enviaResultado.classList.add('recuperacao')
    }
}


btnCalcularMedia.addEventListener('click', calcularMedia)