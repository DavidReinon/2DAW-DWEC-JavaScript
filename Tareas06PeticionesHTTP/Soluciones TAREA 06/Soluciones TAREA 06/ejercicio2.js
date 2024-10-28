let cats = document.getElementsByName('cats')[0];

const getCats = async () => {
    const response = await getData('https://api.thecatapi.com/v1/images/search?limit=10');
    let photos = response;
    if(document.getElementById('cat1') === null){
        photos.map((element, index) => {
            let img = document.createElement('img');
            img.style.height = '300px';
            img.style.width = '300px';
            img.id = `cat${index + 1}`;        
            tableWrapper[1].appendChild(img);
        });
    }
    photos.map((element, index) => {
        document.getElementById(`cat${index + 1}`).src = element.url;
    });
}


cats.addEventListener('click', getCats);
