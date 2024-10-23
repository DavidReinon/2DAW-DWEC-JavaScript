//Ejercicio 1 y 2.
const buttons = document.getElementsByTagName("button");

const saveData = (firstSection = true) => {
    const name = document.getElementsByName("name")[firstSection ? 0 : 1];
    const first_surname =
        document.getElementsByName("first_surname")[firstSection ? 0 : 1];
    const second_surname =
        document.getElementsByName("second_surname")[firstSection ? 0 : 1];
    const dni = document.getElementsByName("dni")[firstSection ? 0 : 1];
    const colorSelect = document.getElementById("color");
    const selectedText = colorSelect.options[colorSelect.selectedIndex].text

    const data = {
        name: name.value,
        first_surname: first_surname.value,
        second_surname: second_surname.value,
        dni: dni.value,
        textColor: selectedText,
    };

    window.localStorage.setItem(dni.value, JSON.stringify(data));
};

const displayData = (id, firstSection = true) => {
    if (!id) return;

    const data = window.localStorage.getItem(id);

    const printDiv =
        document.getElementsByName("print_data")[firstSection ? 0 : 1];

    printDiv.innerHTML = "";
    const p = document.createElement("p");
    printDiv.append(p);

    if (!data) {
        p.textContent = "No data for this ID";
        return;
    }
    const parsedData = JSON.parse(data);
    p.style.color = parsedData.textColor;
    p.textContent = `Nombre: ${parsedData.name}, Primer Apellido: ${parsedData.first_surname}, 
    Segundo Apellido: ${parsedData.second_surname}, DNI: ${parsedData.dni}`;
};

const deleteUserData = (id) => {
    if (!id) return;

    window.localStorage.removeItem(id);
};

const deleteAllData = () => {
    window.localStorage.clear();
};

const init = () => {
    const ejercicio1 = () => {
        buttons[0].addEventListener("click", saveData);

        const idDisplayElement = document.getElementsByName("get_data")[0];
        buttons[1].addEventListener("click", () =>
            displayData(idDisplayElement.value)
        );

        const idDeleteElement = document.getElementsByName("delete_item")[0];
        buttons[2].addEventListener("click", () =>
            deleteUserData(idDeleteElement.value)
        );

        buttons[3].addEventListener("click", deleteAllData);
    };

    const ejercicio2 = () => {
        buttons[4].addEventListener("click", () => saveData(false));

        const idDisplayElement = document.getElementsByName("get_data")[1];
        buttons[5].addEventListener("click", () =>
            displayData(idDisplayElement.value, false)
        );

        const idDeleteElement = document.getElementsByName("delete_item")[1];
        buttons[6].addEventListener("click", () =>
            deleteUserData(idDeleteElement.value)
        );

        buttons[7].addEventListener("click", deleteAllData);
    };

    ejercicio1();
    ejercicio2();
};

init();
