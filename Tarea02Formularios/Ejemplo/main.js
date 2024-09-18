let form = document.getElementById("form");

function validateForm(e) {
    e.preventDefault();

    let category = document.getElementById('category').value;
    
    if (category === "Categoria") {
        alert("Por favor, introduce una categoría")
    } else {
        alert("La categoría introducida es " + `${category}`);
    }
}

form.addEventListener("submit", (e) => validateForm(e));
