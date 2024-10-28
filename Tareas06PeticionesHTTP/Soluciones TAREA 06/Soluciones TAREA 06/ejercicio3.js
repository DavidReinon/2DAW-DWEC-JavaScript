let profiles = document.getElementsByName('profiles');


const getProfiles = async () => {
    const response = await getData('https://api.github.com/search/users?q=JavaScript');
    console.log(response.items[0]);
}


profiles[0].addEventListener('click', getProfiles);

