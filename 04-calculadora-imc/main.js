'use strict'

/* - Abaixo de 18.5: **"Abaixo do peso"**
- Entre 18.5 e 24.9: **"Peso normal"**
- Entre 25.0 e 29.9: **"Sobrepeso"**
- Entre 30.0 e 34.9: **"Obesidade grau I"**
- Entre 35.0 e 39.9: **"Obesidade grau II"**
- Acima de 40.0: **"Obesidade grau III"** */

const btnCalcularIMC = document.getElementById('buttonCalcularIMC')

const calcularImc = () =>{
    const nome = document.getElementById('nomeUsuario').value
    let altura = Number(document.getElementById('alturaUsuario').value)
    const peso = Number(document.getElementById('pesoUsuario').value)
    const enviaResultado = document.getElementById('resultadoIMC')

    if(altura > 3){
       altura = altura / 100
    }

    let imc = peso / (altura * altura)

    let classificacao = ''

    enviaResultado.classList.remove('abaixo-peso', 'peso-normal', 'sobrepeso', 'obesidade-grau-1', 'obesidade-grau-2', 'obesidade-grau-3')

    if (imc < 18.5) {
        classificacao = 'Abaixo do peso'
        enviaResultado.classList.add('abaixo-peso')
    } else if (imc >= 18.5 && imc < 25) {
        classificacao = 'Peso normal'
        enviaResultado.classList.add('peso-normal')
    } else if (imc >= 25 && imc < 30) {
        classificacao = 'Sobrepeso'
        enviaResultado.classList.add('sobrepeso')
    } else if (imc >= 30 && imc < 35) {
        classificacao = 'Obesidade grau I'
        enviaResultado.classList.add('obesidade-grau-1')
    } else if (imc >= 35 && imc < 40) {
        classificacao = 'Obesidade grau II'
        enviaResultado.classList.add('obesidade-grau-2')
    } else if (imc >= 40) {
        classificacao = 'Obesidade grau III'
        enviaResultado.classList.add('obesidade-grau-3')
    }

    enviaResultado.textContent = `O paciente ${nome} está com o IMC de ${imc.toFixed(2)} (${classificacao}).`
}

btnCalcularIMC.addEventListener('click', calcularImc)