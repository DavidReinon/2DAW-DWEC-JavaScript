const images = document.getElementsByTagName("img");

const lowOpacity = "60%"
const fullOpacity = "100%";

Array.from(images).forEach((image, index) => {
    setInterval(() => {
        image.style.opacity = lowOpacity;
    }, (index + 1) * 100);
});
Array.from(images).reverse().forEach((image, index) => {
    setInterval(() => {
        image.style.opacity = fullOpacity;
    }, (index + 1) * 100);
});
