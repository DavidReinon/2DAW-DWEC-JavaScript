const getData = async (url = "https://pokeapi.co/api/v2/pokemon") => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResult = await response.json();
            return jsonResult;
        }
    } catch (e) {
        alert("Api call Error.", e);
    }
};

let pokemonsPageResult = [];
let pokemonsDataList = [];

const ImageIndexLimit = 3;
const ImageIndexStart = 0;

const fetchAllPokemonsData = async () => {
    pokemonsPageResult = await getData();
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
            currentImageIndex: 0, // Añadir índice de imagen actual
        };
        pokemonsDataList.push(pokemonFinalData);
    });
    await Promise.all(promises);
    console.log(pokemonsDataList);
};

const updatePokemonImage = (pokemonElement, imageElement) => {
    imageElement.style.backgroundImage = `url(${
        pokemonElement.images[pokemonElement.currentImageIndex]
    })`;
};

const nextPokemonImage = (pokemonElement, imageElement) => {
    pokemonElement.currentImageIndex =
        pokemonElement.currentImageIndex + 1 > ImageIndexLimit
            ? ImageIndexStart
            : pokemonElement.currentImageIndex + 1;

    updatePokemonImage(pokemonElement, imageElement);
};

const previousPokemonImage = (pokemonElement, imageElement) => {
    pokemonElement.currentImageIndex =
        pokemonElement.currentImageIndex - 1 < ImageIndexStart
            ? ImageIndexLimit
            : pokemonElement.currentImageIndex - 1;

    updatePokemonImage(pokemonElement, imageElement);
};

const showPokemonModal = (pokemonElement) => {
    //First Modal = using querySelector()
    const modal = document.querySelector(".modal");
    modal.className = "modal show-modal";

    const modalImage = modal.querySelector("img");
    modalImage.src = pokemonElement.images[pokemonElement.currentImageIndex];
    modalImage.alt = pokemonElement.name;

    const modalTag = modal.querySelector(".tag");
    modalTag.textContent = pokemonElement.name;

    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        modal.className = "modal";
    });
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
        updatePokemonImage(onePokemon, image);

        const carusselButtons = clonedCard.querySelectorAll(
            ".render-more button"
        );
        const previousButton = carusselButtons[0];
        const nextButton = carusselButtons[1];

        previousButton.addEventListener("click", () =>
            previousPokemonImage(onePokemon, image)
        );
        nextButton.addEventListener("click", () =>
            nextPokemonImage(onePokemon, image)
        );

        const enlargeButton = clonedCard.querySelector(".bigger .trigger");
        enlargeButton.addEventListener("click", () =>
            showPokemonModal(onePokemon)
        );
    });

    // Eliminar la tarjeta original
    cardDiv.remove();
};

const init = () => {
    displayPokemonsData();
};

init();
