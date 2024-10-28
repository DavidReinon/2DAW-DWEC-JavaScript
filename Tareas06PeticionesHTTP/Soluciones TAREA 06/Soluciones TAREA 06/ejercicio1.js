let cat = document.getElementsByName('cat')[0];
let tableWrapper = document.getElementsByClassName('table-wrapper');

const getData = async (url) => {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const jsonResponse = await response.json();
            return jsonResponse;
        }
    } catch (error) {
        console.log(error);
    }
}

const getCat = async () => {
    const response = await getData('https://api.thecatapi.com/v1/images/search?size=full');
    let photo = response[0].url;
    if(document.getElementById('cat') === null){
        let img = document.createElement('img');
        img.style.height = '300px';
        img.style.width = '300px';
        img.id = 'cat';        
        tableWrapper[0].appendChild(img);
    }
    document.getElementById('cat').src = photo;
}

cat.addEventListener('click', getCat);
