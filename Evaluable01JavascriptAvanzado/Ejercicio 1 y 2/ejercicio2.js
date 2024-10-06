/* global changeItemsType */

function validateRequest(text) {
    const formatText = text.trim().toLowerCase();
    const regexp = /^(frutas|verduras)$/i;

    return regexp.test(formatText);
}

const mainDiv = document.getElementsByTagName("main")[0];

const modalDiv = document.createElement("div");
modalDiv.setAttribute("class", "modal");

mainDiv.appendChild(modalDiv);

const modalContentDiv = document.createElement("div");
modalContentDiv.setAttribute("class", "modal-content");

modalDiv.appendChild(modalContentDiv);

const closeButtonModalContent = document.createElement("span");
closeButtonModalContent.setAttribute("class", "close-button");
closeButtonModalContent.textContent = "X";

modalContentDiv.appendChild(closeButtonModalContent);

const form = document.createElement("form");
form.setAttribute("id", "modalForm");

modalContentDiv.appendChild(form);

const inputText = document.createElement("input");
inputText.setAttribute("type", "text");
inputText.setAttribute("name", "textInput");
inputText.setAttribute("placeholder", "Nombre");
inputText.setAttribute("class", "input");

form.appendChild(inputText);

const submitButton = document.createElement("button");
submitButton.setAttribute("type", "submit");
submitButton.setAttribute("class", "send");
submitButton.textContent = "Enviar";

form.appendChild(submitButton);

const h1Title = document.getElementsByTagName("h1")[0];

const capitalizeFirstLetter = (string) => {
    return string.charAt(0).toUpperCase() + string.slice(1).toLowerCase();
};

form.addEventListener("submit", function (event) {
    event.preventDefault();

    if (validateRequest(inputText.value)) {
        h1Title.textContent = capitalizeFirstLetter(inputText.value);
        changeItemsType(h1Title.textContent);

        modalDiv.className = "modal";
    } else {
        alert("Los datos introducidos no son correctos.");
    }
});

h1Title.addEventListener("click", function () {
    modalDiv.className = "modal show-modal";
});

closeButtonModalContent.addEventListener("click", function () {
    modalDiv.className = "modal";
});
