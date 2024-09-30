const tableTr = document.getElementsByTagName("tr")[0];
const cafeTdElement = tableTr.getElementsByTagName("td")[0];
cafeTdElement.remove();

const table = document.getElementsByTagName("table")[0];
table.style.height = "500px";

const createTdWithContent = (content) => {
    const td = document.createElement("td");
    td.style.position = "relative"; // Establece el contenedor como relativo

    const h1 = document.createElement("h1");
    h1.textContent = content;
    h1.style.color = "black";
    h1.style.margin = "0";
    h1.style.padding = "0";

    const image = document.createElement("img");
    image.src = `./src/${content}/1.jpg`;
    image.style.objectFit = "cover";
    image.style.height = "90%";
    image.style.margin = "0";
    image.style.padding = "0";

    td.appendChild(h1);
    td.appendChild(image);
    return td;
};

const TdList = [
    createTdWithContent("cafe"),
    createTdWithContent("infusiones"),
    createTdWithContent("alcohol"),
];

TdList.forEach((element) => {
    tableTr.appendChild(element);
});
