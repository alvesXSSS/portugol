import * as utilidades from "./utilidades.js"

//Ele vai mostrar o nome do algoritmo
export function nomear () {
    //Montar uma string para informar o nome do algoritmo e indicar que ele vai rodar
    let string = "Rodar o algoritmo " + utilidades.valorEntre(area.value, '"')
    //Inserir a string no paragrafo do console
    manipularText.innerText = string
    //Excluir até o ponto virgula
    area.value = utilidades.excluirUntilChar(area.value, ";")
    //Excluir espaços
    area.value = utilidades.excluirSpaces(area.value)
}