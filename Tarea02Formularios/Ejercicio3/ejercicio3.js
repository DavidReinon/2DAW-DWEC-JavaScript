const form = document.getElementsByTagName("form")[0];
const finalParagraph = document.getElementsByTagName("p")[1];

const nameInput = document.getElementById("nickname");
const filmInput = document.getElementById("film");
const directorInput = document.getElementById("director");
const yearInput = document.getElementById("year");
const calificationInput = document.getElementById("category");
const textArea = document.getElementById("message");
const checkBoxHuman = document.getElementById("human");

const validateLettersOnly = (text) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
};

const validateYear = (year) => {
    const regex = /^(1[0-9]{3}|2[0-9]{3})$/;
    return regex.test(year);
};

const validateForm = (e) => {
    e.preventDefault(); // Prevenir el envío del formulario

    if (!validateLettersOnly(nameInput.value)) {
        alert("Nombre no valido. Vuelve a introducirlo.");
        return;
    }
    if (!validateLettersOnly(filmInput.value)) {
        alert("Pelicula no valida. Vuelve a introducirla.");
        return;
    }
    if (!validateYear(yearInput.value)) {
        alert("Año no valido. Tiene que estar en un rango valido.");
        return;
    }
    if (!validateLettersOnly(directorInput.value)) {
        alert("Director no valido. Vuelve a introducirlo.");
        return;
    }
    if (calificationInput.value === "") {
        alert("Categoria no valida. Selecciona una categoria.");
        return;
    }
    if (textArea.value === "") {
        alert("Tienes que escribir alguna reseña.");
        return;
    }
    if (!checkBoxHuman.checked) {
        alert("Tienes que confirmar que no eres un robot.");
        return;
    }

    const accumulatedValues = `
        Nombre: ${nameInput.value} |
        Película: ${filmInput.value} |
        Año: ${yearInput.value} |
        Director: ${directorInput.value} |
        Categoría: ${calificationInput.value} |
        Reseña: ${textArea.value}
    `;

    // Si no hay errores, permitir el envío del formulario
    finalParagraph.textContent = accumulatedValues;
};

form.addEventListener("submit", (e) => validateForm(e));
