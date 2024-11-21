//Llamada a la API para acceder a la url de 20 pokemons (correspodiente a la paginción)
let pokemonsPageResult = [];

//Llamada a la API con la url de cada pokemon en concreto para formar lista de pokemons con sus datos completos
let pokemonsDataList = [];

const firstPageUrl = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=20";
const lastPageUrl = "https://pokeapi.co/api/v2/pokemon/?offset=1300&limit=20";

const ImageIndexLimit = 3;
const ImageIndexStart = 0;

async function getData(url) {
    try {
        const response = await fetch(url || firstPageUrl);
        if (response.ok) {
            const jsonResult = await response.json();
            return jsonResult;
        }
    } catch (e) {
        alert("Api call Error.", e);
    }
}

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

const fetchAllPokemonsData = async (url) => {
    pokemonsPageResult = await getData(url);
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

const displayPokemonsData = async (displayAllPageData = false, url = null) => {
    if (!displayAllPageData) {
        await fetchAllPokemonsData(url);
    }

    const gridDiv = document.querySelector(".grid");
    const oldCardDivs = document.querySelectorAll(".content .card");

    pokemonsDataList.map((onePokemon, index) => {
        if (!displayAllPageData && index >= 3) return;

        const clonedCard = oldCardDivs[0].cloneNode(true);
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

    oldCardDivs.forEach((card) => {
        card.remove();
    });
};

const favoritesFunctionality = () => {
    const favoriteTitle = document.querySelector(".question-link");
    favoriteTitle.addEventListener("click", showFavoriteModal);
};

const renderMoreFunctionality = () => {
    const renderButtonClickEvent = (e) => {
        //Solo indicar con true que se renderize todos los elementos (20)
        //No hace falta url porque ya esta la información y no se va a hacer otra llamada a la API
        displayPokemonsData(true);

        managePaginationButtons();
        e.target.remove();
    };

    const managePaginationButtons = () => {
        const previousButton = document.createElement("button");
        previousButton.textContent = "Anterior";
        const nextButton = document.createElement("button");
        nextButton.textContent = "Siguiente";

        renderMoreDiv.appendChild(previousButton);
        renderMoreDiv.appendChild(nextButton);

        const deletePaginationButtons = () => {
            previousButton.remove();
            nextButton.remove();
        };

        const createNewRenderMoreButton = () => {
            const newRenderMoreButton = document.createElement("button");
            newRenderMoreButton.textContent = "Render More";
            newRenderMoreButton.addEventListener(
                "click",
                renderButtonClickEvent
            );

            renderMoreDiv.appendChild(newRenderMoreButton);
        };

        const managePagination = (isNext) => {
            if (!isNext) {
                return pokemonsPageResult.previous || lastPageUrl;
            }

            //Como predeterminadamente se usa la url la primera página, no hace falta controlar si es null
            return pokemonsPageResult.next;
        };

        const changePage = async (isNext) => {
            pokemonsDataList = [];
            await displayPokemonsData(false, managePagination(isNext));

            //En el caso de renderizar la ultima pagina con solo 2 pokmemons, no hace falta renderizar mas
            if (pokemonsDataList.length > 2) {
                deletePaginationButtons();
                createNewRenderMoreButton();
            }
        };

        previousButton.addEventListener("click", () => {
            changePage(false);
        });

        nextButton.addEventListener("click", () => {
            changePage(true);
        });
    };

    const renderMoreDiv = document.querySelector("#render-more");

    const renderMoreButton = renderMoreDiv.querySelector("button");
    renderMoreButton.addEventListener("click", renderButtonClickEvent);
};

const init = () => {
    displayPokemonsData();
    favoritesFunctionality();
    renderMoreFunctionality();
};

init();
