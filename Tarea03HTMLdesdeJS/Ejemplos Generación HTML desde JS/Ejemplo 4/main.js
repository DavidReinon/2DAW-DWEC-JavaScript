// Seleccionamos el párrafo existente.
let parrafoUno = document.getElementsByTagName("p")[0];

//Creamos dos párrafos, uno para ubicarlo antes y otros después del existente.
const parrafoDos = document.createElement("p");
parrafoDos.textContent = "Párrafo dos";
const parrafoCero = document.createElement("p");
parrafoCero.textContent = "Párrafo cero";


// Lo ubicamos a partir de parrafoUno.
parrafoUno.insertAdjacentElement("beforebegin", parrafoCero);
parrafoUno.insertAdjacentElement("afterend", parrafoDos);