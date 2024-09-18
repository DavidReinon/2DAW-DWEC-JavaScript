const images = Array.from(document.getElementsByTagName("img"));
images.shift();
let modal = document.getElementsByClassName("modal")[0];
let modalContent = document.getElementsByTagName("h1")[1];

const sandwiches = [
    { name: "Chivito", link: "https://ca.wikipedia.org/wiki/Chivito" },
    { name: "Blanco y negro", link: "https://ca.wikipedia.org/wiki/Blanco_y_negro" },
    { name: "Brascada", link: "https://ca.wikipedia.org/wiki/Brascada" },
    { name: "Almussafes", link: "https://ca.wikipedia.org/wiki/Almussafes" },
    { name: "Tortilla de patatas", link: "https://ca.wikipedia.org/wiki/Tortilla_de_patatas" },
    { name: "Calamares en alioli", link: "https://ca.wikipedia.org/wiki/Calamares_en_alioli" },
];


images.forEach((element, index) => {
    element.addEventListener("mouseover", function () {
        element.style.opacity = "0.5";
    });

    element.addEventListener("mouseout", function () {
        element.style.opacity = "1";
    });

    element.addEventListener("click", function () {
        modal.className = "modal show-modal";
        modalContent.innerHTML = `<a href="${sandwiches[index].link}">
        ${sandwiches[index].name}</a>`;
    });
});

document
    .getElementsByClassName("close-button")[0]
    .addEventListener("click", function () {
        modal.className = "modal";
    });
