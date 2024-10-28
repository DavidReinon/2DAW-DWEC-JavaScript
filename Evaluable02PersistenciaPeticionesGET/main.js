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

let pokemonsDataList = [];
let pokemonsPageResult = [];

const fetchAllPokemonsData = async () => {
    pokemonsPageResult = await getData();
    //name and url(get)s
    console.log(pokemonsPageResult);

    pokemonsPageResult.results.map(async (onePokemon) => {
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
    console.log(pokemonsDataList);
};

const displayPokemonsData = () => {
    const cardDiv = document.document.querySelector('.card');;
    const photoDiv = cardDiv.querySelector(".photo");

    photoDiv.style.backgroundRepeat = 'repeat';
    photoDiv.style.backgroundSize = 'auto';
    const newImg = document.createElement("img");
    photoDiv.append(newImg);

    const clonedCard = cardDiv.cloneNode(true);
    document.body.appendChild(clonedCard);
};

const init = () => {
    fetchAllPokemonsData();
};

init();
