const buttons = document.getElementsByTagName("button");

const saveData = () => {
    const name = document.getElementsByName("name")[0];
    const first_surname = document.getElementsByName("first_surname")[0];
    const second_surname = document.getElementsByName("second_surname")[0];
    const dni = document.getElementsByName("dni")[0];
    const textColor = document.getElementById("color").value || null;

    const data = {
        name: name.value,
        first_surname: first_surname.value,
        second_surname: second_surname.value,
        dni: dni.value,
        textColor: textColor,
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
    p.style.color = data.textColor;
    p.textContent = `Nombre: ${parsedData.name}, Primer Apellido: ${parsedData.first_surname}, Segundo Apellido: ${parsedData.second_surname}, DNI: ${parsedData.dni}`;
};

const deleteData = (id) => {
    if (!id) return;

    window.localStorage.removeItem(id);
};

const deleteAllData = () => {
    window.localStorage.clear();
};

const init = () => {
    buttons[0].addEventListener("click", saveData);
    const idDisplayElement = document.getElementsByName("get_data")[0];
    buttons[1].addEventListener("click", () =>
        displayData(idDisplayElement.value)
    );
    const idDeleteElement = document.getElementsByName("delete_item")[0];
    buttons[2].addEventListener("click", () =>
        deleteData(idDeleteElement.value)
    );
    buttons[3].addEventListener("click", deleteAllData);

    buttons[4].addEventListener("click", saveData);
    const idDisplayElement2 = document.getElementsByName("get_data")[1];
    buttons[5].addEventListener("click", () =>
        displayData(idDisplayElement2.value)
    );
    const idDeleteElement2 = document.getElementsByName("delete_item")[1];
    buttons[6].addEventListener("click", () =>
        deleteData(idDeleteElement2.value)
    );
    buttons[7].addEventListener("click", deleteAllData);
};

init();
