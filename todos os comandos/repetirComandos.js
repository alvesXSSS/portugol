import * as utilidades from "../interpretador/utilidades.js"

export async function repetirComando() {
    //Analisar onde termina o início, o +6 serve para pular a palavra também
    let index = utilidades.excluirUntilList(area.value, ["início", 'Início', 'inicio', 'Inicio']).posição + 6
    //Cortar o valor do area até o início
    area.value = area.value.substring(index, area.value.length)
    //Excluir espaços e quebras de linha
    area.value = utilidades.excluirSpaces(area.value)
    //remover possível loop
    let loop = 0
    //Enquanto não chegar ao fim do algoritmo vai continuar rodando
    while (/fimalgoritmo/i.test(area.value.substring(0, 12)) == false && loop < 100) {
      loop++
      if (/escreva/i.test(area.value.substring(0, 7)) == true) {
         console.log("escreva")
      }
      else if (/leia/i.test(area.value.substring(0, 4)) == true) {
        console.log("leia")
      }
      else if (/se\s*\(/i.test(area.value.substring(0, 7)) == true) {
         console.log("se ()")
      }
      else {
         console.log("atribuição")
      }
    }
}