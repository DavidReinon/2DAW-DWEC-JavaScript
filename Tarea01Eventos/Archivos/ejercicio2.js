let headerContainer = document.getElementsByClassName("header")[0];

let imgElement = document.createElement("img");
imgElement.src = "https://cope-cdnmed.agilecontent.com/resources/jpg/6/6/1632307476066.jpg";
imgElement.style.width = "100%";
imgElement.style.maxHeight = "200px";
imgElement.style.objectFit = "cover";

headerContainer.appendChild(imgElement);
