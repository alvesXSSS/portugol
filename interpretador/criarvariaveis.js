import * as utilidades from "./utilidades.js";

export function escopo() {
    //Me retornar a posição que está escrito início no area.value e referenciar em uma variável
    let index = utilidades.excluirUntilList(area.value, ["início", 'Início', 'inicio', 'Inicio']).posição
    //Criar uma lista para desconstruir o valor da area até o index
    let variable = area.value.substring(0, index).split(" ")
    //Analisar se está divindo por ponto vírgula
    let pv = false;
    variable.forEach(e => {
        //Se existir um ponto vírgula em qualquer elemento do variaveis, então é dividido por pv
        if (e.indexOf(";") != -1) {
            pv = true
        }
    });
    //Substituir a lista por nova lista sem alguns caracteres
    return utilidades.excluirSpecialList(variable, /[ ,;\nvar]/g)
}