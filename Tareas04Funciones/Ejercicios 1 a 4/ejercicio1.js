const listPhotos = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
];
const photoDiv = document.querySelectorAll("div .photo");

Array.from(photoDiv).map((value, index) => {
    const newImg = document.createElement("img");
    newImg.src = listPhotos[index];
    newImg.style.width = "100%";
    newImg.style.height = "100%";
    newImg.style.objectFit = "cover";
    value.appendChild(newImg);
});
