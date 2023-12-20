import * as utilidades from '../interpretador/utilidades.js'

export function escrever () {
    //Referenciar o texto pro console
    let frase = ""
    //Pegar valor entre parentêsis
    let entreParentesis = utilidades.valorEntre(area.value, "(", ")")
    //Dividir o entre parentêsis por concatenação
    let lista = entreParentesis.split("+")
    //Verificar cada elemento e substituir caso for uma variável
    for (let i = 0; i < lista.length; i++) {
        //Verificar se é uma variável
        if (lista[i].indexOf('"') == -1) {
            //Se for uma variável, então ele vai chamar a função de variavel
            frase += analisarVar(lista[i])
        }
        else {
            frase += analisarTexto(lista[i])
        }
    }
    //Adicionar uma quebra de espaço final
    manipularText.innerText += frase + "\n"
    //Depois que acabar limpar até o ponto vírgula
    area.value = utilidades.excluirUntilChar(area.value, ";")
    //Limpar espaços e quebras de linhas
    area.value = utilidades.excluirSpaces(area.value)
}

function analisarVar (sub) {
    //Primeiramente vamos remover caracteres especiais
    sub = utilidades.excluirSpecialChar(sub, /[ \n;,]/g)
    //Pegar o valor dele na lista de variáveis
    return utilidades.getVariavel(sub)
}

function analisarTexto (sub) {
    //Pegar o que está entre aspas 
    return utilidades.valorEntre(sub, '"')
}