const fruits = [
    {
        name: "Melon",
        urls: [
            "images/frutas/melon/1.jpg",
            "images/frutas/melon/2.jpg",
            "images/frutas/melon/3.jpg",
            "images/frutas/melon/4.jpg",
        ],
    },
    {
        name: "Naranja",
        urls: [
            "images/frutas/orange/1.jpg",
            "images/frutas/orange/2.jpg",
            "images/frutas/orange/3.jpg",
            "images/frutas/orange/4.jpg",
        ],
    },
    {
        name: "Melocoton",
        urls: [
            "images/frutas/peach/1.jpg",
            "images/frutas/peach/2.jpg",
            "images/frutas/peach/3.jpg",
            "images/frutas/peach/4.jpg",
        ],
    },
    {
        name: "Fresa",
        urls: [
            "images/frutas/strawberry/1.jpg",
            "images/frutas/strawberry/2.jpg",
            "images/frutas/strawberry/3.jpg",
            "images/frutas/strawberry/4.jpg",
        ],
    },
    {
        name: "Sandia",
        urls: [
            "images/frutas/watermelon/1.jpg",
            "images/frutas/watermelon/2.jpg",
            "images/frutas/watermelon/3.jpg",
            "images/frutas/watermelon/4.jpg",
        ],
    },
];

const vegetables = [
    {
        name: "Cebolla dulce",
        urls: [
            "images/verduras/cebolla_dulce/1.jpg",
            "images/verduras/cebolla_dulce/2.jpg",
            "images/verduras/cebolla_dulce/3.jpg",
            "images/verduras/cebolla_dulce/4.jpg",
        ],
    },
    {
        name: "Cebolla morada",
        urls: [
            "images/verduras/cebolla_morada/1.jpg",
            "images/verduras/cebolla_morada/2.jpg",
            "images/verduras/cebolla_morada/3.jpg",
            "images/verduras/cebolla_morada/4.jpg",
        ],
    },
    {
        name: "Tomate cherry",
        urls: [
            "images/verduras/tomate_cherry/1.jpg",
            "images/verduras/tomate_cherry/2.jpg",
            "images/verduras/tomate_cherry/3.jpg",
            "images/verduras/tomate_cherry/4.jpg",
        ],
    },
    {
        name: "Tomate raf",
        urls: [
            "images/verduras/tomate_raf/1.jpg",
            "images/verduras/tomate_raf/2.jpg",
            "images/verduras/tomate_raf/3.jpg",
            "images/verduras/tomate_raf/4.jpg",
        ],
    },
    {
        name: "Tomate rosa",
        urls: [
            "images/verduras/tomate_rosa/1.jpg",
            "images/verduras/tomate_rosa/2.jpg",
            "images/verduras/tomate_rosa/3.jpg",
            "images/verduras/tomate_rosa/4.jpg",
        ],
    },
];

const pNames = document.getElementsByTagName("p");
const currentItemsTypeTitle = document.getElementsByTagName("h1")[0];
const imageH2Title = document.getElementsByTagName("h2")[0];

const imagesContainer = document.getElementsByTagName("img");
const carusselImage = imagesContainer[0];
const vignetteImage = imagesContainer[1];

const buttons = document.getElementsByTagName("button");
const previousButton = buttons[0];
const nextButton = buttons[1];

let imageIndex = 0;
let currentItemIndex = 0;
let currentItemsType = fruits;

// const existingVignette = document.querySelector(".vignette");
// if (existingVignette) {
//     existingVignette.remove();
// }

// const updateVignetteImage = (index) => {
//     const vignetteDiv = document.createElement("div");
//     vignetteDiv.className = "vignette";
//     const vignetteImg = document.createElement("img");
//     vignetteImg.src = currentItemsType[index].urls[imageIndex];
//     vignetteDiv.appendChild(vignetteImg);
//     return vignetteDiv;
// };

const updateVigneteImage = () => {
    vignetteImage.src = currentItemsType[currentItemIndex].urls[imageIndex];
};
const updateCarusselImage = () => {
    carusselImage.src = currentItemsType[currentItemIndex].urls[imageIndex];
};
const updateImageH2Title = () => {
    imageH2Title.textContent = currentItemsType[currentItemIndex].name;
};

const buttonsFuncionality = () => {
    const nextEventListener = () => {
        imageIndex =
            (imageIndex + 1) % currentItemsType[currentItemIndex].urls.length;
        updateCarusselImage();
    };
    const previousEventListener = () => {
        imageIndex =
            (imageIndex - 1 + currentItemsType[currentItemIndex].urls.length) %
            currentItemsType[currentItemIndex].urls.length;
        updateCarusselImage();
    };

    previousButton.addEventListener("click", previousEventListener);
    nextButton.addEventListener("click", nextEventListener);
};

const mouseOverTitle = () => {
    Array.from(pNames).forEach((element, index) => {
        const defaultOpacity = "0.5";

        const eventListener = () => {
            element.style.opacity =
                element.style.opacity === defaultOpacity ? "1" : defaultOpacity;
            currentItemIndex = index;
            imageIndex = 0;
            updateImageH2Title();
            updateVigneteImage();
            updateCarusselImage();

            // // Eliminar cualquier div vignette existente dentro del párrafo
            // const existingVignette = element.querySelector(".vignette");
            // if (existingVignette) {
            //     existingVignette.remove();
            // }

            // // Crear y añadir el nuevo div vignette dentro del párrafo
            // const newVignette = updateVignetteImage(index);
            // element.appendChild(newVignette);
        };
        element.textContent = currentItemsType[index].name;
        element.style.opacity = defaultOpacity;
        element.addEventListener("mouseover", eventListener);
        element.addEventListener("mouseout", eventListener);
    });
};

mouseOverTitle();
buttonsFuncionality();
