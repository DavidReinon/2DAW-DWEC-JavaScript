const getProfile = async () => {
    const response = await getData('https://api.github.com/search/users?q=JavaScript');
    let photo = response.items[0].avatar_url;
    if(document.getElementById('profile') === null){
        let img = document.createElement('img');
        img.style.height = '300px';
        img.style.width = '300px';
        img.id = 'profile';        
        tableWrapper[3].appendChild(img);
    }
    document.getElementById('profile').src = photo;
}


profiles[1].addEventListener('click', getProfile);