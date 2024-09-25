// Con create parrafo creamos un elemento parrafo -etiqueta p en HTML-.
const parrafo = document.createElement("p");
parrafo.textContent = "Párrafo cambiado dinámicamente";

// Seleccionamos el elemento padre (div) le añadimos con replaceChild el párrafo a intercambiar:
document.getElementsByTagName("div")[0].replaceChild(parrafo, document.getElementsByTagName("p")[0]);