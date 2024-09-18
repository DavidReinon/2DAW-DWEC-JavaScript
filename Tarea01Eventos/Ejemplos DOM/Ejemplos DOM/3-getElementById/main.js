// Con getElementById podemos seleccionar los distintos elementos del arbol DOM a partir de su id.
// Hay que tener en cuenta que únicamente devuelve un elemento, por lo que si hay varios elementos que
// comparten la misma 'id', seleccionará por defecto el primero de ellos:

console.log(document.getElementById('parrafo'));
console.log(document.getElementById('parrafoUno'));
console.log(document.getElementById('parrafoDos'));
console.log(document.getElementById('parrafoTres'));
console.log(document.getElementById('parrafoCuatro'));

// Las selecciones que hagamos, podemos guardarlas en variables:

let paragraph = document.getElementById('parrafo');
console.log(paragraph);