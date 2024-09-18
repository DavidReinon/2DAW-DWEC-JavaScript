// Con getElementsByTagName trabajamos de la misma forma que con getElementsByName. En este caso las seleccionamos 
// los distintos elementos del arbol DOM a partir de las etiquetas HTML.
// Con este selector, seleccionamos TODOS los elementos del árbol DOM que tengan la etiqueta HTML indicada.
// Ejemplo, seleccionamos todos los 'h2' del documento.

console.log(document.getElementsByTagName('h2'));

// Como podemos comprobar, devuelve un HTMLCollection con todos los elementos seleccionados. 
// HTMLCollection tampoco es un array. Se trabaja de la misma forma que con los arrays, pero no es un array. 

// Para acceder a un elemento en concreto, también indicamos la posición:

console.log(document.getElementsByTagName('h2')[0]);
console.log(document.getElementsByTagName('h2')[1]);
console.log(document.getElementsByTagName('h2')[2]);



// Al igual que sucedía con el selector getElementsById, podemos guardarlo en una variable:

let titles = document.getElementsByTagName('h2');

console.log(titles);

// Y seguimos pudiendo acceder a los distintos elementos a partir de la variable:

console.log(titles[0]);
console.log(titles[1]);
console.log(titles[2]);


// Al igual que al trabajar con arrays, podemos aplicar .length para saber cuantos elementos hemos seleccionado:

console.log(titles.length);

// Podemos aplicar las estructuras de programación que ya conocemos.
// Ejemplo de for para iterar sobre todos los elementos seleccionados:

// Ejemplo sin guardar en una variable:

for (let i = 0; i < document.getElementsByTagName('h2').length; i++) {
    console.log(document.getElementsByTagName('h2')[i]);
}


// Ejemplo de for para iterar sobre la variable ya guardada 'contents', ayuda a que el código sea más legible:

for (let i = 0; i < titles.length; i++) {
    console.log(titles[i]);
}
