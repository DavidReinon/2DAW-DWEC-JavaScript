// Para acceder a las diferentes partes del documento:

// Accedemos al "title"
console.log(document.title);

// Accedemos al "head"
console.log(document.head);

// Accedemos al "body"
console.log(document.body);

// Accedemos al documento
console.log(document.documentElement);

// Ejemplo de cómo navegar el árbol DOM a partir de parentNode / previousSibling / nextSibling / firstChild y childNodes
// para seleccionar el primer "h2" del documento:

// Si queremos navegar hasta el "h2", tenemos que ir paso a paso. 
// El primer paso será seleccionar el body (document.body). 
// Desde body, tendremos que seleccionar todos los nodos hijos que tiene (childNodes).
// Si buscamos document.body.childNodes muestra como resultado NodeList(3) [text, div, text]
// Como queremos seleccionar el "h2" que está incluido dentro del "div", tendríamos que seleccionar primero ese "div".
// Para ello, seleccionamos el segundo elemento de los tres que devuelve childNodes: document.body.childNodes[1]
// Una vez tenemos seleccionado el "div", vamos a buscar sus nodos hijos.
// Para ello volvemos a seleccionar childNodes: 
// La instruccion document.body.childNodes[1].childNodes devolvería NodeList(17)[text, h2, text, p, text, p...]

// Podemos acceder a los distintos nodos, accediendo a su posición. 
// Por ejemplo, el h2 se selecciona con document.body.childNodes[1].childNodes[1]
// Si utilizamos .innerHTML podemos cambiar el contenido -lo veremos con más detalle más adelante-.

console.log(document.body.childNodes[1].childNodes[1]);

// Alternativa: 

// Con document.body.childNodes[1].firstChild vamos al primer elemento de los 17 contenidos en el NodeList.
// A partir de ese nodo podemos ir a su hermano, el h2:

console.log(document.body.childNodes[1].firstChild.nextSibling);

// Otro ejemplo: 
// Si en cambio queremos llegar al penúltimo párrafo "• lastChild: Último hijo.", podemos utilizar:

console.log(document.body.childNodes[1].lastChild.previousSibling.previousSibling.previousSibling);