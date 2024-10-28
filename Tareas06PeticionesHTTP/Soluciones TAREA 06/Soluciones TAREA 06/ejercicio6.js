let form = document.getElementsByTagName('form');

const getDavids = async (event) => {
    event.preventDefault();
    const response = await getData('https://api.github.com/search/users?q=David');
    let position = parseInt(document.getElementsByName('position')[0].value);
    let photo = response.items[position].avatar_url;
    let login = response.items[position].login;
    let id = response.items[position].id;
    if(document.getElementById('davids') === null){
        let img = document.createElement('img');
        let paragraph = document.createElement('p');
        paragraph.setAttribute('id', 'davids_login');
        img.style.height = '300px';
        img.style.width = '300px';
        img.id = 'davids';        
        tableWrapper[5].appendChild(img);
        tableWrapper[5].appendChild(paragraph);
    }
    document.getElementById('davids').src = photo;
    document.getElementById('davids_login').textContent = `Login: ${login}; Id: ${id}`;
}


form[0].addEventListener('submit', (event) => getDavids(event));