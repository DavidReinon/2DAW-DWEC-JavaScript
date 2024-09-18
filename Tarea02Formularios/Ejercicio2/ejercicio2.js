const form = document.getElementsByTagName("form")[0];
let inputs = Array.from(document.querySelectorAll(".inputs input"));
console.log(inputs);

const nameInput = inputs[0];
const firstSurname = inputs[1];
const secondSurname = inputs[2];
const emailInput = inputs[3];

const validateLettersOnly = (text) => {
    const regex = /^[a-zA-Z]+$/;
    return regex.test(text);
};

const validateEmail = (email) => {
    const regex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    return regex.test(email);
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
    if (!validateEmail(emailInput.value)) {
        alert("Email no valido. Vuelve a introducirlo.");
        return;
    }

    alert("Todos los datos son correctos");
    cleanForm();
};

form.addEventListener("submit", (e) => validateForm(e));
