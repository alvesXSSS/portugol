import * as utilidades from "../interpretador/utilidades.js";

export async function ler() {
   //Pegar variável entre parentêsis
   let nome = utilidades.valorEntre(area.value, '(', ')')
   //Mostrar o lugar que insere o valor das variáveis
   guardar.style.display = 'block'
   //Esperar a pessoa apertar o enter
   await enterPressed()
   //Pegar valor que a pessoa digitou no guardar e adicionar no espelho da variável
   utilidades.postVariavel(nome, guardar.value)
   //Excluir parte do leia
   area.value = utilidades.excluirUntilChar(area.value, ";")
   //Esconder o lugar que insere o valor das variáveis
   guardar.style.display = 'none'
   //Limpar o lugar de colocar variável
   guardar.value = ""
}

//Analisar um click em um enter
let enter = false

//Quando a pessoa clicar em uma tecla ele vai analisar
guardar.addEventListener('keydown', e => {
   if (e.key == "Enter") {
    //Não reiniciar a página quando apertar no enter
    e.preventDefault()
    //Mudar o enter para verdadeiro
    enter = true
   }
})

function enterPressed () {
   //Vai retornar que a pessoa já apertou
   return new Promise(resolve => {
      function voltar() {
        if (enter == true) {
           //Resolver a promessa
           resolve()
           //Voltar o enter para false
           enter = false
        }
        else {
            setTimeout(voltar, 100);
        }
      }
      //Chamar a função de voltar pela primeira vez
      voltar()
   })
}