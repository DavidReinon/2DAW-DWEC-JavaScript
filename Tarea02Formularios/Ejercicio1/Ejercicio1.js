const form = document.getElementsByTagName("form")[0];
let inputs = Array.from(document.getElementsByTagName("input"));
inputs.pop();

const nameInput = inputs[0];
const firstSurname = inputs[1];
const secondSurname = inputs[2];
const dniInput = inputs[3];

const validateLettersOnly = (text) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
};

const validateDniNumbersLength = (numbers) => {
    const regex = /^[0-9]{8}$/;
    return regex.test(numbers);
};

const generateDniLetter = (dni) => {
    const letters = "TRWAGMYFPDXBNJZSQVHLCKE";
    return letters[parseInt(dni, 10) % 23];
};

const cleanForm = () => {
    inputs.forEach((element) => {
        element.value = "";
    });
};

const validateForm = (e) => {
    e.preventDefault();

    if (!validateLettersOnly(nameInput.value)) {
        alert("Nombre incorrecto. Vuelve a introducirlo.");
        return;
    }
    if (!validateLettersOnly(firstSurname.value)) {
        alert("Primer apellido incorrecto. Vuelve a introducirlo.");
        return;
    }
    if (!validateLettersOnly(secondSurname.value)) {
        alert("Segundo apellido. Vuelve a introducirlo.");
        return;
    }
    if (!validateDniNumbersLength(dniInput.value)) {
        alert("DNI no valido. Vuelve a introducirlo.");
        return;
    }

    alert("Letra del DNI: " + generateDniLetter(dniInput.value));
    cleanForm();
};

form.addEventListener("submit", (e) => validateForm(e));
