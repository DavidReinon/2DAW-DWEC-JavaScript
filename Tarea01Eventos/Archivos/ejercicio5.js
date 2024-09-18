const paragraphs = document.getElementsByTagName("p");

// paragraphs[0].addEventListener("click", function () {
//     paragraphs[0].style.color = "blue";
//     paragraphs[0].style.fontWeight = "bold";
//     paragraphs[0].style.fontSize = "20px";
// });

function getRandomColor() {
    const letters = "0123456789ABCDEF";
    let color = "#";
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

Array.from(paragraphs).forEach((element, index) => {
    const fontSize = (index + 2) * 10;
    element.addEventListener("click", function () {
        element.style.color = getRandomColor();
        element.style.fontWeight = "bold";
        element.style.fontSize = fontSize + "px";
    });
});
