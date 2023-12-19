//Referenciar o text area de escrever código
var area = document.getElementById('area')

area.focus()

//Aumentar rows por linha escrita
area.addEventListener("input", () => {
     area.setAttribute('rows' , quantidadeQuebraLinha() * 2)
})

export function quantidadeQuebraLinha() {
    //Ele irá me retornar a quantidade de quebra de linha
    return area.value.split("\n").length
}