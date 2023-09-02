const textBox = document.querySelector('#text-box');
const listContainer = document.querySelector('.list-container');

function addTask(){
    if(textBox.value === ''){
        alert("You must write something below!")
    }else{
        let li = document.createElement('li');
        li.innerHTML = textBox.value;
        listContainer.appendChild(li);
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    textBox.value ="";
    saveData();

}

listContainer.addEventListener("click", (e)=>{
    if(e.target.tagName == "LI"){
        e.target.classList.toggle("checked");
        saveData();
    }else if(e.target.tagName == "SPAN"){
        e.target.parentElement.remove();
        saveData();
    }
}, false)

function saveData(){
    localStorage.setItem("data", listContainer.innerHTML);
}
function getData(){
    listContainer.innerHTML = localStorage.getItem("data");
}
getData();