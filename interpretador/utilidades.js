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
    while (/[ \n]/.test(sub[0])) {
        //Remover primeiro char
        sub = sub.substring(1, sub.length)
    }
    return sub
}

//Excluir até achar uma palavra que tenha no area e venha antes que os outros itens em uma lista
export function excluirUntilList (sub, lista) {
   //referenciar o nome do item que vem antes de todos
   let name = undefined
   //Referenciar posição desse nome começando com 100 para qualquer item que já existir no sub entrar aí
   let index = 100
   //Fazer um for each entre ela
   lista.forEach(e => {
      //Procurar onde ele aparece
      let aparecer = sub.indexOf(e)
      if (aparecer != -1 && aparecer < index) {
         name = e
         index = aparecer
      }
   });
   //Retornar um objeto do nome e da posição
   return {
      name: name,
      posição: index
   }
}

//Ele vai excluir caracteres de uma lista que você indicar
export function excluirSpecialList(lista, regex) {
   //Passar por todos os elementos da lista
   for (let i = 0; i < lista.length; i++) {
       lista[i] = excluirSpecialChar(lista[i], regex)
   }
   //Remover todos os elementos vazios
   lista = lista.filter(elemento => elemento !== "")
   return lista
}

export function excluirSpecialChar(string, regex) {
   return string.replaceAll(regex, "")
}

import {espelho} from "./interpretar.js";
import {variaveis} from "./interpretar.js";

//Pegar variável que quiser
export function getVariavel (name) {
     //Pegar o nome da variável
     let position = variaveis.indexOf(name)
     //Pegar o que está escrito nessa posição
     return espelho[position]
}

//Transcrever em uma variável
export function postVariavel (name, valor) {
    //Pegar o nome da variável
    let position = variaveis.indexOf(name)
    //Inserir valor nesse escopo
    espelho[position] = valor
}