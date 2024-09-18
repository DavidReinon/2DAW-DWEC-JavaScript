const textElement = document.getElementsByTagName("p")[0];

const defaultText = textElement.textContent;

textElement.addEventListener("mousedown", function () {
    //Con el alt(nombre de imagen) del elemento img, modificar script 8
    textElement.textContent = "";
});

textElement.addEventListener("mouseup", function () {
    textElement.textContent = defaultText;
});