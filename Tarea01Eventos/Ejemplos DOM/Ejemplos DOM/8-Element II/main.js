// Ejemplo de como trabajar con tablas.
// Primer hay que seleccionar la tabla:
let tabla = document.getElementsByTagName("table")[0];

// Para trabajar con tablas, tenemos varias posibilidades, como .rows y .cells

// Con rows seleccionamos las filas de la tabla (devuelve un HTMLCollection):

console.log(tabla.rows);

// Como devuelve un HTMLCollection, podemos mostrar la fila que queramos:

// Primera fila
console.log(tabla.rows[0]);

// Segunda fila
console.log(tabla.rows[1]);


// Con cells seleccionamos las celdas de la tabla, que trabaja a partir de las filas:

// Mostramos las celdas de la primera fila de la tabla:
console.log(tabla.rows[0].cells);

// Como devuelve un HTMLCollection, podemos mostrar la celda que queramos:

// Primera celda
console.log(tabla.rows[0].cells[0]);

// Segunda celda
console.log(tabla.rows[0].cells[1]);


// Seleccionamos la primera celda y la cambiamos, podemos usar textContent o innerHTML:
primeraFila.cells[0].textContent = "Celda cambiada";