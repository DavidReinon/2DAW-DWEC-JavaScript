// Podemos modificar las propiedades CSS a partir de 'style':
// Para ello, primero seleccionamos el elemento que queramos aplicar cambios y después sólo tenemos que aplicar dichos cambios.
// Con style, las propiedades css a aplicar deberán ir en camelCase -a diferencia de en CSS que se utiliza un guion para las palabras compuestas-.
document.getElementsByTagName('p')[0].style.fontWeight = 'bold';

document.getElementsByTagName('p')[1].style.fontWeight = 'bold';
document.getElementsByTagName('p')[1].style.color = 'red';
document.getElementsByTagName('p')[1].style.backgroundColor = 'yellow';


// Podemos aplicar una lógica de programación para cambiar los párrafos de color según sean pares o impares. 
let paragraphs = document.getElementsByTagName('p');

for(let i = 0; i < paragraphs.length; i++) {
    if(i % 2 === 0){
        paragraphs[i].style.color = 'red';
    } else {
        paragraphs[i].style.color = 'green';
    }
}
