const tableTr = document.getElementsByTagName("tr")[0];
const cafeTitle = tableTr.getElementsByTagName("h1")[0];
cafeTitle.remove();

const table = document.getElementsByTagName("table")[0];
table.style.display = "flex"

const createTdWithContent = (content) => {
    const td = document.createElement("td");

    const h1 = document.createElement("h1");
    h1.textContent = content;
    h1.style.color = "white";

    const image = document.createElement("img");
    image.src = `./src/${content}/1.jpg`;

    h1.textContent = content;
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
