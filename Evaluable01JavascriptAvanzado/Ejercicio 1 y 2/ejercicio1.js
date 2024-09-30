const pNames = document.getElementsByTagName("p");

const fruits = [
    { name: "Melon", url: "images/frutas/melon" },
    { name: "Naranja", url: "images/frutas/orange" },
    { name: "Melocoton", url: "images/frutas/peach" },
    { name: "Fresa", url: "images/verduras/strawberry" },
    { name: "Sandia", url: "images/verduras/watermelon" },
];

const vegetables = [
    { name: "Cebolla dulce", url: "images/verduras/cebolla_dulce" },
    { name: "Cebolla dulce", url: "images/verduras/cebolla_dulce" },
    { name: "Cebolla dulce", url: "images/verduras/cebolla_dulce" },
    { name: "Cebolla morada", url: "images/verduras/cebolla_morada" },
    { name: "Tomate cherry", url: "images/verduras/tomate_cherry" },
    { name: "Tomate raf", url: "images/verduras/tomate_raf" },
    { name: "Tomate rosa", url: "images/verduras/tomate_rosa" },
];

Array.from(pNames).forEach((element, index) => {
    const defaultOpacity = "0.5";

    const changeOpacity = () => {
        element.style.opacity =
            element.style.opacity === defaultOpacity ? "1" : defaultOpacity;
    };
    
    element.textContent = fruits[index].name;
    element.style.opacity = defaultOpacity;
    element.addEventListener("mouseover", changeOpacity);
    element.addEventListener("mouseout", changeOpacity);
});
