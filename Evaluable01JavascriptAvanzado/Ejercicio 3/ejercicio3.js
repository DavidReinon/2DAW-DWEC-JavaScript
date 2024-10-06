const gallery = {
    starters: [
        {
            nameGallery: "Entrantes",
            name: "entrantes",
            urls: [
                "src/entrantes/1.jpg",
                "src/entrantes/2.jpg",
                "src/entrantes/3.jpg",
                "src/entrantes/4.jpg",
                "src/entrantes/5.jpg",
            ],
        },
    ],
    desserts: [
        {
            nameGallery: "Postres",
            name: "tartas",
            urls: [
                "src/tartas/1.jpg",
                "src/tartas/2.jpg",
                "src/tartas/3.jpg",
                "src/tartas/4.jpg",
                "src/tartas/5.jpg",
            ],
        },
        {
            nameGallery: "Postres",
            name: "fruta",
            urls: [
                "src/fruta/1.jpg",
                "src/fruta/2.jpg",
                "src/fruta/3.jpg",
                "src/fruta/4.jpg",
                "src/fruta/5.jpg",
            ],
        },
    ],
    drinks: [
        {
            nameGallery: "Bebidas",
            name: "cafe",
            urls: [
                "src/cafe/1.jpg",
                "src/cafe/2.jpg",
                "src/cafe/3.jpg",
                "src/cafe/4.jpg",
                "src/cafe/5.jpg",
            ],
        },
        {
            nameGallery: "Bebidas",
            name: "infusiones",
            urls: [
                "src/infusiones/1.jpg",
                "src/infusiones/2.jpg",
                "src/infusiones/3.jpg",
                "src/infusiones/4.jpg",
                "src/infusiones/5.jpg",
            ],
        },
        {
            nameGallery: "Bebidas",
            name: "alcohol",
            urls: [
                "src/alcohol/1.jpg",
                "src/alcohol/2.jpg",
                "src/alcohol/3.jpg",
                "src/alcohol/4.jpg",
                "src/alcohol/5.jpg",
            ],
        },
    ],
};

// Array que contiene las referencias a las categorías
const categories = [gallery.starters, gallery.desserts, gallery.drinks];

let currentCategoryIndex = 0;
let currentItemIndex = 0;
let currentItemImageIndex = 0;

const h1Title = document.getElementsByTagName("h1")[0];

const tds = document.getElementsByTagName("td");
console.log(tds);

const firstButtons = Array.from(tds).slice(0, 2);
console.log(firstButtons);
const secondButtons = Array.from(tds).slice(3, 5);
console.log(secondButtons);
const tdImage = tds[2];
console.log(tdImage);

const imageContainer = tdImage.getElementsByTagName("img")[0];

const changeTitle = () => {
    h1Title.textContent =
        categories[currentCategoryIndex][
            currentItemIndex
        ].nameGallery.toUpperCase();
};

const changeGallery = () => {
    imageContainer.src =
        categories[currentCategoryIndex][currentItemIndex].urls[0];
};

const updateDisplay = () => {
    changeGallery();
    changeTitle();
};

const previousFirstButton = () => {
    currentItemIndex =
        (currentItemIndex - 1 + categories[currentCategoryIndex].length) %
        categories[currentCategoryIndex].length;
    updateDisplay();
};

const nextFirstButton = () => {
    currentItemIndex =
        (currentItemIndex + 1) % categories[currentCategoryIndex].length;
    updateDisplay();
};

console.log(firstButtons[0]);
const initilizeFirstButtons = () => {
    firstButtons[0].addEventListener("click", previousFirstButton);
    firstButtons[1].addEventListener("click", nextFirstButton);
};
initilizeFirstButtons();
updateDisplay();
