import {nomear} from "./algoritmoNome.js";
import {escopo} from "./criarvariaveis.js"
import {repetirComando} from "../todos os comandos/repetirComandos.js";

//Criar uma variável para salvar o que está escrito no valor da da area
let salvar;

//Criar uma lista para armazenamento de variáveis
export var variaveis = []

//Criar uma lista para armazenamento espelho de variáveis
export var espelho = []

//Mostrar um código para pessoa se basear nele
area.value = 'Algoritmo "mostrar soma"; \nvar n1, n2; \nInício \n  Leia(n1);\nfimAlgoritmo'

rodar.addEventListener('click', () => {
    manipular.style.display = 'block'
    salvar = area.value
    interpretar()
})

fechar.addEventListener('click', () => {
    manipular.style.display = 'none'
    area.value = salvar
    //Resetar variaveis e espelho
    variaveis = []
    espelho = []
})

//Rodar o código
function interpretar() {
  nomear()
  variaveis = escopo()
  criarEscopoNoEspelho()
  repetirComando()
}

//Irá criar escopo no espelho para poder substituir depois
function criarEscopoNoEspelho () {
  variaveis.forEach(() => {
     espelho.push(undefined)
  })
}