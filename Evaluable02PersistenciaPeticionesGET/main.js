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

//Llamada a la API para acceder a la url de 20 pokemons (correspodiente a la paginción)
let pokemonsPageResult = [];

//Llamada a la API con la url de cada pokemon en concreto para formar lista de pokemons con sus datos completos
let pokemonsDataList = [];

//??Pagina Actual
let pokemonsActualPage = 0;

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

const addLocalStorage = (pokemonElement) => {
    const pokemonData = JSON.stringify(pokemonElement);
    localStorage.setItem(pokemonElement.name, pokemonData);
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
    modalTag.addEventListener("click", () => {
        addLocalStorage(pokemonElement);
    });

    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        modal.className = "modal";
    });
};

const showFavoriteModal = () => {
    //Second Modal = using querySelectorAll()
    const modal = document.querySelectorAll(".modal")[1];
    modal.className = "modal show-modal";

    const searchFavoritePokemon = (e) => {
        e.preventDefault();
        const input = modal.querySelector(".input");
        const pokemondData = window.localStorage.getItem(
            input.value.toLowerCase()
        );

        if (!pokemondData) {
            alert("No existe el pokemon en favoritos");
            return;
        }

        const pokemondDataParsed = JSON.parse(pokemondData);

        const modalImage = modal.querySelector("img");
        modalImage.src =
            pokemondDataParsed.images[pokemondDataParsed.currentImageIndex];
        modalImage.alt = pokemondDataParsed.name;

        const modalTag = modal.querySelector(".tag");
        modalTag.textContent = pokemondDataParsed.name;
    };

    const form = modal.querySelector("form");
    
    if (!form.dataset.listenerAdded) {
        form.addEventListener("submit", searchFavoritePokemon);
        form.dataset.listenerAdded = "true";
    }

    const closeButton = modal.querySelector(".close-button");
    closeButton.addEventListener("click", () => {
        modal.className = "modal";
    });
};

const displayPokemonsData = async (displayAllPageData = false) => {
    await fetchAllPokemonsData();
    const gridDiv = document.querySelector(".grid");
    const cardDiv = document.querySelector(".card");

    pokemonsDataList.map((onePokemon, index) => {
        if (!displayAllPageData && index >= 3) return;

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

const favoriteFunctionality = () => {
    const favoriteTitle = document.querySelector(".question-link");
    favoriteTitle.addEventListener("click", showFavoriteModal);
};

const showMore = () => {
    const renderMoreButton = document.querySelector("#render-more");
    displayPokemonsData(true);
};

const init = () => {
    displayPokemonsData();
    favoriteFunctionality();
};

init();
