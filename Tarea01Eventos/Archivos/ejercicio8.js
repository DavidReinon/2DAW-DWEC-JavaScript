const IMAGE_ROUTE = "src/postres/";
const INDEX_START = 0;
const INDEX_LIMIT = 5;

const images = [
    { link: IMAGE_ROUTE + "Flan con huevo.jpg", name: "Flan con huevo" },
    { link: IMAGE_ROUTE + "Flan con nata.jpg", name: "Flan con nata" },
    { link: IMAGE_ROUTE + "Tarta de manzana.jpg", name: "Tarta de manzana" },
    { link: IMAGE_ROUTE + "Tarta de queso.jpg", name: "Tarta de queso" },
    {
        link: IMAGE_ROUTE + "Tarta de zanahoria.jpg",
        name: "Tarta de zanahoria",
    },
    { link: IMAGE_ROUTE + "Tiramisu.jpg", name: "Tiramisu" },
];

let index = 0;
const imageElement = document.getElementsByTagName("img")[1];
const anteriorButton = document.getElementById("anterior");
const siguienteButton = document.getElementById("siguiente");

const changeImage = () => {
    imageElement.src = images[index].link;
    imageElement.alt = images[index].name;
};

changeImage();

anteriorButton.addEventListener("click", function () {
    index !== INDEX_START ? index-- : (index = INDEX_LIMIT);
    changeImage();
});

siguienteButton.addEventListener("click", function () {
    index !== INDEX_LIMIT ? index++ : (index = INDEX_START);
    changeImage();
});
