// turning xml into fetch

let mainDiv = document.getElementById("postDiv");

function fetchPost(){
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method:"GET",
    })
    .then(function(response){
        if(!response.ok){
            throw response.status;
        }
        return response.json()
    })
    .then(function(responseJs){
        responseJs.forEach(element => {
            console.log(element); 
            createPostDiv(element);
        });
    })
    .catch(function(error){
        let pError = document.createElement("p");
        pError.innerText = "ERROR";
        mainDiv.appendChild(pError);
    })
}

fetchPost();



function createPostDiv(item) {
    let divElement = document.createElement("div");
    divElement.classList.add("div-post");
  
    let titleId = document.createElement("h3");
    titleId.textContent = item.id;
  
    let titleNew = document.createElement("h2");
    titleNew.textContent = item.title;
  
    divElement.appendChild(titleId);
    divElement.appendChild(titleNew);
    mainDiv.appendChild(divElement);
    console.log(divElement);
  }