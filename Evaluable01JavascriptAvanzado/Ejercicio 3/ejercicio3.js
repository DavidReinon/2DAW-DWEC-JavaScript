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

const h1Title = document.getElementsByTagName("h1")[0];

const spansButtons = document.getElementsByTagName("span");

const tdImage = document.getElementsByTagName("td")[2];

let imageContainer = tdImage.getElementsByTagName("img")[0];

const createTextCurrentItem = () => {
    const textCurrentItem = document.createElement("h1");
    textCurrentItem.style.fontWeight = "bold";
    tdImage.insertBefore(textCurrentItem, tdImage.firstChild);
    return textCurrentItem;
};

let textCurrentItem = createTextCurrentItem();

const clickSmallImage = (newDiv, url) => {
    newDiv.remove();

    const newImage = document.createElement("img");
    newImage.src = url;
    newImage.style.width = "100%";
    newImage.style.height = "auto";
    tdImage.appendChild(newImage);

    newImage.addEventListener("click", () => {
        newImage.remove();
        clickImageContainer();
    });
};

const clickImageContainer = () => {
    const newDiv = document.createElement("div");
    tdImage.appendChild(newDiv);

    newDiv.style.display = "flex";
    newDiv.style.flexWrap = "wrap";
    newDiv.style.gap = "10px";

    categories[currentCategoryIndex][currentItemIndex].urls.forEach((url) => {
        const newSmallImage = document.createElement("img");
        newDiv.appendChild(newSmallImage);
        newSmallImage.src = url;

        newSmallImage.style.width = "130px";
        newSmallImage.style.height = "auto";

        newSmallImage.addEventListener("click", () =>
            clickSmallImage(newDiv, url)
        );
    });
};

const removeImageContainer = () => {
    imageContainer.remove();
    textCurrentItem.remove();
    clickImageContainer();
};

imageContainer.addEventListener("click", removeImageContainer);

const clickH1Title = () => {
    const newDiv = tdImage.querySelector("div");
    if (newDiv) {
        newDiv.remove();
    }
    const newImage = tdImage.querySelector("img");

    if (newImage) {
        newImage.remove();
    }

    const newImageContainer = document.createElement("img");
    tdImage.appendChild(newImageContainer);

    const newTextCurrentItem = document.createElement("h1");
    newTextCurrentItem.style.fontWeight = "bold";
    tdImage.insertBefore(newTextCurrentItem, newImageContainer);

    newImageContainer.addEventListener("click", removeImageContainer);

    imageContainer = newImageContainer;
    textCurrentItem = newTextCurrentItem;

    updateDisplay();
};

h1Title.addEventListener("click", clickH1Title);

const changeTitle = () => {
    h1Title.textContent =
        categories[currentCategoryIndex][
            currentItemIndex
        ].nameGallery.toUpperCase();
};

const changeGallery = () => {
    imageContainer.src =
        categories[currentCategoryIndex][currentItemIndex].urls[0];

    textCurrentItem.textContent =
        categories[currentCategoryIndex][currentItemIndex].name;
};

const updateDisplay = () => {
    changeGallery();
    changeTitle();
};

const initilizeFirstButtons = () => {
    const previousFirstButton = () => {
        currentItemIndex = 0;
        currentCategoryIndex =
            currentCategoryIndex === 0
                ? categories.length - 1
                : currentCategoryIndex - 1;
        updateDisplay();
    };

    const nextFirstButton = () => {
        currentItemIndex = 0;
        currentCategoryIndex =
            currentCategoryIndex === categories.length - 1
                ? 0
                : currentCategoryIndex + 1;
        updateDisplay();
    };

    spansButtons[0].addEventListener("click", previousFirstButton);
    spansButtons[1].addEventListener("click", nextFirstButton);
};

const initializeSecondButtons = () => {
    const previousSecondButton = () => {
        currentItemIndex =
            currentItemIndex === 0
                ? categories[currentCategoryIndex].length - 1
                : currentItemIndex - 1;
        updateDisplay();
    };

    const nextSecondButton = () => {
        currentItemIndex =
            currentItemIndex === categories[currentCategoryIndex].length - 1
                ? 0
                : currentItemIndex + 1;
        updateDisplay();
    };
    spansButtons[2].addEventListener("click", previousSecondButton);
    spansButtons[3].addEventListener("click", nextSecondButton);
};

initilizeFirstButtons();
initializeSecondButtons();
updateDisplay();
