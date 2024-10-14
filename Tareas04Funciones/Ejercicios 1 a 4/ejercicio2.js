document.addEventListener("DOMContentLoaded", () => {
    const images = document.querySelectorAll("img");
    const fullOpacity = "100%";
    const lowOpacity = "60%";
    const intervalTime = 100;
    const totalImages = images.length;

    const changeOpacity = (opacity, reverse = false) => {
        console.log("----------");
        console.log(reverse ? "INVERSA" : "NORMAL");
        images.forEach((image, index) => {
            setTimeout(() => {
                image.style.opacity = opacity;
            }, (reverse ? totalImages - index : index + 1) * intervalTime);
        });
    };

    const OpacityChange = () => {
        changeOpacity(lowOpacity);

        setTimeout(() => {
            changeOpacity(fullOpacity, true);
        }, totalImages * intervalTime);
    };

    const InitOpacityChange = () => {
        OpacityChange();
        setTimeout(() => {
            OpacityChange();
        }, 1800);
    };

    InitOpacityChange();
});
