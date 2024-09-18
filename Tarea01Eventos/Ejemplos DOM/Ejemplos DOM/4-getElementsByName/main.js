// Con getElementsByName seleccionamos los distintos elementos del arbol DOM a partir de su propiedad 'name'.
// Con este selector, seleccionamos TODOS los elementos del árbol DOM que tengan la propiedad 'name' indicada.
// Ejemplo, seleccionamos todos los elementos con la propiedad 'name' = contenido.

console.log(document.getElementsByName('contenido'));

// Como podemos comprobar, devuelve un NodeList con todos los elementos seleccionados. 
// NodeList no es un array. Se trabaja de la misma forma que con los arrays, pero no es un array. 

// Para acceder a un elemento en concreto, indicamos la posición (como si fuera un array):

console.log(document.getElementsByName('contenido')[0]);
console.log(document.getElementsByName('contenido')[1]);
console.log(document.getElementsByName('contenido')[2]);
console.log(document.getElementsByName('contenido')[3]);
console.log(document.getElementsByName('contenido')[4]);

// Al igual que sucedía con el selector getElementsById, podemos guardarlo en una variable:

let contents = document.getElementsByName('contenido');

console.log(contents);

// Y seguimos pudiendo acceder a los distintos elementos a partir de la variable:

console.log(contents[0]);
console.log(contents[1]);
console.log(contents[2]);
console.log(contents[3]);
console.log(contents[4]);

// Al igual que al trabajar con arrays, podemos aplicar .length para saber cuantos elementos hemos seleccionado:

console.log(contents.length);

// Podemos aplicar las estructuras de programación que ya conocemos.
// Ejemplo de for para iterar sobre todos los elementos seleccionados:

// Ejemplo sin guardar en una variable:

for (let i = 0; i < document.getElementsByName('contenido').length; i++) {
    console.log(document.getElementsByName('contenido')[i]);
}


// Ejemplo de for para iterar sobre la variable ya guardada 'contents', ayuda a que el código sea más legible:

for (let i = 0; i < contents.length; i++) {
    console.log(contents[i]);
}

