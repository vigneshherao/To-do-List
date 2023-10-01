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
    }
    inputTask.value = "";
}