const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTassk(){
    if(inputBox.value ===''){
        alert("You mudt Write something!");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listContainer.appendChild(li);
        let span =document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.taarget.classList.tott("checked");
        saveData();
    }
    else if(e.target.tagName === "SPAN"){
         e.target.parentElement.remove();
         saveData();
    }    
}, false);

function saveData(){
    localStorage.setItem("data,listcontainer.innerHTML");
}
function showTassk(){
    listcontainerr.innerHTML = localStorage.getItem("data");
}
showTassk();