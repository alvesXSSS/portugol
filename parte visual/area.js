area.focus()

//Aumentar rows por linha escrita
area.addEventListener("input", () => {
    //Verificar quantidade de quebras linhas
    let quebraLinha = area.value.split("\n").length * 2
     area.setAttribute('rows' , quebraLinha)
})