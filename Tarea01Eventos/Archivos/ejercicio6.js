const tableImagesContainer = document.getElementsByClassName("container")[0];
const title = document.getElementsByTagName("h1")[0];

tableImagesContainer.style.display = "none";

title.addEventListener("click", function () {
    tableImagesContainer.style.display === "none"
        ? (tableImagesContainer.style.display = "block")
        : (tableImagesContainer.style.display = "none");
});
