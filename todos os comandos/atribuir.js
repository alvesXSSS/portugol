import * as utilidades from "../interpretador/utilidades.js";

export function atribuir () {
    //Pegar parte da atribuição
    let parte = utilidades.excluirAfterChar(area.value, ";")
    //Retirar espaços e quebras de linha
    parte = utilidades.excluirSpecialChar(parte, /[ \n]/g)
    //Dividir a lista em antes da atribuição e depois
    let lista = parte.split("<-")
    //Referenciar a variável que que vai usada
    let variavelPost = lista[0]
    //Atribuir a lista uma divisão de operadores e operandos
    lista = lista[1].match(/[+\-*/]|\d+|[a-zA-Z]+/g)
    //Fazer isso até a lista contiver apenas um elemento
    while (lista.length > 1) {
        //Guardar resultado do switch
        let resultado;
        //Pegar o primeiro elemento da lista, o segundo (operador) e o terceiro
        let elm1 = parseFloat(verificarVariavel(lista[0]))
        let operador = lista[1]
        let elm2 = parseFloat(verificarVariavel(lista[2]))
        //Escolha do operador
        switch (operador) {
            case '+': resultado = elm1 + elm2
            break;
            case '-': resultado = elm1 - elm2
            break;
            case '/': resultado = elm1 / elm2
            break;
            case '*': resultado = elm1 * elm2
            break;
        }
        //Colocar o resultado no primeiro
        lista.unshift(resultado)
        //Remover os 3 primeiros elementos da lista
        lista.splice(1, 3)
    }
    //Atribuir novo valor a variável indicada
    utilidades.postVariavel(variavelPost, lista[0])
    //Excluir até ponto vírgula
    area.value = utilidades.excluirUntilChar(area.value, ";")
    //Excluir espaços e quebras de linha
    area.value = utilidades.excluirSpaces(area.value)
}

function verificarVariavel(e1) {
    //Verificar se possui apenas letras
    if (/[a-zA-Z]/.test(e1) === true) {
       return utilidades.getVariavel(e1)
    }
    else {
        return e1
    }
}