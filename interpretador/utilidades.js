//Vai pegar o valor entre dois caracteres em uma substring
export function valorEntre(sub, char1, char2) {
     //Encontrar aparição depois do char1 
     let primeiro = sub.indexOf(char1) + 1
     //Criar uma aparição para o char2
     let segundo;
     //Verificar se quer repetir o valor do char1
     if (char2 == undefined) {
        //Encontrar próxima aparição do char1
        segundo = sub.lastIndexOf(char1)
     }
     else {
        //Encontrar aparição do char2
        segundo = sub.indexOf(char2)
     }
     //Retornar o que tem entre esses termos
     return sub.substring(primeiro, segundo)
}

//Excluir até próximo char
export function excluirUntilChar(sub, char) {
   //Encontrar a posição depois do char no sub
   let index = sub.indexOf(char) + 1
   //Retornar tudo depois do char
   return sub.substring(index, sub.length)
}

//Excluir tudo depois do char
export function excluirAfterChar(sub, char) {
   //Encontrar a posição do char no sub
   let index = sub.indexOf(char)
   //Retornar tudo depois do char
   return sub.substring(0, index)
}

//Excluir espaços e quebras de linha
export function excluirSpaces (sub) {
    //Enquanto o primeiro char for igual a espaço ou quebra de linha
    while (sub[0] == " " || sub[0] == "\n") {
        //Remover primeiro char
        sub = sub.substring(1, sub.length)
    }
    return sub
}