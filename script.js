//console.log("hola");

const varTitulo = document.getElementById("titulo");
const varTexto = document.getElementById("texto");
let estadoInicial = true;
let indice = 0;

const listaTexto = ["tengo hambre", "entonces bajo a buscar comida", "todo esta cerrado", "pido un domicilio", "espero 20 minutos y llega mi comidita", "me pongo feliz", "fin"];

varTitulo.addEventListener("click", () => {
    if (estadoInicial === true) {
        varTitulo. innerText = "Pickle rick";
        varTitulo.style.color = "#ad31d3";
        varTitulo.style.backgroundColor = "white";
} else {

        varTitulo.innerText = "aladin pinguin";
        varTitulo.style.color = "•#f21a30";
        varTitulo.style.backgroundColor = "transparent";
}
estadoInicial = !estadoInicial;
})

varTexto.addEventListener("click", () => {
    if(indice < listaTexto.length){
    varTexto.innerText = listaTexto [indice];
    indice = indice + 1;
} else {
  indice = 0;
    }
})