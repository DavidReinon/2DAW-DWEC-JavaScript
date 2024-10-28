//Ejercicio 3
document.addEventListener("DOMContentLoaded", () => {
    const addMonument = (event) => {
        event.preventDefault();
        const monument = document.getElementsByName("monument")[0];
        const country = document.getElementsByName("country")[0];
        const photo = document.getElementsByName("photo")[0];

        const data = {
            monument: monument.value,
            country: country.value,
            photo: photo.value,
        };

        window.localStorage.setItem(monument.value, JSON.stringify(data));
    };

    const displayMonument = (monumentName) => {
        console.log(monumentName);
        if (!monumentName) return;

        const data = window.localStorage.getItem(monumentName);

        const imageElement = document.getElementById("image");
        const titleElement = document.getElementsByName("monument_title")[0];
        const countryElement =
            document.getElementsByName("monument_country")[0];

        if (!data) {
            titleElement.textContent = "No data for this Monument";
            countryElement.textContent = "";
            imageElement.src = "";
            return;
        }

        const parsedData = JSON.parse(data);
        titleElement.textContent = "Monument: " + parsedData.monument;
        countryElement.textContent = "Country: " + parsedData.country;
        imageElement.src = parsedData.photo;
        imageElement.alt = parsedData.monument;
    };

    const deleteMonument = (monumentName) => {
        if (!monumentName) return;

        window.localStorage.removeItem(monumentName);
    };

    const deleteAllData = () => {
        window.localStorage.clear();
    };

    const init3 = () => {
        const submitButton = document.querySelectorAll(
            'button[type="submit"]'
        )[2];
        submitButton.addEventListener("click", addMonument);

        const inputSearchMonument = document.getElementsByName("get_data")[2];

        const buttonGetData = document.getElementsByName("button_get_data")[2];
        buttonGetData.addEventListener("click", () =>
            displayMonument(inputSearchMonument.value)
        );

        const buttoneDeleteItem =
            document.getElementsByName("button_delete_item")[2];
        buttoneDeleteItem.addEventListener("click", () =>
            deleteMonument(inputSearchMonument.value)
        );

        const buttonDeleteAll =
            document.getElementsByName("button_delete_all")[2];
        buttonDeleteAll.addEventListener("click", deleteAllData);
    };

    init3();
});
