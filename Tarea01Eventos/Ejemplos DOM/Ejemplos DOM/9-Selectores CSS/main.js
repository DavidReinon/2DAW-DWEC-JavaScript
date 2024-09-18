// Con querySelector y querySelectorAll podemos emplear los selectores CSS.
// Estos dos selectores los podemos emplear para hacer las mismas selecciones que
// con getElementById, getElementsByTagName, getElementsByName y getElementsByClassName.
// Son equivalentes. 
// La diferencia entre querySelector y querySelectorAll es que querySelector devuelve el
// primer elemento que encuentre y querySelectorAll selecciona todos los elementos encontrados.

// Ejemplo de cómo emplear querySelector para hacer una selección del elemento con la id 'titulo'.

// Con getElementById procedíamos de la siguiente manera:
console.log(document.getElementById('titulo'));

// La misma selección podemos hacerla desde querySelector, es equivalente e igual de válida:
console.log(document.querySelector('#titulo'));


// Le podemos aplicar las mismas operaciones. Ejemplo textContent:
document.querySelector("#titulo").textContent = "Nuevo título";

// Seleccionamos con selector CSS todos los párrafos que estén dentro de un div y los cambiamos:
let parrafos = document.querySelectorAll("div p");

for (let i = 0; i < parrafos.length; i++) {
  parrafos[i].textContent = "Párrafo cambiado";
}