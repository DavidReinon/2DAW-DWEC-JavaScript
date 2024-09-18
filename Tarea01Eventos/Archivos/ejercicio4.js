const nutritionContainer = document.getElementsByClassName("nutrition")[0];

document.addEventListener("DOMContentLoaded", function () {
    nutritionContainer.style.display = "none";

    let image = document.getElementsByTagName("img")[0];

    image.addEventListener("click", function () {
        nutritionContainer.style.display = "block";
    });
});
