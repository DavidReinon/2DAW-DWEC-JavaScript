const getData = async (url = "https://pokeapi.co/api/v2/pokemon") => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResult = response.json();
            return jsonResult;
        }
    } catch (e) {
        alert("Api call Error.", e);
    }
};

let pokemonsPageResult = [];
let pokemonsDataList = [];

const fetchAllPokemonsData = async () => {
    pokemonsPageResult = await getData();
    //name and url(get)s
    console.log(pokemonsPageResult);

    const promises = pokemonsPageResult.results.map(async (onePokemon) => {
        const pokemonData = await getData(onePokemon.url);

        const pokemonFinalData = {
            name: pokemonData.name,
            images: [
                pokemonData.sprites.front_default,
                pokemonData.sprites.back_default,
                pokemonData.sprites.back_shiny,
                pokemonData.sprites.front_shiny,
            ],
        };
        pokemonsDataList.push(pokemonFinalData);
    });
    await Promise.all(promises);
    console.log(pokemonsDataList);
};

const displayPokemonsData = async () => {
    await fetchAllPokemonsData();
    const gridDiv = document.querySelector(".grid");
    const cardDiv = document.querySelector(".card");

    pokemonsDataList.map((onePokemon, index) => {
        if (index >= 3) return;

        const clonedCard = cardDiv.cloneNode(true);
        gridDiv.appendChild(clonedCard);

        const title = clonedCard.querySelector(".card-title");
        title.textContent = onePokemon.name;

        const image = clonedCard.querySelector(".photo");
        image.style.backgroundImage = `url(${onePokemon.images[0]})`;
        image.style.backgroundRepeat = "repeat";
        image.style.backgroundSize = "auto";
    });

    // Eliminar la tarjeta original
    cardDiv.remove();
};

const init = () => {
    displayPokemonsData();
};

init();
