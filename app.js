const inputTask = document.getElementById("add-inputs");
const list = document.getElementById('list');

function addTask(){
    if(inputTask.value === ''){
        alert("Enter any task to do !");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputTask.value;
        list.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputTask.value = "";
    saveData();
}

list.addEventListener("click", function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        saveData();
    } 
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false);


function saveData(){
    localStorage.setItem("data",list.innerHTML);
}

function showData(){
    list.innerHTML = localStorage.getItem("data");
}
showData();