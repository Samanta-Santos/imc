const calcular = document.querySelector('.botao_calcular')
const resultado = document.querySelector('#resultado')

calcular.addEventListener('click', ()=> {
  const nome = document.querySelector('#nome').value
  const altura = document.querySelector('#altura').value
  const peso = document.querySelector('#peso').value

  if (nome != '' && altura != '' && peso != '') {
    const valorIMC = (peso / (altura * altura)).toFixed(1)

    let classificacao = ""

    if (valorIMC < 18) {
      classificacao = 'você está abaixo do peso.'
    }else if (valorIMC < 25){
      classificacao = 'você está com peso ideal, parabéns!'
    }else if (valorIMC < 30){
      classificacao = 'você está acima do peso.'
    }else if (valorIMC < 35) {
      classificacao = 'você está com obesidade.'
    }else if (valorIMC > 35) {
      classificacao = 'você está com obesidade mórbida, procure um médico!'
    }

    resultado.textContent = `${nome}, seu IMC é ${valorIMC} e ${classificacao}`

  }else {
    resultado.textContent = 'Preencha todos os campos!'
  }
})