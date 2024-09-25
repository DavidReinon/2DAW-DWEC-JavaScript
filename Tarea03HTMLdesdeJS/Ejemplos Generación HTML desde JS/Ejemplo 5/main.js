// Seleccionamos el párrafo existente.
let parrafoUno = document.getElementsByTagName("p")[0];


// Añadimos un evento click al párrafo seleccionado para que añada otros dos párrafos
// dinámicamente.
parrafoUno.addEventListener('click', function () {
    //Creamos dos párrafos, uno para ubicarlo antes y otros después del existente.
    const parrafoDos = document.createElement("p");
    parrafoDos.textContent = "Párrafo dos";
    const parrafoCero = document.createElement("p");
    parrafoCero.textContent = "Párrafo cero";

    // Los ubicamos a partir de parrafoUno.
    parrafoUno.insertAdjacentElement("beforebegin", parrafoCero);
    parrafoUno.insertAdjacentElement("afterend", parrafoDos);
});

