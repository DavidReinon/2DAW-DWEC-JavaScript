// Modificar con TEXT CONTENT:

// Con text content podemos acceder al contenido del texto del elemento seleccionado, para mostrarlo. A su vez, podemos también modificarlo.

// Ejemplo de cómo mostrar texto que hay en los párrafos del documento:
// Primero seleccionamos todos los párrafos y los guardamos en una variable.
let text = document.getElementsByTagName('p');

// Ahora podemos acceder al contenido de cada uno de ellos, aplicando .textContent:
console.log(text[0].textContent);
console.log(text[1].textContent);

// Con un bucle for podemos recorrer y mostrar el contenido de todos los párrafos.
for(let i = 0; i < text.length; i++) {
    console.log(text[i].textContent);
}

// Podemos asignarle un nuevo valor, y el valor reemplazado substituirá al existente en dicho párrafo:
text[0].textContent = 'Nuevo texto';


// Ejemplo de cómo emplear un bucle for para cambiar el contenido de todos los párrafos.

// Creamos un array e indicamos en cada posición el texto a intruducir. El array deberá estar ordenado de manera que en la primera posición esté el 
// texto que queremos asignar al primer párrafo, en la segunda posición el contenido para el segundo párrafo, etc.
let contents = ['Párrafo uno', 'Parrafo Dos', 'Aquí', 'Párrafo Nuevo', 'nnn', 'mmmmm', 'asdafrfw']

// Con for recorremos los párrafos seleccionados en la variable 'text' y asignamos a cada uno de ellos los contenidos guardados en el array contents:
for(let i = 0; i < text.length; i++) {
    text[i].textContent = contents[i];
}



// Modificar con INNER HTML:
// Con innerHTML procedemos de la misma manera que con textContent. La única diferencia es que nos permite introducir código HTML en lugar de sólo texto.

// Seleccionamos el primer div:
let div = document.getElementsByTagName('div')[0];

// Mostramos lo que contiene en su interior.
console.log(div.innerHTML);

// Le asignamos ahora tres nuevos párrafos, modificando el contenido anterior:
div.innerHTML = `<p class="hola">Nuevo contenido</p>
                    <p class="adios">Nuevo contenido 2</p>
                    <p>Nuevo contenido 3</p>`;
                    
// Modificar con CLASS NAME:

// Podemos cambiarle el nombre de una clase CSS a un elemento seleccionado. Permite variar los estilos de ese elemento de manera rápida:
document.getElementsByClassName('hola')[0].className = 'adios';
