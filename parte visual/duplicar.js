area.addEventListener('keydown', e => {
    duplicar(e.key, "{", "}")
    duplicar(e.key, "(", ")")
    duplicar(e.key, '"', '"')
    //Apagar a duplicação
    if (e.key == "Backspace") {
       apagar("(", ")")
       apagar('"', '"')
       apagar("{", "}")
    }
    if (e.key == "Enter") {
        quebrar()
    }
})

function duplicar(key, tecla, char) {
   //Verificar se a tecla clicada é igual a tecla pedida
   if (key == tecla) {
      //Pegar posição do cursor do teclado
      let cursor = area.selectionStart
      mudar(char, cursor, 0)    
   }
}

function apagar(tecla, char) {
    analisarEspelho(tecla, char, "", 1)
}

//Ela vai quebrar linhas caso tiver um {}
function quebrar () {
    analisarEspelho("{", "}", '\n', 0)
}

//Adicionar vai adicionar uma string no meio do p1 e p2
//O pular server para dizer quantos caracteres você quer pular depois do escolhido
function mudar(adicionar, cursor, pular) {
    //Pegar parte antes do char
    let p1 = area.value.substring(0, cursor)
    //Pegar parte depois do char
    let p2 = area.value.substring(cursor + pular, area.value.length)
    //Inserir novo valor ao area.value
    area.value = p1 + adicionar + p2
    //Refocar o mouse para a posição do ponteiro
    area.selectionStart = cursor
    area.selectionEnd = cursor
}

function analisarEspelho(tecla, char, adicionar, pular) {
     //Pegar posição atual do cursor do teclado
     let cursor = area.selectionStart
     //Pegar tecla que está no cursor
     let ponteiro = area.value.substring(cursor - 1, cursor + 1)
     //Tecla para análise
     let antes = ponteiro[0]
     //Tecla espelho para análise
     let depois = ponteiro[1]
     //Analisar se a tecla depois dela é seu espelho e a tecla é igual a tecla analisada
     if (tecla == antes && char == depois) {
         mudar(adicionar, cursor, pular)
     }
}