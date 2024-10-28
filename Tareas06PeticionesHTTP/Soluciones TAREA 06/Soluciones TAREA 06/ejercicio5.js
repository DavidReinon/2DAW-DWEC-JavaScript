const getDavid = async () => {
    const response = await getData('https://api.github.com/search/users?q=David');
    let photo = response.items[0].avatar_url;
    let login = response.items[0].login;
    let id = response.items[0].id;
    if(document.getElementById('david') === null){
        let img = document.createElement('img');
        let paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'david_login');
        img.style.height = '300px';
        img.style.width = '300px';
        img.id = 'david';        
        tableWrapper[4].appendChild(img);
        tableWrapper[4].appendChild(paragraph);
    }
    document.getElementById('david').src = photo;
    document.getElementById('david_login').textContent = `Login: ${login}; Id: ${id}`;
}


profiles[2].addEventListener('click', getDavid);