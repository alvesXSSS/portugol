import {nomear} from "./algoritmoNome.js";

//Criar uma variável para salvar o que está escrito no valor da da area
let salvar;

//Mostrar um código para pessoa se basear nele
area.value = 'Algoritmo "mostrar receita";'

rodar.addEventListener('click', () => {
    manipular.style.display = 'block'
    salvar = area.value
    interpretar()
})

fechar.addEventListener('click', () => {
    manipular.style.display = 'none'
    area.value = salvar
})

//Rodar o código
function interpretar() {
  nomear()
}