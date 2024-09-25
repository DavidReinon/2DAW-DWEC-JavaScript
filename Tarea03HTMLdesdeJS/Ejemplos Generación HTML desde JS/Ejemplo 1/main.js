let p = document.getElementsByTagName('p')[0];


function showAlert(){
    alert('Clicked!');
}

function onClick(){
    for(let i = 0; i < 5; i++){
        let paragraph = document.createElement('p');
        paragraph.textContent = 'Nuevo';
        paragraph.addEventListener('click', showAlert);
        p.appendChild(paragraph);  
    }
}


p.addEventListener('click', onClick);
