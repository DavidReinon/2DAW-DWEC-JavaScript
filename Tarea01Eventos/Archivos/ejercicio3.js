let title = document.getElementsByTagName("h1")[0];
const originalTitle = title.textContent;

title.addEventListener("mouseover", function () {
    this.textContent = "¡Asmorsaret!";
});

title.addEventListener("mouseout", function () {
    this.textContent = originalTitle;
});
