const getDevelopers = async (event) => {
    event.preventDefault();
    let searchTerm = document.getElementsByName('search_term')[0].value;
    let position = parseInt(document.getElementsByName('position')[1].value);
    
    const response = await getData(`https://api.github.com/search/users?q=${searchTerm}`);

    let photo = response.items[position].avatar_url;
    let login = response.items[position].login;
    let id = response.items[position].id;
    if(document.getElementById('developers') === null){
        let img = document.createElement('img');
        let paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'developers_login');
        img.style.height = '300px';
        img.style.width = '300px';
        img.id = 'developers';        
        tableWrapper[6].appendChild(img);
        tableWrapper[6].appendChild(paragraph);
    }
    document.getElementById('developers').src = photo;
    document.getElementById('developers_login').textContent = `Login: ${login}; Id: ${id}`;
}


form[1].addEventListener('submit', (event) => getDevelopers(event));