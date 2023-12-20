//Manipulação das linhas do projeto

//Referenciar o text area de escrever código
var area = document.getElementById('area')

//Referenciar o botão de rodar o código
var rodar = document.getElementById("rodar")

//Referenciar o botão de fechar o console
var fechar = document.getElementById("fechar")

//Referenciar o console de mentirinha
var manipular = document.getElementById("console")

//Referenciar o texto do console
var manipularText = document.getElementById("textoconsole")

//Referenciar o lugar de guardar a variável do leia
var guardar = document.getElementById("guardar")

area.focus()

//Quando eu apertar em uma tecla, ele vai fazer algo
area.addEventListener("input", () => {
    //Mostrar quantidade de elementos que possuem a classe linha
    let quantidade = document.getElementsByClassName("linha").length
    //Mostrar quantidade de quebras de linha que tem no textarea
    let quebras = area.value.split("\n").length
    //Se existir uma diferença entre quantidade de linha no textarea e no mostrador de linha
    let loop = 0
    while (quantidade != quebras && loop < 1000) {
        loop++
        //Verificar se a quantidade de indicadores é maior que a quantidade de linha
        if (quantidade > quebras) {
            remover(quantidade)
            //Atualizar a quantidade de linhas
            quantidade -= 1
        }
        else {
            criar(quantidade + 1)
            //Atualizar a quantidade de linhas
            quantidade += 1 
        }
    }    

})

//Ele irá criar uma nova linha
function criar (quebras) {
    //Criar uma div para guardar a linha nela
    let div = document.createElement("div")
    //Adicionar classe nela
    div.classList = "linha"
    //Adicionar um id para ela
    div.id = "linha" + quebras
    //Adicionar um paragrafo com texto nele
    let p = document.createElement("p")
    //Adicionar algo escrito para o paragráfo
    p.innerText = quebras
    //Adicionar uma classe nele
    p.classList = "enum"
    //Adicionar o paragrafo ao div
    div.appendChild(p)
    //Adicionar ao documento
    document.getElementById("numeros").appendChild(div)
}

//Ele irá remover a última linha
function remover (linhas) {
   //Remover o elemento final
   document.getElementById("numeros").removeChild(document.getElementById("linha" + linhas))
}

//Destacará linha do código que estou digitando
function destacar () {
    //Pegar lista de elementos que possuem a classe enum
    let elemento = document.getElementsByClassName("destaque")
    //Se existir um elemento em destaque, ele vai retirar
    if (elemento.length != 0) {
        elemento[0].classList = "enum"
    }
    //Verificar onde o seletor do teclado está
    let seletor = area.selectionStart
    //Irá pegar a substring do area do começo até o seletor
    let sub = area.value.substring(0, seletor)
    //Verificar quantidade de quebra de linha
    let quantidade = sub.split("\n").length
    //Mudar estilo da linha selecionada
    document.querySelector("#linha" + quantidade + " p").classList = "enum destaque"  
}

//Quando eu clicar ou mexer com o text area chamará a função destacar
area.addEventListener('click', destacar)
area.addEventListener('input', destacar)
area.addEventListener('keyup', destacar)