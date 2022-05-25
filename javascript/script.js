let btnConsultar = document.querySelector('#btnConsultar')
let cardResponse = document.querySelector('#cardResponse')
let btnLimpar = document.querySelector('#btnLimpar')
let dinheiro = document.querySelector('#dinheiro')

let despesasFixas = document.querySelector('#despesasFixas')
let despesasVariaveis = document.querySelector('#despesasVariaveis')
let reservaFinanceira = document.querySelector('#reservaFinanceira')
let labelInput = document.querySelector('#labelInput')
let aviso = document.querySelector('#aviso')

function sobreRegra(){
     window.open('https://economia.uol.com.br/mais/pagbank/2021/10/14/regra-50-30-20-aprenda-um-metodo-para-conseguir-economizar-hoje.htm')
}

btnLimpar.addEventListener('click', (e) => {
     e.preventDefault()

     let dinheiro = document.querySelector('#dinheiro')
     let cardRight = document.querySelector('.card-right')
     let main = document.querySelector('main')

     labelInput.removeAttribute('style', 'color: #f00')
     labelInput.innerHTML = 'Valor Bruto Mensal'
     dinheiro.removeAttribute('style', 'border: 2px solid #f00')

     dinheiro.value = ''
     document.documentElement.scrollTop = 0
     main.style.justifyContent = 'center'
     cardRight.style.display = 'none'
})

dinheiro.addEventListener('keyup', function (e) {
     e.preventDefault()

     if (dinheiro.value.length === 0 || dinheiro.value.length <= 2) {
          dinheiro.setAttribute('style', 'border: 2px solid #f00')
          aviso.innerHTML = 'Insira um valor de 100 até 9999'
          aviso.setAttribute('style', 'color: #f00; font-size: .8rem; margin: 10px 0 0 0')
     } else {

          aviso.innerHTML = ''
          dinheiro.removeAttribute('style', 'border: 2px solid #f00')
     }
})

btnConsultar.addEventListener('click', function (e) {
     e.preventDefault()

     let dinheiro = document.querySelector('#dinheiro').value

     if (dinheiro === '' || dinheiro.length <= 2) {
          aviso.innerHTML = 'Preencha este campo'
          aviso.setAttribute('style', 'color: #f00; margin: 10px 0 0 0')
     } else {

          let valorSalario = parseFloat(dinheiro).toFixed(2)
          let cardRight = document.querySelector('.card-right')
          let main = document.querySelector('main')

          let valorFixo = valorSalario * 0.5
          let valorVariavel = valorSalario * 0.3
          let valorReserva = valorSalario * 0.2

          window.scrollTo(0, 789)
          labelInput.removeAttribute('style', 'color: #f00')

          main.style.justifyContent = 'space-around'
          cardRight.style.display = 'flex'
          despesasFixas.innerHTML = `R$ ${valorFixo.toFixed(2).replace('.', ',')}`
          despesasVariaveis.innerHTML = `R$ ${valorVariavel.toFixed(2).replace('.', ',')}`
          reservaFinanceira.innerHTML = `R$ ${valorReserva.toFixed(2).replace('.', ',')}`
     }
})