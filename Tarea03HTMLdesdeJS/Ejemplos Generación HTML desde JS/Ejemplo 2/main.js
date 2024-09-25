// Con create parrafo creamos un elemento parrafo -etiqueta p en HTML-.
const parrafo = document.createElement("p");
parrafo.textContent = "Párrafo creado dinámicamente";


// Seleccionamos el div y le añadimos con insertBefore el párrafo creado, que se ubicará antes del párrafo existente:
document.getElementsByTagName("div")[0].insertBefore(parrafo, document.getElementsByTagName("p")[0]);